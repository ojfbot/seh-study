import { useMemo } from 'react'
import { Tag } from '@carbon/react'
import {
  SCENARIOS,
  CATEGORY_LABELS,
  TERM_CATEGORIES,
  type ScenarioTemplate,
  type ScenarioDifficulty,
} from '@ojfbot/seh-study-shared'
import { useAppSelector, useAppDispatch } from '../../../store/store.js'
import { setActiveRun } from '../../../store/scenarioSlice.js'
import { initScenarioRun } from '@ojfbot/seh-study-shared'

const DIFFICULTY_LABELS: Record<ScenarioDifficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

export default function ScenarioSelector() {
  const dispatch = useAppDispatch()
  const progress = useAppSelector(s => s.scenario.progress)
  const cards = useAppSelector(s => s.study.cards)

  // Compute which categories the learner is weakest in (most box-1 cards)
  const weakCategories = useMemo(() => {
    const catCounts: Record<string, number> = {}
    for (const card of cards) {
      if (card.box === 1) {
        const cat = TERM_CATEGORIES[card.termIndex]
        catCounts[cat] = (catCounts[cat] || 0) + 1
      }
    }
    const sorted = Object.entries(catCounts).sort((a, b) => b[1] - a[1])
    return new Set(sorted.slice(0, 3).map(([cat]) => cat))
  }, [cards])

  function isRecommended(scenario: ScenarioTemplate): boolean {
    return scenario.meta.categories.some(c => weakCategories.has(c))
  }

  function handleStart(scenario: ScenarioTemplate) {
    const run = initScenarioRun(scenario)
    dispatch(setActiveRun(run))
  }

  return (
    <div className="seh-study-scenario-selector">
      <h3>Scenarios</h3>
      <p className="seh-study-scenario-selector-subtitle">
        Interactive SE missions — make decisions, learn concepts in context, and build mastery.
      </p>

      <div className="seh-study-scenario-grid">
        {SCENARIOS.map(scenario => {
          const completed = progress.completedScenarios[scenario.meta.id]
          const recommended = isRecommended(scenario)

          return (
            <div
              key={scenario.meta.id}
              className={`seh-study-scenario-tile${completed ? ' seh-study-scenario-tile--completed' : ''}`}
              onClick={() => handleStart(scenario)}
            >
              <div className="seh-study-scenario-tile-header">
                <h4>{scenario.meta.title}</h4>
                {completed && (
                  <span className="seh-study-scenario-tile-score">
                    Best: {completed.bestScore}%
                  </span>
                )}
              </div>

              <p className="seh-study-scenario-tile-subtitle">
                {scenario.meta.subtitle}
              </p>

              <div className="seh-study-scenario-tile-meta">
                <span className={`seh-study-scenario-difficulty seh-study-scenario-difficulty--${scenario.meta.difficulty}`}>
                  {DIFFICULTY_LABELS[scenario.meta.difficulty]}
                </span>
                <span className="seh-study-scenario-tile-time">
                  ~{scenario.meta.estimatedMinutes} min
                </span>
                {recommended && (
                  <span className="seh-study-scenario-recommended">Recommended</span>
                )}
                {scenario.meta.categories.map(cat => (
                  <Tag key={cat} type="gray" size="sm">{CATEGORY_LABELS[cat]}</Tag>
                ))}
              </div>

              {completed && (
                <span style={{ fontSize: '0.75rem', color: 'var(--cds-text-helper)' }}>
                  Completed {completed.attempts} time{completed.attempts !== 1 ? 's' : ''}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
