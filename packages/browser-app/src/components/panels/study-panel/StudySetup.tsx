import { Button, Tag, InlineNotification } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import { CATEGORIES, CATEGORY_LABELS, type Category, type StudyMode } from '@ojfbot/seh-study-shared'

const MODE_LABELS: Record<StudyMode, string> = {
  flashcard: 'Flashcards',
  quiz: 'Quiz',
  match: 'Drag & Match',
}
const MODE_ORDER: StudyMode[] = ['flashcard', 'quiz', 'match']

interface StudySetupProps {
  mode: StudyMode
  selectedCategories: Category[]
  dueCount: number
  deckSize: number
  onSetMode: (mode: StudyMode) => void
  onSetCategories: (cats: Category[]) => void
  onStart: () => void
}

export function StudySetup({
  mode, selectedCategories, dueCount, deckSize,
  onSetMode, onSetCategories, onStart,
}: StudySetupProps) {
  return (
    <div className="study-setup">
      <h3>Study Session</h3>

      <div className="study-mode-selector">
        {MODE_ORDER.map(m => (
          <button
            key={m}
            className={`mode-chip${mode === m ? ' active' : ''}`}
            onClick={() => onSetMode(m)}
          >
            {MODE_LABELS[m]}
          </button>
        ))}
      </div>

      {dueCount > 0 && (
        <InlineNotification kind="info" hideCloseButton lowContrast title={`${dueCount} cards due for review`} />
      )}

      <div className="category-filter">
        <p className="category-filter-label">Filter by category (optional):</p>
        <div className="category-tags">
          {CATEGORIES.map(cat => (
            <Tag
              key={cat}
              type={selectedCategories.includes(cat) ? 'blue' : 'gray'}
              size="sm"
              onClick={() => {
                const next = selectedCategories.includes(cat)
                  ? selectedCategories.filter(c => c !== cat)
                  : [...selectedCategories, cat]
                onSetCategories(next)
              }}
              style={{ cursor: 'pointer' }}
            >
              {CATEGORY_LABELS[cat]}
            </Tag>
          ))}
        </div>
      </div>

      <Button renderIcon={ArrowRight} onClick={onStart}>
        Start ({deckSize} cards)
      </Button>
    </div>
  )
}
