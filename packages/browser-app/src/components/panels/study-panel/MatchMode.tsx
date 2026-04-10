import type { DragEvent } from 'react'
import { Checkmark, Close, Draggable } from '@carbon/icons-react'
import { GLOSSARY, type GlossaryTerm } from '@ojfbot/seh-study-shared'

interface MatchModeProps {
  currentTerm: GlossaryTerm
  currentTermIndex: number
  quizOptions: number[]
  quizAnswer: number | null
  draggedOption: number | null
  dropHover: boolean
  matchResult: 'correct' | 'incorrect' | null
  onDragStart: (e: DragEvent<HTMLDivElement>, optIdx: number) => void
  onDragEnd: () => void
  onDragOver: (e: DragEvent<HTMLDivElement>) => void
  onDragLeave: () => void
  onDrop: (e: DragEvent<HTMLDivElement>) => void
  onSelect: (optIdx: number) => void
}

export function MatchMode({
  currentTerm, currentTermIndex, quizOptions, quizAnswer,
  draggedOption, dropHover, matchResult,
  onDragStart, onDragEnd, onDragOver, onDragLeave, onDrop, onSelect,
}: MatchModeProps) {
  return (
    <div className="match-card">
      <div
        className={`match-drop-zone${dropHover ? ' drag-over' : ''}${matchResult ? ` match-${matchResult}` : ''}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <h2 className="match-term">{currentTerm.term}</h2>
        {matchResult === null && (
          <p className="match-hint">Drag the correct definition here</p>
        )}
        {matchResult === 'correct' && (
          <p className="match-feedback match-feedback--correct">
            <Checkmark size={20} /> Correct!
          </p>
        )}
        {matchResult === 'incorrect' && (
          <div className="match-feedback match-feedback--incorrect">
            <p><Close size={20} /> Incorrect</p>
            <p className="match-correct-answer">{currentTerm.definition}</p>
          </div>
        )}
      </div>

      <div className="match-options">
        {quizOptions.map(optIdx => {
          const isDragging = draggedOption === optIdx
          const isAnswered = matchResult !== null
          const isCorrect = optIdx === currentTermIndex
          const wasDropped = quizAnswer === optIdx

          let className = 'match-option'
          if (isDragging) className += ' dragging'
          if (isAnswered && isCorrect) className += ' correct'
          if (isAnswered && wasDropped && !isCorrect) className += ' incorrect'

          return (
            <div
              key={optIdx}
              className={className}
              draggable={!isAnswered}
              onDragStart={(e) => onDragStart(e, optIdx)}
              onDragEnd={onDragEnd}
              onClick={() => !isAnswered && onSelect(optIdx)}
            >
              <Draggable size={16} className="match-drag-handle" />
              <span className="match-option-text">
                {GLOSSARY[optIdx].definition}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
