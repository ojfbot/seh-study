import { useMemo, useState } from 'react'
import { Button, Toggle, Tag, InlineNotification } from '@carbon/react'
import { ArrowRight, Checkmark, Close, Renew } from '@carbon/icons-react'
import {
  GLOSSARY, TERM_CATEGORIES, CATEGORIES, CATEGORY_LABELS,
  getStudyDeck, getDueCards, pickDistractors,
  type Category, type StudyMode,
} from '@ojfbot/seh-study-shared'
import { useAppSelector, useAppDispatch } from '../../store/store.js'
import {
  setMode, setSelectedCategories, startSession,
  flipCard, answerCard, endSession,
} from '../../store/studySlice.js'
import './StudyPanel.css'

const DECK_SIZE = 20

export default function StudyPanel() {
  const dispatch = useAppDispatch()
  const { cards, mode, currentDeck, currentIndex, showAnswer, selectedCategories, activeSession } = useAppSelector(s => s.study)

  const dueCount = useMemo(() => getDueCards(cards).length, [cards])

  const currentTermIndex = currentDeck[currentIndex]
  const currentTerm = currentTermIndex != null ? GLOSSARY[currentTermIndex] : null
  const currentCard = currentTermIndex != null ? cards.find(c => c.termIndex === currentTermIndex) : null

  // Quiz state
  const [quizOptions, setQuizOptions] = useState<number[]>([])
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null)

  function handleStart() {
    const filteredCards = selectedCategories.length > 0
      ? cards.filter(c => selectedCategories.includes(TERM_CATEGORIES[c.termIndex]))
      : cards
    const deck = getStudyDeck(filteredCards, DECK_SIZE)
    dispatch(startSession({ deck: deck.map(c => c.termIndex) }))
    if (mode === 'quiz' && deck.length > 0) {
      setupQuizQuestion(deck[0].termIndex)
    }
  }

  function setupQuizQuestion(termIndex: number) {
    const distractorIndices = pickDistractors(termIndex, GLOSSARY.length, 3)
    const options = [...distractorIndices, termIndex].sort(() => Math.random() - 0.5)
    setQuizOptions(options)
    setQuizAnswer(null)
  }

  function handleFlashcardAnswer(correct: boolean) {
    dispatch(answerCard({ correct }))
    if (currentIndex >= currentDeck.length - 1) {
      dispatch(endSession())
    }
  }

  function handleQuizSelect(selectedTermIndex: number) {
    if (quizAnswer !== null) return // already answered
    setQuizAnswer(selectedTermIndex)
    const correct = selectedTermIndex === currentTermIndex
    dispatch(answerCard({ correct }))

    // Auto-advance after delay
    setTimeout(() => {
      if (currentIndex >= currentDeck.length - 1) {
        dispatch(endSession())
      } else {
        setupQuizQuestion(currentDeck[currentIndex + 1])
      }
    }, 1200)
  }

  // Session complete screen
  if (!activeSession && currentDeck.length === 0 && cards.some(c => c.lastReviewedAt)) {
    // Show start screen (below)
  }

  // Active session
  if (activeSession && currentTerm) {
    return (
      <div className="seh-study-panel seh-study-panel--study">
        <div className="study-session-header">
          <span className="study-progress">
            Card {currentIndex + 1} / {currentDeck.length}
          </span>
          {currentCard && (
            <Tag type={currentCard.box <= 2 ? 'red' : currentCard.box <= 3 ? 'blue' : 'green'} size="sm">
              Box {currentCard.box}
            </Tag>
          )}
          <Tag type="gray" size="sm">
            {CATEGORY_LABELS[TERM_CATEGORIES[currentTermIndex]]}
          </Tag>
          <Button kind="ghost" size="sm" onClick={() => dispatch(endSession())} renderIcon={Close}>
            End
          </Button>
        </div>

        {mode === 'flashcard' ? (
          <div className="flashcard" onClick={() => dispatch(flipCard())}>
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
                <Button kind="danger--tertiary" size="md" renderIcon={Close} onClick={(e: React.MouseEvent) => { e.stopPropagation(); handleFlashcardAnswer(false) }}>
                  Didn't know
                </Button>
                <Button kind="primary" size="md" renderIcon={Checkmark} onClick={(e: React.MouseEvent) => { e.stopPropagation(); handleFlashcardAnswer(true) }}>
                  Got it
                </Button>
              </div>
            )}
          </div>
        ) : (
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
                    onClick={() => handleQuizSelect(optIdx)}
                    disabled={quizAnswer !== null}
                  >
                    {GLOSSARY[optIdx].definition}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }

  // Start screen
  return (
    <div className="seh-study-panel seh-study-panel--study">
      <div className="study-setup">
        <h3>Study Session</h3>

        <div className="study-mode-toggle">
          <span className={mode === 'flashcard' ? 'active' : ''}>Flashcards</span>
          <Toggle
            id="study-mode-toggle"
            size="sm"
            hideLabel
            toggled={mode === 'quiz'}
            onToggle={(checked: boolean) => dispatch(setMode(checked ? 'quiz' : 'flashcard'))}
          />
          <span className={mode === 'quiz' ? 'active' : ''}>Quiz</span>
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
                  dispatch(setSelectedCategories(next))
                }}
                style={{ cursor: 'pointer' }}
              >
                {CATEGORY_LABELS[cat]}
              </Tag>
            ))}
          </div>
        </div>

        <Button renderIcon={ArrowRight} onClick={handleStart}>
          Start ({DECK_SIZE} cards)
        </Button>
      </div>
    </div>
  )
}
