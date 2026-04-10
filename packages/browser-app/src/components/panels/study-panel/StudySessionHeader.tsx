import { Button, Tag } from '@carbon/react'
import { Close } from '@carbon/icons-react'
import { TERM_CATEGORIES, CATEGORY_LABELS, type CardState } from '@ojfbot/seh-study-shared'

interface StudySessionHeaderProps {
  currentIndex: number
  deckLength: number
  currentCard: CardState | null | undefined
  currentTermIndex: number
  onEnd: () => void
}

export function StudySessionHeader({
  currentIndex, deckLength, currentCard, currentTermIndex, onEnd,
}: StudySessionHeaderProps) {
  return (
    <div className="study-session-header">
      <span className="study-progress">
        Card {currentIndex + 1} / {deckLength}
      </span>
      {currentCard && (
        <Tag type={currentCard.box <= 2 ? 'red' : currentCard.box <= 3 ? 'blue' : 'green'} size="sm">
          Box {currentCard.box}
        </Tag>
      )}
      <Tag type="gray" size="sm">
        {CATEGORY_LABELS[TERM_CATEGORIES[currentTermIndex]]}
      </Tag>
      <Button kind="ghost" size="sm" onClick={onEnd} renderIcon={Close}>
        End
      </Button>
    </div>
  )
}
