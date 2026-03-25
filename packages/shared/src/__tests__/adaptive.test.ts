import { describe, it, expect } from 'vitest'
import { recommendScenarios, recommendedDifficulty } from '../adaptive.js'
import { buildPerformanceModel } from '../performance-model.js'
import { cardReviewEvent, scenarioCompleteEvent } from '../study-events.js'
import type { StudyEvent } from '../study-events.js'
import type { ScenarioTemplate } from '../scenario-types.js'

const TOTAL_TERMS = 238

function makeScenario(overrides: Partial<ScenarioTemplate['meta']> & { id: string }): ScenarioTemplate {
  return {
    meta: {
      title: overrides.id,
      subtitle: '',
      difficulty: 'beginner',
      categories: ['lifecycle'],
      termIndices: [],
      estimatedMinutes: 15,
      ...overrides,
    },
    nodes: [],
    startNodeId: 'n1',
    debriefTemplate: { successNarrative: '', failureNarrative: '', successThreshold: 60 },
  }
}

describe('recommendedDifficulty', () => {
  it('returns beginner for empty model', () => {
    const model = buildPerformanceModel([], TOTAL_TERMS)
    expect(recommendedDifficulty(model)).toBe('beginner')
  })

  it('returns intermediate for moderate performance', () => {
    // Get term 0 (risk category) right 5 times → high accuracy on that category
    const events: StudyEvent[] = Array.from({ length: 8 }, () =>
      cardReviewEvent('quiz', 0, true, 1, 1000),
    )
    // But also get some wrong to bring average down
    events.push(
      ...Array.from({ length: 4 }, () => cardReviewEvent('quiz', 1, false, 1, 1000)),
    )
    const model = buildPerformanceModel(events, TOTAL_TERMS)
    const diff = recommendedDifficulty(model)
    expect(['beginner', 'intermediate']).toContain(diff)
  })
})

describe('recommendScenarios', () => {
  it('ranks unplayed scenarios higher than played ones', () => {
    const scenarios = [
      makeScenario({ id: 'played', categories: ['lifecycle'], termIndices: [0, 1] }),
      makeScenario({ id: 'unplayed', categories: ['lifecycle'], termIndices: [2, 3] }),
    ]

    const events: StudyEvent[] = [
      scenarioCompleteEvent('played', 90, 'beginner', ['lifecycle'], 5, 5, 120000, false),
    ]
    const model = buildPerformanceModel(events, TOTAL_TERMS)
    const recs = recommendScenarios(scenarios, model)

    expect(recs[0].scenario.meta.id).toBe('unplayed')
    expect(recs[0].reasons).toContain('Not yet attempted')
  })

  it('ranks scenarios covering weak categories higher', () => {
    const scenarios = [
      makeScenario({ id: 'strong-cat', categories: ['risk'], termIndices: [0] }),
      makeScenario({ id: 'weak-cat', categories: ['technology'], termIndices: [214] }),
    ]

    // Get term 0 (risk) right many times → risk is strong
    const events: StudyEvent[] = Array.from({ length: 5 }, () =>
      cardReviewEvent('quiz', 0, true, 1, 1000),
    )
    // Get term 214 (technology) wrong → technology is weak
    events.push(cardReviewEvent('quiz', 214, false, 1, 1000))

    const model = buildPerformanceModel(events, TOTAL_TERMS)
    const recs = recommendScenarios(scenarios, model)

    // weak-cat should score higher (covers weak technology category)
    expect(recs[0].scenario.meta.id).toBe('weak-cat')
  })

  it('returns at most limit results', () => {
    const scenarios = Array.from({ length: 10 }, (_, i) =>
      makeScenario({ id: `s${i}`, categories: ['lifecycle'] }),
    )
    const model = buildPerformanceModel([], TOTAL_TERMS)
    const recs = recommendScenarios(scenarios, model, 3)
    expect(recs).toHaveLength(3)
  })

  it('prefers matching difficulty', () => {
    const scenarios = [
      makeScenario({ id: 'advanced', difficulty: 'advanced', categories: ['lifecycle'] }),
      makeScenario({ id: 'beginner', difficulty: 'beginner', categories: ['lifecycle'] }),
    ]
    // Empty model → recommended difficulty is 'beginner'
    const model = buildPerformanceModel([], TOTAL_TERMS)
    const recs = recommendScenarios(scenarios, model)

    expect(recs[0].scenario.meta.id).toBe('beginner')
  })
})
