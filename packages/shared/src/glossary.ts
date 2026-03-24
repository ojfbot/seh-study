import type { GlossaryTerm, Category } from './types.js'
import { TERM_CATEGORIES } from './categories.js'
import rawGlossary from './glossary.json'

export const GLOSSARY: GlossaryTerm[] = rawGlossary as GlossaryTerm[]

export interface CategorizedTerm extends GlossaryTerm {
  index: number
  category: Category
}

/** Returns all glossary terms enriched with index and category. */
export function getCategorizedTerms(): CategorizedTerm[] {
  return GLOSSARY.map((t, i) => ({
    ...t,
    index: i,
    category: TERM_CATEGORIES[i],
  }))
}

/** Returns terms filtered by category. */
export function getTermsByCategory(category: Category): CategorizedTerm[] {
  return getCategorizedTerms().filter(t => t.category === category)
}

/** Look up a glossary term index by exact name. Throws if not found. */
export function termIndexByName(name: string): number {
  const idx = GLOSSARY.findIndex(t => t.term === name)
  if (idx === -1) throw new Error(`Unknown glossary term: "${name}"`)
  return idx
}
