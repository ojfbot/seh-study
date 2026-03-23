import { describe, it, expect } from 'vitest'
import {
  initCard, initAllCards, promote, demote,
  getDueCards, getStudyDeck, getBoxDistribution,
  getMasteryPercent, pickDistractors,
} from '../sr-engine.js'

const NOW = new Date('2026-03-22T12:00:00Z')

describe('sr-engine', () => {
  it('initCard starts in box 1 with immediate review', () => {
    const card = initCard(0, NOW)
    expect(card.box).toBe(1)
    expect(card.lastReviewedAt).toBeNull()
    expect(card.nextReviewAt).toBe(NOW.toISOString())
  })

  it('initAllCards creates N cards', () => {
    const cards = initAllCards(238, NOW)
    expect(cards).toHaveLength(238)
    expect(cards[0].termIndex).toBe(0)
    expect(cards[237].termIndex).toBe(237)
  })

  it('promote moves card up one box', () => {
    const card = initCard(5, NOW)
    const promoted = promote(card, NOW)
    expect(promoted.box).toBe(2)
    expect(promoted.lastReviewedAt).toBe(NOW.toISOString())
  })

  it('promote caps at box 5', () => {
    let card = initCard(0, NOW)
    card = { ...card, box: 5 }
    const promoted = promote(card, NOW)
    expect(promoted.box).toBe(5)
  })

  it('demote sends card back to box 1', () => {
    let card = initCard(0, NOW)
    card = { ...card, box: 4 }
    const demoted = demote(card, NOW)
    expect(demoted.box).toBe(1)
    expect(demoted.nextReviewAt).toBe(NOW.toISOString())
  })

  it('getDueCards returns cards with nextReviewAt <= now', () => {
    const past = new Date('2026-03-21T00:00:00Z')
    const future = new Date('2026-03-25T00:00:00Z')
    const cards = [
      { ...initCard(0, past), nextReviewAt: past.toISOString() },
      { ...initCard(1, future), nextReviewAt: future.toISOString() },
    ]
    const due = getDueCards(cards, NOW)
    expect(due).toHaveLength(1)
    expect(due[0].termIndex).toBe(0)
  })

  it('getStudyDeck returns requested count', () => {
    const cards = initAllCards(238, NOW)
    const deck = getStudyDeck(cards, 20, NOW)
    expect(deck).toHaveLength(20)
  })

  it('getBoxDistribution sums correctly', () => {
    const cards = initAllCards(10, NOW)
    const dist = getBoxDistribution(cards)
    expect(dist[1]).toBe(10)
    expect(dist[2] + dist[3] + dist[4] + dist[5]).toBe(0)
  })

  it('getMasteryPercent is 0 for all-box-1 cards', () => {
    const cards = initAllCards(10, NOW)
    expect(getMasteryPercent(cards)).toBe(0)
  })

  it('pickDistractors returns unique indices excluding correct', () => {
    const distractors = pickDistractors(5, 238, 3)
    expect(distractors).toHaveLength(3)
    expect(distractors).not.toContain(5)
    expect(new Set(distractors).size).toBe(3)
  })
})
