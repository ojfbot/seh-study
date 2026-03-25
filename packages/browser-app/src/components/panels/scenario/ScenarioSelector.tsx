import { useMemo } from 'react'
import { Tag } from '@carbon/react'
import {
  SCENARIOS, GLOSSARY,
  CATEGORY_LABELS,
  buildPerformanceModel,
  recommendScenarios,
  recommendedDifficulty,
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
  const events = useAppSelector(s => s.events.events)

  // Build performance model from event stream
  const model = useMemo(
    () => buildPerformanceModel(events, GLOSSARY.length),
    [events],
  )

  // Get adaptive recommendations
  const recommendations = useMemo(
    () => recommendScenarios(SCENARIOS, model, 5),
    [model],
  )
  const recommendedIds = useMemo(
    () => new Set(recommendations.map(r => r.scenario.meta.id)),
    [recommendations],
  )

  const targetDifficulty = useMemo(() => recommendedDifficulty(model), [model])

  function handleStart(scenario: ScenarioTemplate) {
    const run = initScenarioRun(scenario)
    dispatch(setActiveRun(run))
  }

  // Split into recommended vs rest
  const restScenarios = SCENARIOS.filter(s => !recommendedIds.has(s.meta.id))

  return (
    <div className="seh-study-scenario-selector">
      <h3>Scenarios</h3>
      <p className="seh-study-scenario-selector-subtitle">
        Interactive SE missions — make decisions, learn concepts in context, and build mastery.
      </p>

      {recommendations.length > 0 && (
        <>
          <h4 className="seh-study-scenario-section-title">
            Recommended for You
            <Tag type="blue" size="sm" style={{ marginLeft: '0.5rem' }}>
              {targetDifficulty}
            </Tag>
          </h4>
          <div className="seh-study-scenario-grid">
            {recommendations.map(({ scenario, score, reasons }) => {
              const completed = progress.completedScenarios[scenario.meta.id]
              return (
                <div
                  key={scenario.meta.id}
                  className={`seh-study-scenario-tile seh-study-scenario-tile--recommended${completed ? ' seh-study-scenario-tile--completed' : ''}`}
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

                  {reasons.length > 0 && (
                    <p className="seh-study-scenario-tile-reasons">
                      {reasons.join(' · ')}
                    </p>
                  )}

                  <div className="seh-study-scenario-tile-meta">
                    <span className={`seh-study-scenario-difficulty seh-study-scenario-difficulty--${scenario.meta.difficulty}`}>
                      {DIFFICULTY_LABELS[scenario.meta.difficulty]}
                    </span>
                    <span className="seh-study-scenario-tile-time">
                      ~{scenario.meta.estimatedMinutes} min
                    </span>
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
        </>
      )}

      <h4 className="seh-study-scenario-section-title">All Scenarios</h4>
      <div className="seh-study-scenario-grid">
        {restScenarios.map(scenario => {
          const completed = progress.completedScenarios[scenario.meta.id]

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
