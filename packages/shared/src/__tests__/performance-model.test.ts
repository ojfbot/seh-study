import { describe, it, expect } from 'vitest'
import {
  buildPerformanceModel,
  getTermStrength,
  getCategoryStrength,
  getWeakCategories,
  getWeakTerms,
} from '../performance-model.js'
import {
  cardReviewEvent,
  scenarioDecisionEvent,
  scenarioCompleteEvent,
} from '../study-events.js'
import type { StudyEvent } from '../study-events.js'

const TOTAL_TERMS = 238

describe('buildPerformanceModel', () => {
  it('returns empty model for no events', () => {
    const model = buildPerformanceModel([], TOTAL_TERMS)
    expect(model.totalEvents).toBe(0)
    expect(model.terms).toHaveLength(TOTAL_TERMS)
    expect(model.terms[0].accuracy).toBeNull()
    expect(model.terms[0].encounters).toBe(0)
    expect(model.weakTerms).toHaveLength(0)
  })

  it('tracks term accuracy from card reviews', () => {
    const events: StudyEvent[] = [
      cardReviewEvent('flashcard', 0, true, 1, 2000),
      cardReviewEvent('flashcard', 0, true, 2, 1500),
      cardReviewEvent('flashcard', 0, false, 3, 3000),
    ]
    const model = buildPerformanceModel(events, TOTAL_TERMS)

    const term0 = model.terms[0]
    expect(term0.encounters).toBe(3)
    expect(term0.accuracy).not.toBeNull()
    // After true, true, false with EWMA (alpha=0.3):
    // ewma1 = 1.0, ewma2 = 0.3*1 + 0.7*1 = 1.0, ewma3 = 0.3*0 + 0.7*1.0 = 0.7
    expect(term0.accuracy).toBeCloseTo(0.7, 1)
    expect(term0.avgResponseTimeMs).toBe(Math.round((2000 + 1500 + 3000) / 3))
  })

  it('tracks terms from scenario decisions', () => {
    const events: StudyEvent[] = [
      scenarioDecisionEvent('s1', 'n1', 'a', true, true, [5, 10], { risk: 30, schedule: 80, budget: 80 }, 5000),
      scenarioDecisionEvent('s1', 'n2', 'b', false, false, [5, 15], { risk: 40, schedule: 70, budget: 75 }, 4000),
    ]
    const model = buildPerformanceModel(events, TOTAL_TERMS)

    // Term 5: correct (1.0), then incorrect (0.0) → EWMA = 0.3*0 + 0.7*1 = 0.7
    expect(model.terms[5].accuracy).toBeCloseTo(0.7, 1)
    expect(model.terms[5].encounters).toBe(2)

    // Term 10: only seen in correct decision → 1.0
    expect(model.terms[10].accuracy).toBe(1)
    expect(model.terms[10].encounters).toBe(1)

    // Term 15: only seen in incorrect decision → 0.0
    expect(model.terms[15].accuracy).toBe(0)
  })

  it('tracks scenario completion stats', () => {
    const events: StudyEvent[] = [
      scenarioCompleteEvent('s1', 85, 'beginner', ['lifecycle'], 5, 4, 120000, false),
      scenarioCompleteEvent('s1', 70, 'beginner', ['lifecycle'], 5, 3, 100000, false),
      scenarioCompleteEvent('s2', 90, 'intermediate', ['design'], 6, 5, 150000, false),
    ]
    const model = buildPerformanceModel(events, TOTAL_TERMS)

    expect(model.scenarios['s1'].bestScore).toBe(85)
    expect(model.scenarios['s1'].attempts).toBe(2)
    expect(model.scenarios['s1'].avgScore).toBe(78) // round((85+70)/2)
    expect(model.scenarios['s2'].bestScore).toBe(90)
    expect(model.scenarios['s2'].attempts).toBe(1)
  })

  it('ignores abandoned scenarios', () => {
    const events: StudyEvent[] = [
      scenarioCompleteEvent('s1', 0, 'beginner', ['lifecycle'], 2, 0, 30000, true),
    ]
    const model = buildPerformanceModel(events, TOTAL_TERMS)
    expect(model.scenarios['s1']).toBeUndefined()
  })

  it('computes category strengths', () => {
    // Term 0 = 'risk' category. Get it right twice.
    const events: StudyEvent[] = [
      cardReviewEvent('quiz', 0, true, 1, 1000),
      cardReviewEvent('quiz', 0, true, 2, 1000),
    ]
    const model = buildPerformanceModel(events, TOTAL_TERMS)

    const riskCat = model.categories.find(c => c.category === 'risk')!
    expect(riskCat.termsCovered).toBe(1)
    expect(riskCat.strength).toBeGreaterThan(0)
  })

  it('identifies weak terms', () => {
    // Get terms 0,1,2 wrong repeatedly
    const events: StudyEvent[] = [
      cardReviewEvent('flashcard', 0, false, 1, 1000),
      cardReviewEvent('flashcard', 0, false, 1, 1000),
      cardReviewEvent('flashcard', 1, false, 1, 1000),
      cardReviewEvent('flashcard', 2, true, 1, 1000),
      cardReviewEvent('flashcard', 2, true, 2, 1000),
    ]
    const model = buildPerformanceModel(events, TOTAL_TERMS)

    const weakTerms = getWeakTerms(model, 5)
    // Term 0 (accuracy=0) and 1 (accuracy=0) should be weakest
    expect(weakTerms).toContain(0)
    expect(weakTerms).toContain(1)
    // Term 2 (accuracy=1.0) should NOT be weak
    expect(weakTerms).not.toContain(2)
  })
})

describe('query helpers', () => {
  it('getTermStrength returns null for unseen term', () => {
    const model = buildPerformanceModel([], TOTAL_TERMS)
    expect(getTermStrength(model, 42)).toBeNull()
  })

  it('getCategoryStrength returns 0 for unseen category', () => {
    const model = buildPerformanceModel([], TOTAL_TERMS)
    expect(getCategoryStrength(model, 'technology')).toBe(0)
  })

  it('getWeakCategories returns empty for fresh model', () => {
    const model = buildPerformanceModel([], TOTAL_TERMS)
    // No categories encountered = no weak categories
    expect(getWeakCategories(model)).toHaveLength(0)
  })
})
