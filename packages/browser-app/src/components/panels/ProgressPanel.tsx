import { useMemo } from 'react'
import { Tile, Tag } from '@carbon/react'
import {
  getBoxDistribution, getMasteryPercent,
  CATEGORIES, CATEGORY_LABELS, TERM_CATEGORIES, GLOSSARY,
  buildPerformanceModel, getWeakCategories, getWeakTerms,
  type LeitnerBox, type Category,
} from '@ojfbot/seh-study-shared'
import { useAppSelector } from '../../store/store.js'
import './ProgressPanel.css'

const BOX_LABELS: Record<LeitnerBox, string> = {
  1: 'New / Failed',
  2: '1 day',
  3: '3 days',
  4: '7 days',
  5: 'Mastered',
}

export default function ProgressPanel() {
  const { cards, sessions } = useAppSelector(s => s.study)
  const events = useAppSelector(s => s.events.events)
  const scenarioProgress = useAppSelector(s => s.scenario.progress)

  const boxDist = useMemo(() => getBoxDistribution(cards), [cards])
  const mastery = useMemo(() => getMasteryPercent(cards), [cards])

  // Performance model from event stream
  const model = useMemo(
    () => buildPerformanceModel(events, GLOSSARY.length),
    [events],
  )

  const weakCats = useMemo(() => getWeakCategories(model, 3), [model])
  const weakTerms = useMemo(() => getWeakTerms(model, 8), [model])

  const totalReviewed = sessions.reduce((sum, s) => sum + s.cardsReviewed, 0)
  const totalCorrect = sessions.reduce((sum, s) => sum + s.correct, 0)
  const accuracy = totalReviewed > 0 ? Math.round((totalCorrect / totalReviewed) * 100) : 0

  // Scenario stats
  const completedEntries = Object.values(scenarioProgress.completedScenarios)
  const scenariosCompleted = completedEntries.length
  const totalAttempts = completedEntries.reduce((sum, e) => sum + e.attempts, 0)
  const avgScore = completedEntries.length > 0
    ? Math.round(completedEntries.reduce((sum, e) => sum + e.bestScore, 0) / completedEntries.length)
    : 0

  return (
    <div className="seh-study-panel seh-study-panel--progress">
      <div className="progress-stats-row">
        <Tile className="progress-stat-tile">
          <span className="stat-value">{mastery}%</span>
          <span className="stat-label">Mastery</span>
        </Tile>
        <Tile className="progress-stat-tile">
          <span className="stat-value">{totalReviewed}</span>
          <span className="stat-label">Cards Reviewed</span>
        </Tile>
        <Tile className="progress-stat-tile">
          <span className="stat-value">{accuracy}%</span>
          <span className="stat-label">Accuracy</span>
        </Tile>
        <Tile className="progress-stat-tile">
          <span className="stat-value">{sessions.length}</span>
          <span className="stat-label">Sessions</span>
        </Tile>
      </div>

      {/* Scenario progress row */}
      {scenariosCompleted > 0 && (
        <div className="progress-stats-row">
          <Tile className="progress-stat-tile">
            <span className="stat-value">{scenariosCompleted}</span>
            <span className="stat-label">Scenarios Completed</span>
          </Tile>
          <Tile className="progress-stat-tile">
            <span className="stat-value">{totalAttempts}</span>
            <span className="stat-label">Total Attempts</span>
          </Tile>
          <Tile className="progress-stat-tile">
            <span className="stat-value">{avgScore}%</span>
            <span className="stat-label">Avg Best Score</span>
          </Tile>
          <Tile className="progress-stat-tile">
            <span className="stat-value">{model.totalEvents}</span>
            <span className="stat-label">Events Logged</span>
          </Tile>
        </div>
      )}

      {/* Weak areas — only show when there's data */}
      {weakCats.length > 0 && (
        <>
          <h4 className="progress-section-title">Focus Areas</h4>
          <div className="progress-focus-areas">
            {weakCats.map(cat => {
              const catData = model.categories.find(c => c.category === cat)
              const pct = catData ? Math.round(catData.strength * 100) : 0
              return (
                <div key={cat} className="progress-focus-item">
                  <Tag type="red" size="sm">{CATEGORY_LABELS[cat]}</Tag>
                  <span className="progress-focus-strength">{pct}% strength</span>
                  <span className="progress-focus-coverage">
                    {catData?.termsCovered ?? 0}/{catData?.termsTotal ?? 0} terms seen
                  </span>
                </div>
              )
            })}
          </div>
        </>
      )}

      {weakTerms.length > 0 && (
        <>
          <h4 className="progress-section-title">Terms to Review</h4>
          <div className="progress-weak-terms">
            {weakTerms.map(ti => {
              const perf = model.terms[ti]
              const pct = perf?.accuracy != null ? Math.round(perf.accuracy * 100) : 0
              return (
                <div key={ti} className="progress-weak-term">
                  <span className="progress-weak-term-name">{GLOSSARY[ti].term}</span>
                  <Tag type={pct < 30 ? 'red' : 'magenta'} size="sm">{pct}%</Tag>
                </div>
              )
            })}
          </div>
        </>
      )}

      <h4 className="progress-section-title">Box Distribution</h4>
      <div className="box-distribution">
        {([1, 2, 3, 4, 5] as LeitnerBox[]).map(box => {
          const count = boxDist[box]
          const pct = Math.round((count / GLOSSARY.length) * 100)
          return (
            <div key={box} className="box-bar-row">
              <span className="box-label">Box {box}: {BOX_LABELS[box]}</span>
              <div className="box-bar-track">
                <div
                  className={`box-bar-fill box-bar-fill--${box}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="box-count">{count}</span>
            </div>
          )
        })}
      </div>

      <h4 className="progress-section-title">Category Mastery</h4>
      <div className="category-mastery-grid">
        {CATEGORIES.map(cat => {
          // Blend SR mastery with performance model strength
          const catData = model.categories.find(c => c.category === cat)
          const modelStrength = catData?.strength ?? 0
          const srTerms = cards.filter((_, i) => TERM_CATEGORIES[i] === cat)
          const srMastered = srTerms.filter(c => c.box >= 4).length
          const srTotal = srTerms.length
          const srPct = srTotal > 0 ? srMastered / srTotal : 0

          // Weighted blend: 60% performance model, 40% SR boxes (when data exists)
          const hasModelData = catData && catData.termsCovered > 0
          const blended = hasModelData
            ? Math.round((modelStrength * 0.6 + srPct * 0.4) * 100)
            : Math.round(srPct * 100)

          const isWeak = weakCats.includes(cat)

          return (
            <div key={cat} className={`category-mastery-item${isWeak ? ' category-mastery-item--weak' : ''}`}>
              <div className="category-mastery-header">
                <span className="category-mastery-name">{CATEGORY_LABELS[cat]}</span>
                <Tag type={blended >= 75 ? 'green' : blended >= 25 ? 'blue' : isWeak ? 'red' : 'gray'} size="sm">
                  {blended}%
                </Tag>
              </div>
              <div className="category-mastery-bar-track">
                <div
                  className="category-mastery-bar-fill"
                  style={{ width: `${blended}%` }}
                />
              </div>
              <span className="category-mastery-detail">
                {srMastered}/{srTotal} mastered
                {hasModelData && ` · ${catData.termsCovered} terms seen`}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
