/**
 * Leitner 5-box spaced repetition engine — pure functions, no side effects.
 *
 * Box 1 = immediate review (new/failed cards)
 * Box 2 = 1 day
 * Box 3 = 3 days
 * Box 4 = 7 days
 * Box 5 = 14 days (mastered)
 */
import type { CardState, LeitnerBox } from './types.js'
import { BOX_INTERVALS_DAYS } from './types.js'

/** Create initial card state for a term (starts in box 1). */
export function initCard(termIndex: number, now = new Date()): CardState {
  return {
    termIndex,
    box: 1,
    lastReviewedAt: null,
    nextReviewAt: now.toISOString(),
  }
}

/** Create initial card states for all terms. */
export function initAllCards(count: number, now = new Date()): CardState[] {
  return Array.from({ length: count }, (_, i) => initCard(i, now))
}

/** Advance to next ISO date string by adding days. */
function addDays(date: Date, days: number): string {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d.toISOString()
}

/** Promote a card (correct answer): move up one box (max 5). */
export function promote(card: CardState, now = new Date()): CardState {
  const nextBox = Math.min(card.box + 1, 5) as LeitnerBox
  return {
    ...card,
    box: nextBox,
    lastReviewedAt: now.toISOString(),
    nextReviewAt: addDays(now, BOX_INTERVALS_DAYS[nextBox]),
  }
}

/** Demote a card (wrong answer): send back to box 1. */
export function demote(card: CardState, now = new Date()): CardState {
  return {
    ...card,
    box: 1,
    lastReviewedAt: now.toISOString(),
    nextReviewAt: now.toISOString(), // immediately available
  }
}

/** Get cards that are due for review. */
export function getDueCards(cards: CardState[], now = new Date()): CardState[] {
  const nowStr = now.toISOString()
  return cards.filter(c => c.nextReviewAt <= nowStr)
}

/** Sort due cards by priority: lower box first, then oldest review. */
export function sortByPriority(cards: CardState[]): CardState[] {
  return [...cards].sort((a, b) => {
    if (a.box !== b.box) return a.box - b.box
    return (a.nextReviewAt ?? '').localeCompare(b.nextReviewAt ?? '')
  })
}

/** Get a study deck of N cards, prioritized by due status. */
export function getStudyDeck(
  cards: CardState[],
  count: number,
  now = new Date(),
): CardState[] {
  const due = sortByPriority(getDueCards(cards, now))
  if (due.length >= count) return due.slice(0, count)

  // Fill remaining slots from non-due cards (lowest box first)
  const dueIndices = new Set(due.map(c => c.termIndex))
  const rest = sortByPriority(cards.filter(c => !dueIndices.has(c.termIndex)))
  return [...due, ...rest.slice(0, count - due.length)]
}

/** Box distribution stats. */
export function getBoxDistribution(cards: CardState[]): Record<LeitnerBox, number> {
  const dist: Record<LeitnerBox, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  for (const c of cards) dist[c.box]++
  return dist
}

/** Mastery percentage: cards in box 4-5 / total. */
export function getMasteryPercent(cards: CardState[]): number {
  if (cards.length === 0) return 0
  const mastered = cards.filter(c => c.box >= 4).length
  return Math.round((mastered / cards.length) * 100)
}

/** Generate N random distractor indices (excluding the correct one). */
export function pickDistractors(
  correctIndex: number,
  totalTerms: number,
  count = 3,
): number[] {
  const indices = new Set<number>()
  while (indices.size < count) {
    const r = Math.floor(Math.random() * totalTerms)
    if (r !== correctIndex) indices.add(r)
  }
  return [...indices]
}
