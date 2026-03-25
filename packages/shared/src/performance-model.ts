/**
 * Learner performance model — computes per-term and per-category strength
 * from the study event stream.
 *
 * Uses exponentially-weighted moving averages (EWMA) so recent interactions
 * matter more than old ones, without needing to trim history.
 *
 * Pure functions, no side effects.
 */
import type { Category } from './types.js'
import type { ScenarioId, ScenarioDifficulty } from './scenario-types.js'
import type { StudyEvent, CardReviewEvent, ScenarioDecisionEvent, ScenarioCompleteEvent } from './study-events.js'
import { TERM_CATEGORIES } from './categories.js'
import { CATEGORIES } from './types.js'

// ── Model types ─────────────────────────────────────────────────────────────

export interface TermPerformance {
  termIndex: number
  /** EWMA accuracy (0–1). null = never seen. */
  accuracy: number | null
  /** Total times this term appeared in any context. */
  encounters: number
  /** Average response time (ms) across recent encounters. */
  avgResponseTimeMs: number | null
  /** Last seen timestamp. */
  lastSeen: string | null
}

export interface CategoryStrength {
  category: Category
  /** Weighted accuracy across all terms in this category (0–1). */
  strength: number
  /** How many terms in this category have been encountered. */
  termsCovered: number
  /** Total terms in this category. */
  termsTotal: number
}

export interface ScenarioPerformance {
  scenarioId: ScenarioId
  bestScore: number
  attempts: number
  avgScore: number
  lastPlayed: string | null
}

export interface PerformanceModel {
  /** Per-term accuracy and response time. */
  terms: TermPerformance[]
  /** Per-category aggregated strength. */
  categories: CategoryStrength[]
  /** Per-scenario score history. */
  scenarios: Record<ScenarioId, ScenarioPerformance>
  /** Overall stats. */
  totalEvents: number
  totalStudyTimeMs: number
  /** Weakest categories (sorted, weakest first). */
  weakCategories: Category[]
  /** Terms most in need of review (sorted, weakest first). */
  weakTerms: number[]
}

// ── Constants ───────────────────────────────────────────────────────────────

/** EWMA decay factor. 0.3 = recent events weighted ~3x vs older ones. */
const ALPHA = 0.3

/** Maximum number of weak terms to surface. */
const MAX_WEAK_TERMS = 20

// ── Builder ─────────────────────────────────────────────────────────────────

/** Build a performance model from a stream of study events. */
export function buildPerformanceModel(
  events: StudyEvent[],
  totalTerms: number,
): PerformanceModel {
  // Accumulators
  const termAcc: Map<number, { ewma: number; count: number; rtSum: number; rtCount: number; lastSeen: string }> = new Map()
  const scenarioAcc: Map<ScenarioId, { scores: number[]; lastPlayed: string }> = new Map()
  let totalStudyTimeMs = 0

  // Process events chronologically
  for (const event of events) {
    switch (event.type) {
      case 'card-review':
        updateTermFromCard(termAcc, event)
        totalStudyTimeMs += event.responseTimeMs
        break
      case 'scenario-decision':
        updateTermsFromDecision(termAcc, event)
        totalStudyTimeMs += event.responseTimeMs
        break
      case 'scenario-complete':
        updateScenario(scenarioAcc, event)
        totalStudyTimeMs += event.durationMs
        break
    }
  }

  // Build term performances
  const terms: TermPerformance[] = Array.from({ length: totalTerms }, (_, i) => {
    const acc = termAcc.get(i)
    if (!acc) return { termIndex: i, accuracy: null, encounters: 0, avgResponseTimeMs: null, lastSeen: null }
    return {
      termIndex: i,
      accuracy: acc.ewma,
      encounters: acc.count,
      avgResponseTimeMs: acc.rtCount > 0 ? Math.round(acc.rtSum / acc.rtCount) : null,
      lastSeen: acc.lastSeen,
    }
  })

  // Build category strengths
  const categories = buildCategoryStrengths(terms, totalTerms)

  // Build scenario performances
  const scenarios: Record<ScenarioId, ScenarioPerformance> = {}
  for (const [id, acc] of scenarioAcc) {
    const sum = acc.scores.reduce((a, b) => a + b, 0)
    scenarios[id] = {
      scenarioId: id,
      bestScore: Math.max(...acc.scores),
      attempts: acc.scores.length,
      avgScore: Math.round(sum / acc.scores.length),
      lastPlayed: acc.lastPlayed,
    }
  }

  // Weak categories: sorted by strength ascending
  const weakCategories = [...categories]
    .filter(c => c.termsCovered > 0)
    .sort((a, b) => a.strength - b.strength)
    .map(c => c.category)

  // Weak terms: seen terms with lowest accuracy
  const weakTerms = terms
    .filter(t => t.accuracy !== null && t.accuracy < 0.7)
    .sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0))
    .slice(0, MAX_WEAK_TERMS)
    .map(t => t.termIndex)

  return {
    terms,
    categories,
    scenarios,
    totalEvents: events.length,
    totalStudyTimeMs,
    weakCategories,
    weakTerms,
  }
}

