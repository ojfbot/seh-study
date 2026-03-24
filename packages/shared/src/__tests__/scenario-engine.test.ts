import { describe, it, expect } from 'vitest'
import {
  initScenarioRun,
  getCurrentNode,
  applyDecision,
  isScenarioComplete,
  computeScore,
  computeDebrief,
  applySrUpdates,
} from '../scenario-engine.js'
import { initAllCards } from '../sr-engine.js'
import type { ScenarioTemplate } from '../scenario-types.js'

const NOW = new Date('2026-03-22T12:00:00Z')

/** Minimal 3-node test scenario for unit tests. */
const TEST_SCENARIO: ScenarioTemplate = {
  meta: {
    id: 'test-scenario',
    title: 'Test Scenario',
    subtitle: 'A minimal scenario for testing',
    difficulty: 'beginner',
    categories: ['lifecycle'],
    termIndices: [0, 1, 2],
    estimatedMinutes: 5,
  },
  nodes: [
    {
      id: 'node-1',
      phase: 'Phase A',
      title: 'First Decision',
      narrative: 'You face a choice about requirements.',
      termHighlights: [0],
      decisions: [
        {
          id: 'a',
          text: 'Correct choice',
          termIndices: [0],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Good — you followed the process.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 0, budget: 0 },
        },
        {
          id: 'b',
          text: 'Acceptable choice',
          termIndices: [0],
          isCorrect: false,
          isAcceptable: true,
          feedback: 'Acceptable but not ideal.',
          nextNodeId: null,
          scoreImpact: { risk: 0, schedule: -5, budget: 0 },
        },
        {
          id: 'c',
          text: 'Wrong choice',
          termIndices: [0],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'This skips a critical step.',
          nextNodeId: null,
          scoreImpact: { risk: 10, schedule: -10, budget: -10 },
        },
      ],
      defaultNextNodeId: 'node-2',
    },
    {
      id: 'node-2',
      phase: 'Phase A',
      title: 'Second Decision',
      narrative: 'A follow-up challenge.',
      termHighlights: [1],
      decisions: [
        {
          id: 'a',
          text: 'Correct',
          termIndices: [1],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Well done.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 5, budget: 0 },
        },
        {
          id: 'b',
          text: 'Wrong',
          termIndices: [1],
          isCorrect: false,
          isAcceptable: false,
          feedback: 'Missed the mark.',
          nextNodeId: null,
          scoreImpact: { risk: 10, schedule: -10, budget: -5 },
        },
      ],
      defaultNextNodeId: 'node-3',
    },
    {
      id: 'node-3',
      phase: 'Phase B',
      title: 'Final Decision',
      narrative: 'Last step.',
      termHighlights: [2],
      decisions: [
        {
          id: 'a',
          text: 'Correct',
          termIndices: [2],
          isCorrect: true,
          isAcceptable: true,
          feedback: 'Mission success.',
          nextNodeId: null,
          scoreImpact: { risk: -5, schedule: 5, budget: 5 },
        },
      ],
      defaultNextNodeId: null, // terminal
    },
  ],
  startNodeId: 'node-1',
  debriefTemplate: {
    successNarrative: 'The mission succeeded!',
    failureNarrative: 'The mission had serious issues.',
    successThreshold: 60,
  },
}

