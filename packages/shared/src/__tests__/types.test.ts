import { describe, it, expect } from 'vitest'
import { TAB_SLUGS, PANEL_TABS, CATEGORIES, CATEGORY_LABELS, BOX_INTERVALS_DAYS } from '../types.js'

describe('shared types', () => {
  it('has 4 tab slugs', () => {
    expect(TAB_SLUGS).toHaveLength(4)
  })

  it('has 2 panel tabs', () => {
    expect(PANEL_TABS).toHaveLength(2)
  })

  it('has 10 categories', () => {
    expect(CATEGORIES).toHaveLength(10)
  })

  it('has labels for all categories', () => {
    for (const cat of CATEGORIES) {
      expect(CATEGORY_LABELS[cat]).toBeTruthy()
    }
  })

  it('has intervals for all 5 Leitner boxes', () => {
    expect(Object.keys(BOX_INTERVALS_DAYS)).toHaveLength(5)
  })
})
