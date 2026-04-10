import { useMemo, useState, useCallback, type DragEvent } from 'react'
import {
  GLOSSARY, TERM_CATEGORIES, getStudyDeck, getDueCards, pickDistractors,
} from '@ojfbot/seh-study-shared'
import { useAppSelector, useAppDispatch } from '../../../store/store.js'
import {
  setMode, setSelectedCategories, startSession,
  flipCard, answerCard, endSession,
} from '../../../store/studySlice.js'

const DECK_SIZE = 20

export function useStudyPanel() {
  const dispatch = useAppDispatch()
  const {
    cards, mode, currentDeck, currentIndex, showAnswer,
    selectedCategories, activeSession,
  } = useAppSelector(s => s.study)

  const dueCount = useMemo(() => getDueCards(cards).length, [cards])

  const currentTermIndex = currentDeck[currentIndex]
  const currentTerm = currentTermIndex != null ? GLOSSARY[currentTermIndex] : null
  const currentCard = currentTermIndex != null ? cards.find(c => c.termIndex === currentTermIndex) : null

  // Quiz / match state
  const [quizOptions, setQuizOptions] = useState<number[]>([])
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null)

  // Drag-and-drop state
  const [draggedOption, setDraggedOption] = useState<number | null>(null)
  const [dropHover, setDropHover] = useState(false)
  const [matchResult, setMatchResult] = useState<'correct' | 'incorrect' | null>(null)

  function setupQuizQuestion(termIndex: number) {
    const distractorIndices = pickDistractors(termIndex, GLOSSARY.length, 3)
    const options = [...distractorIndices, termIndex].sort(() => Math.random() - 0.5)
    setQuizOptions(options)
    setQuizAnswer(null)
    setMatchResult(null)
    setDraggedOption(null)
    setDropHover(false)
  }

  function handleStart() {
    const filteredCards = selectedCategories.length > 0
      ? cards.filter(c => selectedCategories.includes(TERM_CATEGORIES[c.termIndex]))
      : cards
    const deck = getStudyDeck(filteredCards, DECK_SIZE)
    dispatch(startSession({ deck: deck.map(c => c.termIndex) }))
    if ((mode === 'quiz' || mode === 'match') && deck.length > 0) {
      setupQuizQuestion(deck[0].termIndex)
    }
  }

  function handleFlashcardAnswer(correct: boolean) {
    dispatch(answerCard({ correct }))
    if (currentIndex >= currentDeck.length - 1) {
      dispatch(endSession())
    }
  }

  function handleQuizSelect(selectedTermIndex: number) {
    if (quizAnswer !== null) return
    setQuizAnswer(selectedTermIndex)
    const correct = selectedTermIndex === currentTermIndex
    dispatch(answerCard({ correct }))
    setTimeout(() => {
      if (currentIndex >= currentDeck.length - 1) {
        dispatch(endSession())
      } else {
        setupQuizQuestion(currentDeck[currentIndex + 1])
      }
    }, 1200)
  }

  function handleMatchSelect(optIdx: number) {
    if (matchResult !== null) return
    const correct = optIdx === currentTermIndex
    setQuizAnswer(optIdx)
    setMatchResult(correct ? 'correct' : 'incorrect')
    dispatch(answerCard({ correct }))
    setTimeout(() => {
      if (currentIndex >= currentDeck.length - 1) {
        dispatch(endSession())
      } else {
        setupQuizQuestion(currentDeck[currentIndex + 1])
      }
    }, 1400)
  }

  // Drag handlers
  const onDragStart = useCallback((e: DragEvent<HTMLDivElement>, optIdx: number) => {
    e.dataTransfer.setData('text/plain', String(optIdx))
    e.dataTransfer.effectAllowed = 'move'
    setDraggedOption(optIdx)
  }, [])

  const onDragEnd = useCallback(() => {
    setDraggedOption(null)
    setDropHover(false)
  }, [])

  const onDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setDropHover(true)
  }, [])

  const onDragLeave = useCallback(() => {
    setDropHover(false)
  }, [])

  const onDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDropHover(false)
    const droppedIdx = parseInt(e.dataTransfer.getData('text/plain'), 10)
    if (isNaN(droppedIdx) || matchResult !== null) return

    const correct = droppedIdx === currentTermIndex
    setQuizAnswer(droppedIdx)
    setMatchResult(correct ? 'correct' : 'incorrect')
    dispatch(answerCard({ correct }))

    setTimeout(() => {
      if (currentIndex >= currentDeck.length - 1) {
        dispatch(endSession())
      } else {
        setupQuizQuestion(currentDeck[currentIndex + 1])
      }
    }, 1400)
  }, [currentTermIndex, currentIndex, currentDeck, matchResult, dispatch])

  return {
    // State
    mode, currentDeck, currentIndex, showAnswer, selectedCategories,
    activeSession, dueCount, currentTermIndex, currentTerm, currentCard,
    quizOptions, quizAnswer, draggedOption, dropHover, matchResult,
    // Actions
    handleStart,
    handleFlashcardAnswer,
    handleQuizSelect,
    handleMatchSelect,
    handleFlip: () => dispatch(flipCard()),
    handleEnd: () => dispatch(endSession()),
    handleSetMode: (m: Parameters<typeof setMode>[0]) => dispatch(setMode(m)),
    handleSetCategories: (cats: Parameters<typeof setSelectedCategories>[0]) => dispatch(setSelectedCategories(cats)),
    // Drag handlers
    onDragStart, onDragEnd, onDragOver, onDragLeave, onDrop,
    DECK_SIZE,
  }
}