describe('scenario-engine', () => {
  it('initScenarioRun creates a valid initial state', () => {
    const run = initScenarioRun(TEST_SCENARIO, NOW)
    expect(run.scenarioId).toBe('test-scenario')
    expect(run.currentNodeId).toBe('node-1')
    expect(run.decisions).toHaveLength(0)
    expect(run.missionStatus.risk).toBe(30)
    expect(run.missionStatus.schedule).toBe(80)
    expect(run.missionStatus.budget).toBe(80)
    expect(run.completedAt).toBeNull()
  })

  it('getCurrentNode returns the active node', () => {
    const run = initScenarioRun(TEST_SCENARIO, NOW)
    const node = getCurrentNode(TEST_SCENARIO, run)
    expect(node?.id).toBe('node-1')
    expect(node?.title).toBe('First Decision')
  })

  it('applyDecision records decision and advances node', () => {
    const run = initScenarioRun(TEST_SCENARIO, NOW)
    const next = applyDecision(TEST_SCENARIO, run, 'a', NOW)
    expect(next.decisions).toHaveLength(1)
    expect(next.decisions[0].isCorrect).toBe(true)
    expect(next.currentNodeId).toBe('node-2')
    expect(next.missionStatus.risk).toBe(25) // 30 - 5
  })

  it('applyDecision with wrong answer increases risk', () => {
    const run = initScenarioRun(TEST_SCENARIO, NOW)
    const next = applyDecision(TEST_SCENARIO, run, 'c', NOW)
    expect(next.missionStatus.risk).toBe(40) // 30 + 10
    expect(next.missionStatus.schedule).toBe(70) // 80 - 10
    expect(next.missionStatus.termsMissed).toContain(0)
  })

  it('applyDecision with acceptable answer records termsCorrect', () => {
    const run = initScenarioRun(TEST_SCENARIO, NOW)
    const next = applyDecision(TEST_SCENARIO, run, 'b', NOW)
    expect(next.missionStatus.termsCorrect).toContain(0)
    expect(next.decisions[0].isAcceptable).toBe(true)
    expect(next.decisions[0].isCorrect).toBe(false)
  })

  it('isScenarioComplete returns false mid-scenario', () => {
    const run = initScenarioRun(TEST_SCENARIO, NOW)
    const afterFirst = applyDecision(TEST_SCENARIO, run, 'a', NOW)
    expect(isScenarioComplete(TEST_SCENARIO, afterFirst)).toBe(false)
  })

  it('isScenarioComplete returns true at terminal node', () => {
    let run = initScenarioRun(TEST_SCENARIO, NOW)
    run = applyDecision(TEST_SCENARIO, run, 'a', NOW) // node-1 → node-2
    run = applyDecision(TEST_SCENARIO, run, 'a', NOW) // node-2 → node-3
    run = applyDecision(TEST_SCENARIO, run, 'a', NOW) // node-3 → null (terminal)
    expect(isScenarioComplete(TEST_SCENARIO, run)).toBe(true)
    expect(run.completedAt).not.toBeNull()
  })

  it('computeScore returns a perfect score for all-correct run', () => {
    let run = initScenarioRun(TEST_SCENARIO, NOW)
    run = applyDecision(TEST_SCENARIO, run, 'a', NOW)
    run = applyDecision(TEST_SCENARIO, run, 'a', NOW)
    run = applyDecision(TEST_SCENARIO, run, 'a', NOW)
    const score = computeScore(run)
    // 70 (all correct) + ~30 (healthy gauges) = ~100
    expect(score).toBeGreaterThanOrEqual(90)
  })

  it('computeScore penalizes incorrect decisions', () => {
    let run = initScenarioRun(TEST_SCENARIO, NOW)
    run = applyDecision(TEST_SCENARIO, run, 'c', NOW) // wrong
    run = applyDecision(TEST_SCENARIO, run, 'b', NOW) // wrong
    run = applyDecision(TEST_SCENARIO, run, 'a', NOW) // correct
    const score = computeScore(run)
    expect(score).toBeLessThan(60)
  })

  it('computeDebrief produces termsPromoted and termsDemoted', () => {
    let run = initScenarioRun(TEST_SCENARIO, NOW)
    run = applyDecision(TEST_SCENARIO, run, 'a', NOW) // correct, term 0
    run = applyDecision(TEST_SCENARIO, run, 'b', NOW) // wrong, term 1
    run = applyDecision(TEST_SCENARIO, run, 'a', NOW) // correct, term 2
    const debrief = computeDebrief(TEST_SCENARIO, run, NOW)
    expect(debrief.termsPromoted).toContain(0)
    expect(debrief.termsPromoted).toContain(2)
    expect(debrief.termsDemoted).toContain(1)
  })

  it('applySrUpdates promotes and demotes cards', () => {
    const cards = initAllCards(5, NOW)
    const debrief: ReturnType<typeof computeDebrief> = {
      scenarioId: 'test-scenario',
      score: 75,
      decisions: [],
      missionStatus: {
        risk: 30, schedule: 80, budget: 80, phase: '',
        termsEncountered: [0, 1], termsCorrect: [0], termsMissed: [1],
      },
      termsPromoted: [0],
      termsDemoted: [1],
      completedAt: NOW.toISOString(),
    }
    const updated = applySrUpdates(cards, debrief, NOW)
    expect(updated[0].box).toBe(2) // promoted
    expect(updated[1].box).toBe(1) // demoted (was already 1, stays 1)
    expect(updated[2].box).toBe(1) // untouched
  })

  it('termHighlights are tracked in termsEncountered', () => {
    const run = initScenarioRun(TEST_SCENARIO, NOW)
    const next = applyDecision(TEST_SCENARIO, run, 'a', NOW)
    // node-1 has termHighlights: [0], option 'a' has termIndices: [0]
    expect(next.missionStatus.termsEncountered).toContain(0)
  })

  it('mission status gauges clamp to 0-100', () => {
    // Create a run and apply many bad decisions to push gauges to extremes
    let run = initScenarioRun(TEST_SCENARIO, NOW)
    // Override mission status to near-boundary
    run = {
      ...run,
      missionStatus: { ...run.missionStatus, risk: 95, schedule: 5, budget: 5 },
    }
    const next = applyDecision(TEST_SCENARIO, run, 'c', NOW)
    expect(next.missionStatus.risk).toBeLessThanOrEqual(100)
    expect(next.missionStatus.schedule).toBeGreaterThanOrEqual(0)
    expect(next.missionStatus.budget).toBeGreaterThanOrEqual(0)
  })
})
