import { useStudyPanel } from './study-panel/useStudyPanel'
import { StudySessionHeader } from './study-panel/StudySessionHeader'
import { FlashcardMode } from './study-panel/FlashcardMode'
import { QuizMode } from './study-panel/QuizMode'
import { MatchMode } from './study-panel/MatchMode'
import { StudySetup } from './study-panel/StudySetup'
import './StudyPanel.css'

export default function StudyPanel() {
  const s = useStudyPanel()

  if (s.activeSession && s.currentTerm) {
    return (
      <div className="seh-study-panel seh-study-panel--study">
        <StudySessionHeader
          currentIndex={s.currentIndex}
          deckLength={s.currentDeck.length}
          currentCard={s.currentCard}
          currentTermIndex={s.currentTermIndex!}
          onEnd={s.handleEnd}
        />

        {s.mode === 'flashcard' && (
          <FlashcardMode
            currentTerm={s.currentTerm}
            showAnswer={s.showAnswer}
            onFlip={s.handleFlip}
            onAnswer={s.handleFlashcardAnswer}
          />
        )}

        {s.mode === 'quiz' && (
          <QuizMode
            currentTerm={s.currentTerm}
            currentTermIndex={s.currentTermIndex!}
            quizOptions={s.quizOptions}
            quizAnswer={s.quizAnswer}
            onSelect={s.handleQuizSelect}
          />
        )}

        {s.mode === 'match' && (
          <MatchMode
            currentTerm={s.currentTerm}
            currentTermIndex={s.currentTermIndex!}
            quizOptions={s.quizOptions}
            quizAnswer={s.quizAnswer}
            draggedOption={s.draggedOption}
            dropHover={s.dropHover}
            matchResult={s.matchResult}
            onDragStart={s.onDragStart}
            onDragEnd={s.onDragEnd}
            onDragOver={s.onDragOver}
            onDragLeave={s.onDragLeave}
            onDrop={s.onDrop}
            onSelect={s.handleMatchSelect}
          />
        )}
      </div>
    )
  }

  return (
    <div className="seh-study-panel seh-study-panel--study">
      <StudySetup
        mode={s.mode}
        selectedCategories={s.selectedCategories}
        dueCount={s.dueCount}
        deckSize={s.DECK_SIZE}
        onSetMode={s.handleSetMode}
        onSetCategories={s.handleSetCategories}
        onStart={s.handleStart}
      />
    </div>
  )
}
