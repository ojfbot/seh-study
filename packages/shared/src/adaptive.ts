/**
 * Adaptive scenario selection — recommends the next scenario based on
 * learner performance model.
 *
 * Scoring factors:
 * 1. Category weakness: scenarios covering weak categories score higher
 * 2. Term coverage: scenarios with unseen or weak terms score higher
 * 3. Difficulty match: match scenario difficulty to learner's current level
 * 4. Freshness: scenarios not recently played score higher
 * 5. Unplayed bonus: never-played scenarios get a boost
 */
import type { ScenarioTemplate, ScenarioDifficulty } from './scenario-types.js'
import type { PerformanceModel } from './performance-model.js'
import { TERM_CATEGORIES } from './categories.js'

// ── Types ───────────────────────────────────────────────────────────────────

export interface ScoredScenario {
  scenario: ScenarioTemplate
  score: number
  reasons: string[]
}

// ── Constants ───────────────────────────────────────────────────────────────

const WEIGHT_CATEGORY_WEAKNESS = 30
const WEIGHT_TERM_GAP = 25
const WEIGHT_DIFFICULTY_MATCH = 20
const WEIGHT_FRESHNESS = 15
const WEIGHT_UNPLAYED = 10

// ── Recommender ─────────────────────────────────────────────────────────────

/** Determine the recommended difficulty based on overall performance. */
export function recommendedDifficulty(model: PerformanceModel): ScenarioDifficulty {
  // Average category strength across categories that have been encountered
  const seen = model.categories.filter(c => c.termsCovered > 0)
  if (seen.length === 0) return 'beginner'

  const avgStrength = seen.reduce((sum, c) => sum + c.strength, 0) / seen.length
  if (avgStrength < 0.4) return 'beginner'
  if (avgStrength < 0.7) return 'intermediate'
  return 'advanced'
}

/** Score and rank scenarios by relevance to the learner's current state. */
export function recommendScenarios(
  scenarios: ScenarioTemplate[],
  model: PerformanceModel,
  limit = 5,
): ScoredScenario[] {
  const targetDifficulty = recommendedDifficulty(model)
  const now = Date.now()

  const scored = scenarios.map(scenario => scoreScenario(scenario, model, targetDifficulty, now))
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit)
}

function scoreScenario(
  scenario: ScenarioTemplate,
  model: PerformanceModel,
  targetDifficulty: ScenarioDifficulty,
  now: number,
): ScoredScenario {
  let score = 0
  const reasons: string[] = []

  // 1. Category weakness: how weak are the categories this scenario covers?
  const catWeakness = scenarioCategoryWeakness(scenario, model)
  score += catWeakness * WEIGHT_CATEGORY_WEAKNESS
  if (catWeakness > 0.5) reasons.push('Covers weak categories')

  // 2. Term gap: how many terms in this scenario are unseen or weak?
  const termGap = scenarioTermGap(scenario, model)
  score += termGap * WEIGHT_TERM_GAP
  if (termGap > 0.5) reasons.push('Introduces needed terms')

  // 3. Difficulty match
  const diffScore = difficultyMatchScore(scenario.meta.difficulty, targetDifficulty)
  score += diffScore * WEIGHT_DIFFICULTY_MATCH
  if (diffScore === 1) reasons.push(`Matches your level (${targetDifficulty})`)

  // 4. Freshness: how long since this scenario was last played?
  const freshness = scenarioFreshness(scenario, model, now)
  score += freshness * WEIGHT_FRESHNESS

  // 5. Unplayed bonus
  const scenarioProgress = model.scenarios[scenario.meta.id]
  if (!scenarioProgress) {
    score += WEIGHT_UNPLAYED
    reasons.push('Not yet attempted')
  }

  return { scenario, score: Math.round(score * 10) / 10, reasons }
}

// ── Scoring components ──────────────────────────────────────────────────────

function scenarioCategoryWeakness(scenario: ScenarioTemplate, model: PerformanceModel): number {
  const cats = scenario.meta.categories
  if (cats.length === 0) return 0

  let weaknessSum = 0
  for (const cat of cats) {
    const catData = model.categories.find(c => c.category === cat)
    // Weakness = 1 - strength. Unseen category = full weakness.
    weaknessSum += catData ? 1 - catData.strength : 1
  }
  return weaknessSum / cats.length
}

function scenarioTermGap(scenario: ScenarioTemplate, model: PerformanceModel): number {
  const termIndices = scenario.meta.termIndices
  if (termIndices.length === 0) return 0

  let gapCount = 0
  for (const ti of termIndices) {
    const perf = model.terms[ti]
    // Gap if never seen or accuracy < 0.5
    if (!perf || perf.accuracy === null || perf.accuracy < 0.5) {
      gapCount++
    }
  }
  return gapCount / termIndices.length
}

function difficultyMatchScore(
  scenarioDifficulty: ScenarioDifficulty,
  target: ScenarioDifficulty,
): number {
  const levels: ScenarioDifficulty[] = ['beginner', 'intermediate', 'advanced']
  const si = levels.indexOf(scenarioDifficulty)
  const ti = levels.indexOf(target)
  const diff = Math.abs(si - ti)
  if (diff === 0) return 1
  if (diff === 1) return 0.5
  return 0.1
}

function scenarioFreshness(
  scenario: ScenarioTemplate,
  model: PerformanceModel,
  now: number,
): number {
  const progress = model.scenarios[scenario.meta.id]
  if (!progress || !progress.lastPlayed) return 1 // never played = fully fresh

  const lastPlayedMs = new Date(progress.lastPlayed).getTime()
  const hoursSince = (now - lastPlayedMs) / (1000 * 60 * 60)

  // Freshness ramps up: 0 at 0h, ~0.5 at 24h, ~0.9 at 72h
  return Math.min(1, hoursSince / 80)
}
