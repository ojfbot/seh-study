import { useMemo } from 'react'
import { Tile, Tag } from '@carbon/react'
import {
  getBoxDistribution, getMasteryPercent,
  CATEGORIES, CATEGORY_LABELS, TERM_CATEGORIES, GLOSSARY,
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

  const boxDist = useMemo(() => getBoxDistribution(cards), [cards])
  const mastery = useMemo(() => getMasteryPercent(cards), [cards])

  const categoryMastery = useMemo(() => {
    const result: Record<Category, { total: number; mastered: number }> = {} as any
    for (const cat of CATEGORIES) result[cat] = { total: 0, mastered: 0 }
    for (let i = 0; i < GLOSSARY.length; i++) {
      const cat = TERM_CATEGORIES[i]
      result[cat].total++
      if (cards[i]?.box >= 4) result[cat].mastered++
    }
    return result
  }, [cards])

  const totalReviewed = sessions.reduce((sum, s) => sum + s.cardsReviewed, 0)
  const totalCorrect = sessions.reduce((sum, s) => sum + s.correct, 0)
  const accuracy = totalReviewed > 0 ? Math.round((totalCorrect / totalReviewed) * 100) : 0

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
          const { total, mastered } = categoryMastery[cat]
          const pct = total > 0 ? Math.round((mastered / total) * 100) : 0
          return (
            <div key={cat} className="category-mastery-item">
              <div className="category-mastery-header">
                <span className="category-mastery-name">{CATEGORY_LABELS[cat]}</span>
                <Tag type={pct >= 75 ? 'green' : pct >= 25 ? 'blue' : 'gray'} size="sm">
                  {pct}%
                </Tag>
              </div>
              <div className="category-mastery-bar-track">
                <div
                  className="category-mastery-bar-fill"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="category-mastery-detail">{mastered}/{total} mastered</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
