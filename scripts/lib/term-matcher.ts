import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

interface GlossaryTerm {
  term: string
  definition: string
}

type Category =
  | 'lifecycle' | 'requirements' | 'design' | 'reviews' | 'risk'
  | 'verification' | 'project-mgmt' | 'configuration' | 'human-factors' | 'technology'

// Chapter-to-category mapping for relevance scoring
const CHAPTER_CATEGORIES: Record<string, Category[]> = {
  '1': ['lifecycle'],
  '2': ['lifecycle', 'design'],
  '3': ['lifecycle', 'reviews'],
  '4': ['requirements', 'design'],
  '5': ['verification', 'design'],
  '6': ['project-mgmt', 'risk', 'configuration'],
  'Appendix': ['project-mgmt', 'lifecycle'],
}

let glossaryCache: GlossaryTerm[] | null = null
let categoriesCache: Category[] | null = null

function loadGlossary(): GlossaryTerm[] {
  if (glossaryCache) return glossaryCache
  const path = resolve(__dirname, '../../packages/shared/src/glossary.json')
  glossaryCache = JSON.parse(readFileSync(path, 'utf-8')) as GlossaryTerm[]
  return glossaryCache
}

function loadCategories(): Category[] {
  if (categoriesCache) return categoriesCache
  // Read the categories.ts file and extract the array
  const path = resolve(__dirname, '../../packages/shared/src/categories.ts')
  const content = readFileSync(path, 'utf-8')
  const matches = content.match(/'([a-z-]+)'/g)
  categoriesCache = (matches || []).map(m => m.replace(/'/g, '') as Category)
  return categoriesCache
}

/** Extract significant words from text for matching. */
function significantWords(text: string): Set<string> {
  const STOP = new Set(['the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'shall', 'can', 'of', 'in', 'to', 'for', 'with', 'on', 'at', 'from', 'by', 'and', 'or', 'not', 'that', 'this', 'it', 'as', 'its'])
  return new Set(
    text.toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2 && !STOP.has(w))
  )
}

interface ScoredTerm {
  term: string
  definition: string
  category: Category
  score: number
}

/** Find the most relevant glossary terms for a section. */
export function matchTerms(
  sectionText: string,
  parentChapter: string,
  count = 12,
): ScoredTerm[] {
  const glossary = loadGlossary()
  const categories = loadCategories()
  const textLower = sectionText.toLowerCase()
  const textWords = significantWords(sectionText)
  const chapterKey = parentChapter.replace(/\.0$/, '')
  const chapterCats = CHAPTER_CATEGORIES[chapterKey] || []

  const scored: ScoredTerm[] = glossary.map((g, i) => {
    let score = 0
    const category = categories[i] || 'lifecycle'

    // Exact term name in text
    if (textLower.includes(g.term.toLowerCase())) {
      score += 10
    }

    // Partial match: 2+ consecutive words from term name
    const termWords = g.term.toLowerCase().split(/\s+/)
    if (termWords.length >= 3) {
      for (let j = 0; j <= termWords.length - 2; j++) {
        const bigram = termWords.slice(j, j + 2).join(' ')
        if (textLower.includes(bigram)) {
          score += 5
          break
        }
      }
    }

    // Definition keyword overlap
    const defWords = significantWords(g.definition)
    let overlap = 0
    for (const w of defWords) {
      if (textWords.has(w)) overlap++
    }
    if (defWords.size > 0) {
      score += Math.min(3, Math.round((overlap / defWords.size) * 5))
    }

    // Category match
    if (chapterCats.includes(category)) {
      score += 1
    }

    return { term: g.term, definition: g.definition, category, score }
  })

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
}

/** Get all glossary term names (for the prompt). */
export function getAllTermNames(): string[] {
  return loadGlossary().map(g => g.term)
}
