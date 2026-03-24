import { useMemo, useCallback } from 'react'
import { Button } from '@carbon/react'
import { ArrowRight, Close } from '@carbon/icons-react'
import {
  SCENARIOS,
  getCurrentNode,
  applyDecision,
  isScenarioComplete,
  computeDebrief,
  type ScenarioTemplate,
  type DecisionOption,
} from '@ojfbot/seh-study-shared'
import { useAppSelector, useAppDispatch } from '../../../store/store.js'
import {
  updateRun,
  advanceNode,
  completeScenario,
  abandonScenario,
} from '../../../store/scenarioSlice.js'
import { scenarioSrUpdate } from '../../../store/scenarioActions.js'
import MissionStatusBar from './MissionStatusBar.js'
import NarrativeBlock from './NarrativeBlock.js'

const LETTERS = ['A', 'B', 'C', 'D']

export default function ScenarioRunner() {
  const dispatch = useAppDispatch()
  const { activeRun, showFeedback, lastDecisionFeedback } = useAppSelector(s => s.scenario)

  const template: ScenarioTemplate | undefined = useMemo(
    () => SCENARIOS.find(s => s.meta.id === activeRun?.scenarioId),
    [activeRun?.scenarioId],
  )

  const currentNode = useMemo(
    () => (template && activeRun ? getCurrentNode(template, activeRun) : null),
    [template, activeRun],
  )

  // Track which option was just selected for styling
  const lastDecision = activeRun?.decisions[activeRun.decisions.length - 1]
  const lastOptionId = showFeedback ? lastDecision?.optionId : null
  const lastOption = currentNode?.decisions.find(d => d.id === lastOptionId)

  const handleDecision = useCallback(
    (option: DecisionOption) => {
      if (!template || !activeRun || showFeedback) return
      const newRun = applyDecision(template, activeRun, option.id)
      dispatch(updateRun({ run: newRun, feedback: option.feedback }))
    },
    [template, activeRun, showFeedback, dispatch],
  )

  const handleAdvance = useCallback(() => {
    if (!template || !activeRun) return

    if (isScenarioComplete(template, activeRun)) {
      const debrief = computeDebrief(template, activeRun)
      dispatch(completeScenario(debrief))
      dispatch(scenarioSrUpdate({
        termsPromoted: debrief.termsPromoted,
        termsDemoted: debrief.termsDemoted,
      }))
    } else {
      dispatch(advanceNode())
    }
  }, [template, activeRun, dispatch])

  if (!template || !activeRun || !currentNode) return null

  const decisionIndex = activeRun.decisions.length
  const totalNodes = template.nodes.length
  const complete = isScenarioComplete(template, activeRun)

  // Determine feedback style
  let feedbackClass = ''
  let feedbackVerdict = ''
  if (lastOption) {
    if (lastOption.isCorrect) {
      feedbackClass = 'seh-study-scenario-feedback--correct'
      feedbackVerdict = 'Correct'
    } else if (lastOption.isAcceptable) {
      feedbackClass = 'seh-study-scenario-feedback--acceptable'
      feedbackVerdict = 'Acceptable'
    } else {
      feedbackClass = 'seh-study-scenario-feedback--incorrect'
      feedbackVerdict = 'Incorrect'
    }
  }

  return (
    <div className="seh-study-scenario-runner">
      {/* Header */}
      <div className="seh-study-scenario-runner-header">
        <span className="seh-study-scenario-runner-title">
          {template.meta.title}
        </span>
        <span className="seh-study-scenario-node-count">
          Decision {Math.min(decisionIndex + 1, totalNodes)} / {totalNodes}
        </span>
        <Button kind="ghost" size="sm" renderIcon={Close} onClick={() => dispatch(abandonScenario())}>
          Abort
        </Button>
      </div>

      {/* Mission status */}
      <MissionStatusBar status={activeRun.missionStatus} />

      {/* Narrative */}
      <NarrativeBlock node={currentNode} />

      {/* Decision options */}
      {!showFeedback && (
        <>
          <p className="seh-study-scenario-decisions-label">Your decision:</p>
          <div className="seh-study-scenario-decisions">
            {currentNode.decisions.map((option, i) => (
              <button
                key={option.id}
                className="seh-study-scenario-option"
                onClick={() => handleDecision(option)}
              >
                <span className="seh-study-scenario-option-letter">
                  {LETTERS[i] ?? option.id.toUpperCase()}
                </span>
                <span className="seh-study-scenario-option-text">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Feedback */}
      {showFeedback && lastOption && (
        <div className={`seh-study-scenario-feedback ${feedbackClass}`}>
          <div className="seh-study-scenario-feedback-verdict">{feedbackVerdict}</div>
          <div className="seh-study-scenario-feedback-text">{lastDecisionFeedback}</div>
          <div className="seh-study-scenario-feedback-impact">
            {lastOption.scoreImpact.risk !== 0 && (
              <span>Risk {lastOption.scoreImpact.risk > 0 ? '+' : ''}{lastOption.scoreImpact.risk}</span>
            )}
            {lastOption.scoreImpact.schedule !== 0 && (
              <span>Schedule {lastOption.scoreImpact.schedule > 0 ? '+' : ''}{lastOption.scoreImpact.schedule}</span>
            )}
            {lastOption.scoreImpact.budget !== 0 && (
              <span>Budget {lastOption.scoreImpact.budget > 0 ? '+' : ''}{lastOption.scoreImpact.budget}</span>
            )}
          </div>
          <div className="seh-study-scenario-feedback-actions">
            <Button size="sm" renderIcon={ArrowRight} onClick={handleAdvance}>
              {complete ? 'View Debrief' : 'Continue'}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
