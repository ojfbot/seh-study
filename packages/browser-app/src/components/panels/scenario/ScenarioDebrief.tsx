import { useMemo } from 'react'
import { Button } from '@carbon/react'
import { Renew, ArrowLeft } from '@carbon/icons-react'
import {
  SCENARIOS,
  GLOSSARY,
  initScenarioRun,
  type ScenarioTemplate,
} from '@ojfbot/seh-study-shared'
import { useAppSelector, useAppDispatch } from '../../../store/store.js'
import { selectScenario, setActiveRun } from '../../../store/scenarioSlice.js'
import MissionStatusBar from './MissionStatusBar.js'

export default function ScenarioDebrief() {
  const dispatch = useAppDispatch()
  const { debrief } = useAppSelector(s => s.scenario)

  const template: ScenarioTemplate | undefined = useMemo(
    () => SCENARIOS.find(s => s.meta.id === debrief?.scenarioId),
    [debrief?.scenarioId],
  )

  if (!debrief || !template) return null

  const passed = debrief.score >= template.debriefTemplate.successThreshold
  const narrative = passed
    ? template.debriefTemplate.successNarrative
    : template.debriefTemplate.failureNarrative

  function handlePlayAgain() {
    if (!template) return
    const run = initScenarioRun(template)
    dispatch(setActiveRun(run))
  }

  function handleBack() {
    dispatch(selectScenario(null))
  }

  return (
    <div className="seh-study-scenario-debrief">
      {/* Banner */}
      <div className={`seh-study-scenario-debrief-banner seh-study-scenario-debrief-banner--${passed ? 'success' : 'failure'}`}>
        <div className="seh-study-scenario-debrief-score">{debrief.score}%</div>
        <div className="seh-study-scenario-debrief-narrative">{narrative}</div>
      </div>

      {/* Final mission status */}
      <div className="seh-study-scenario-debrief-gauges">
        <MissionStatusBar status={debrief.missionStatus} />
      </div>

      {/* Decision timeline */}
      <div className="seh-study-scenario-timeline">
        <h4>Decision Timeline</h4>
        {debrief.decisions.map((decision, i) => {
          const node = template.nodes.find(n => n.id === decision.nodeId)
          const option = node?.decisions.find(d => d.id === decision.optionId)
          const dotClass = decision.isCorrect
            ? 'correct'
            : decision.isAcceptable
              ? 'acceptable'
              : 'incorrect'

          return (
            <div key={`${decision.nodeId}-${i}`} className="seh-study-scenario-timeline-item">
              <span className={`seh-study-scenario-timeline-dot seh-study-scenario-timeline-dot--${dotClass}`} />
              <div>
                <div className="seh-study-scenario-timeline-label">
                  {node?.title ?? `Node ${i + 1}`}
                </div>
                <div className="seh-study-scenario-timeline-choice">
                  {option?.text ?? 'Unknown choice'}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Terms report */}
      <div className="seh-study-scenario-terms-report">
        <div className="seh-study-scenario-terms-col seh-study-scenario-terms-col--promoted">
          <h4>Terms Mastered ({debrief.termsPromoted.length})</h4>
          <ul className="seh-study-scenario-terms-list">
            {debrief.termsPromoted.map(idx => (
              <li key={idx}>{GLOSSARY[idx]?.term}</li>
            ))}
            {debrief.termsPromoted.length === 0 && <li>None</li>}
          </ul>
        </div>
        <div className="seh-study-scenario-terms-col seh-study-scenario-terms-col--demoted">
          <h4>Review Needed ({debrief.termsDemoted.length})</h4>
          <ul className="seh-study-scenario-terms-list">
            {debrief.termsDemoted.map(idx => (
              <li key={idx}>{GLOSSARY[idx]?.term}</li>
            ))}
            {debrief.termsDemoted.length === 0 && <li>None</li>}
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="seh-study-scenario-debrief-actions">
        <Button kind="tertiary" size="md" renderIcon={ArrowLeft} onClick={handleBack}>
          All Scenarios
        </Button>
        <Button kind="primary" size="md" renderIcon={Renew} onClick={handlePlayAgain}>
          Play Again
        </Button>
      </div>
    </div>
  )
}
