import { GLOSSARY, type GlossaryTerm } from '@ojfbot/seh-study-shared'

interface QuizModeProps {
  currentTerm: GlossaryTerm
  currentTermIndex: number
  quizOptions: number[]
  quizAnswer: number | null
  onSelect: (selectedTermIndex: number) => void
}

export function QuizMode({ currentTerm, currentTermIndex, quizOptions, quizAnswer, onSelect }: QuizModeProps) {
  return (
    <div className="quiz-card">
      <h3 className="quiz-prompt">What is the definition of:</h3>
      <h2 className="quiz-term">{currentTerm.term}</h2>
      <div className="quiz-options">
        {quizOptions.map(optIdx => {
          const isCorrect = optIdx === currentTermIndex
          const isSelected = quizAnswer === optIdx
          let className = 'quiz-option'
          if (quizAnswer !== null) {
            if (isCorrect) className += ' correct'
            else if (isSelected) className += ' incorrect'
          }
          return (
            <button
              key={optIdx}
              className={className}
              onClick={() => onSelect(optIdx)}
              disabled={quizAnswer !== null}
            >
              {GLOSSARY[optIdx].definition}
            </button>
          )
        })}
      </div>
    </div>
  )
}