// ── Internal helpers ────────────────────────────────────────────────────────

function updateTermFromCard(
  acc: Map<number, { ewma: number; count: number; rtSum: number; rtCount: number; lastSeen: string }>,
  event: CardReviewEvent,
) {
  const prev = acc.get(event.termIndex)
  const score = event.correct ? 1 : 0

  if (!prev) {
    acc.set(event.termIndex, {
      ewma: score,
      count: 1,
      rtSum: event.responseTimeMs,
      rtCount: 1,
      lastSeen: event.timestamp,
    })
  } else {
    prev.ewma = ALPHA * score + (1 - ALPHA) * prev.ewma
    prev.count++
    prev.rtSum += event.responseTimeMs
    prev.rtCount++
    prev.lastSeen = event.timestamp
  }
}

function updateTermsFromDecision(
  acc: Map<number, { ewma: number; count: number; rtSum: number; rtCount: number; lastSeen: string }>,
  event: ScenarioDecisionEvent,
) {
  const score = event.correct ? 1 : event.acceptable ? 0.4 : 0
  const perTermRt = event.termIndices.length > 0
    ? event.responseTimeMs / event.termIndices.length
    : 0

  for (const termIndex of event.termIndices) {
    const prev = acc.get(termIndex)
    if (!prev) {
      acc.set(termIndex, {
        ewma: score,
        count: 1,
        rtSum: perTermRt,
        rtCount: 1,
        lastSeen: event.timestamp,
      })
    } else {
      prev.ewma = ALPHA * score + (1 - ALPHA) * prev.ewma
      prev.count++
      prev.rtSum += perTermRt
      prev.rtCount++
      prev.lastSeen = event.timestamp
    }
  }
}

function updateScenario(
  acc: Map<ScenarioId, { scores: number[]; lastPlayed: string }>,
  event: ScenarioCompleteEvent,
) {
  if (event.abandoned) return
  const prev = acc.get(event.scenarioId)
  if (!prev) {
    acc.set(event.scenarioId, { scores: [event.score], lastPlayed: event.timestamp })
  } else {
    prev.scores.push(event.score)
    prev.lastPlayed = event.timestamp
  }
}

function buildCategoryStrengths(
  terms: TermPerformance[],
  totalTerms: number,
): CategoryStrength[] {
  // Count terms per category
  const categoryTermCounts: Record<Category, number> = {} as Record<Category, number>
  for (const cat of CATEGORIES) categoryTermCounts[cat] = 0
  for (let i = 0; i < totalTerms && i < TERM_CATEGORIES.length; i++) {
    categoryTermCounts[TERM_CATEGORIES[i]]++
  }

  return CATEGORIES.map(category => {
    const categoryTerms = terms.filter(
      (t) => t.termIndex < TERM_CATEGORIES.length && TERM_CATEGORIES[t.termIndex] === category,
    )
    const seen = categoryTerms.filter(t => t.accuracy !== null)

    let strength = 0
    if (seen.length > 0) {
      // Weighted average: terms with more encounters are weighted higher
      let totalWeight = 0
      let weightedSum = 0
      for (const t of seen) {
        const weight = Math.min(t.encounters, 10) // cap weight at 10 encounters
        totalWeight += weight
        weightedSum += (t.accuracy ?? 0) * weight
      }
      strength = totalWeight > 0 ? weightedSum / totalWeight : 0
    }

    return {
      category,
      strength: Math.round(strength * 100) / 100,
      termsCovered: seen.length,
      termsTotal: categoryTermCounts[category],
    }
  })
}

// ── Query helpers ───────────────────────────────────────────────────────────

/** Get term performance by index. */
export function getTermStrength(model: PerformanceModel, termIndex: number): number | null {
  return model.terms[termIndex]?.accuracy ?? null
}

/** Get category strength (0–1). */
export function getCategoryStrength(model: PerformanceModel, category: Category): number {
  return model.categories.find(c => c.category === category)?.strength ?? 0
}

/** Get categories sorted by weakness (weakest first). */
export function getWeakCategories(model: PerformanceModel, limit = 3): Category[] {
  return model.weakCategories.slice(0, limit)
}

/** Get term indices most in need of review. */
export function getWeakTerms(model: PerformanceModel, limit = 10): number[] {
  return model.weakTerms.slice(0, limit)
}
