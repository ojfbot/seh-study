import { Button } from '@carbon/react'
import { Checkmark, Close } from '@carbon/icons-react'
import type { GlossaryTerm } from '@ojfbot/seh-study-shared'

interface FlashcardModeProps {
  currentTerm: GlossaryTerm
  showAnswer: boolean
  onFlip: () => void
  onAnswer: (correct: boolean) => void
}

export function FlashcardMode({ currentTerm, showAnswer, onFlip, onAnswer }: FlashcardModeProps) {
  return (
    <div className="flashcard" onClick={onFlip}>
      <div className={`flashcard-inner${showAnswer ? ' flipped' : ''}`}>
        <div className="flashcard-front">
          <h3>{currentTerm.term}</h3>
          <p className="flashcard-hint">Tap to reveal definition</p>
        </div>
        <div className="flashcard-back">
          <h3>{currentTerm.term}</h3>
          <p>{currentTerm.definition}</p>
        </div>
      </div>
      {showAnswer && (
        <div className="flashcard-actions">
          <Button kind="danger--tertiary" size="md" renderIcon={Close} onClick={(e: React.MouseEvent) => { e.stopPropagation(); onAnswer(false) }}>
            Didn't know
          </Button>
          <Button kind="primary" size="md" renderIcon={Checkmark} onClick={(e: React.MouseEvent) => { e.stopPropagation(); onAnswer(true) }}>
            Got it
          </Button>
        </div>
      )}
    </div>
  )
}
