import type { SectionChunk } from './types.js'

// Matches headings like "2.1 Title" or "4.1.1 Title" at the start of a line
// The title part must start with an uppercase letter (to distinguish from TOC stubs like "2.1\n")
// Section number first part must be 1-9 (handbook chapters), no leading zeros in sub-parts
const HEADING_RE = /^([1-9]\.(?:0|[1-9]\d*)(?:\.(?:0|[1-9]\d*)(?:\.(?:0|[1-9]\d*))?)?)\s+([A-Z].+)/
// Matches chapter headings like "2.0 Fundamentals of Systems Engineering"
const CHAPTER_RE = /^([1-9])\.0\s+([A-Z].+)/
// Matches appendix headings
const APPENDIX_RE = /^Appendix\s+([A-Z])[\s:]+(.+)/

// Common page-header/footer noise to skip
const NOISE_RE = /^(NASA SYSTEMS ENGINEERING HANDBOOK|Table of Contents|Table of Figures|Table of Tables|Table of Boxes)/
// Detect page numbers on their own line
const PAGE_NUM_RE = /^\d{1,3}$/
// Detect TOC lines with dot leaders
const TOC_DOTS_RE = /\.{2,}\s*\d+\s*$/

interface RawHeading {
  lineIndex: number
  sectionNumber: string
  title: string
  parentChapter: string
}

/**
 * Find where the body content begins (after TOC, figures list, etc.).
 * Strategy: find "1.0 Introduction" that is NOT followed by TOC dots/page numbers.
 */
function findBodyStart(lines: string[]): number {
  // Look for the first "1.0 Introduction" that doesn't have a page number after it
  // This distinguishes "1.0 Introduction" (body) from "1.0 Introduction 1" (TOC)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (/^1\.0\s+Introduction\s*$/.test(line)) {
      // Check next few lines for body-like content (sentences)
      const nextLines = lines.slice(i + 1, i + 10).join(' ')
      if (nextLines.length > 100 && /[a-z]{3,}/.test(nextLines)) {
        return i
      }
    }
  }
  // Fallback: skip first 500 lines (TOC + front matter)
  return 500
}

/** Parse PDF text into structured section chunks. */
export function parseSections(fullText: string): SectionChunk[] {
  const lines = fullText.split('\n')
  const bodyStart = findBodyStart(lines)
  const headings: RawHeading[] = []

  for (let i = bodyStart; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line || NOISE_RE.test(line) || PAGE_NUM_RE.test(line)) continue
    // Skip TOC-like lines
    if (TOC_DOTS_RE.test(line)) continue

    // Try numbered heading (section or chapter)
    const numMatch = line.match(HEADING_RE)
    if (numMatch) {
      const sectionNumber = numMatch[1]
      let title = numMatch[2]
        .replace(/\s*\.{2,}\s*\d+\s*$/, '') // strip TOC dots
        .replace(/\s+\d{1,3}\s*$/, '')       // strip trailing page number
        .trim()

      // Multi-line title: if line is short and next line looks like continuation
      if (title.length < 40) {
        for (let j = i + 1; j <= i + 3 && j < lines.length; j++) {
          const next = lines[j].trim()
          // Continuation: starts lowercase or is a short phrase, not a heading
          if (next && !HEADING_RE.test(next) && !APPENDIX_RE.test(next) &&
              !NOISE_RE.test(next) && !PAGE_NUM_RE.test(next) && !TOC_DOTS_RE.test(next)) {
            // Only continue if it looks like a title continuation (not body text)
            if (next.length < 60 && !next.includes('. ') && !/^(The|This|A |An |In |It |As |For |By )/.test(next)) {
              title += ' ' + next.replace(/\s*\.{2,}\s*\d+\s*$/, '').replace(/\s+\d{1,3}\s*$/, '').trim()
            } else {
              break
            }
          } else {
            break
          }
        }
      }

      if (title.length < 3) continue
      // Truncate title at sentence boundary if it picked up body text
      const sentEnd = title.indexOf('. ')
      if (sentEnd > 10 && title.length > 60) {
        title = title.slice(0, sentEnd)
      }
      const parentChapter = sectionNumber.split('.')[0] + '.0'
      headings.push({ lineIndex: i, sectionNumber, title, parentChapter })
      continue
    }

    // Try appendix heading
    const appMatch = line.match(APPENDIX_RE)
    if (appMatch) {
      const letter = appMatch[1]
      let title = appMatch[2]
        .replace(/\s*\.{2,}\s*\d+\s*$/, '')
        .replace(/\s+\d{1,3}\s*$/, '')
        .trim()
      if (!title) title = `Appendix ${letter}`

      // Multi-line appendix title
      if (title.length < 40) {
        for (let j = i + 1; j <= i + 2 && j < lines.length; j++) {
          const next = lines[j].trim()
          if (next && !HEADING_RE.test(next) && !APPENDIX_RE.test(next) &&
              !NOISE_RE.test(next) && !PAGE_NUM_RE.test(next) && !TOC_DOTS_RE.test(next) &&
              next.length < 60) {
            title += ' ' + next.replace(/\s*\.{2,}\s*\d+\s*$/, '').replace(/\s+\d{1,3}\s*$/, '').trim()
            break
          }
        }
      }

      headings.push({
        lineIndex: i,
        sectionNumber: `Appendix-${letter}`,
        title,
        parentChapter: 'Appendix',
      })
    }
  }

  // Deduplicate: keep the LAST occurrence with substantial body after it,
  // since earlier ones are likely TOC entries or appendix outlines that
  // reuse the same numbering scheme.
  // Strategy: for sections in chapters 1-6, keep the first body occurrence.
  // For appendix sub-sections (1.0, 2.0 inside appendices), they're unique by context.
  const deduped = deduplicateHeadings(headings, lines)

  // Build chunks from consecutive headings
  const chunks: SectionChunk[] = []
  for (let i = 0; i < deduped.length; i++) {
    const start = deduped[i].lineIndex + 1
    const end = i + 1 < deduped.length ? deduped[i + 1].lineIndex : lines.length
    const bodyLines = lines.slice(start, end)
    const text = bodyLines
      .map(l => l.trim())
      .filter(l => l && !NOISE_RE.test(l) && !PAGE_NUM_RE.test(l))
      .join('\n')

    // Skip TOC stubs and very short sections
    if (text.length < 300) continue
    // Skip TOC-like sections (mostly dots and page numbers)
    if ((text.match(/\.{3,}/g) || []).length > 10) continue

    const pageEstimate = Math.ceil(text.length / 3000)

    chunks.push({
      sectionNumber: deduped[i].sectionNumber,
      title: deduped[i].title,
      parentChapter: deduped[i].parentChapter,
      text,
      pageEstimate,
    })
  }

  return chunks
}

/** Deduplicate headings: keep the first body occurrence of each section number. */
function deduplicateHeadings(headings: RawHeading[], lines: string[]): RawHeading[] {
  const bySection = new Map<string, RawHeading[]>()
  for (const h of headings) {
    const existing = bySection.get(h.sectionNumber)
    if (existing) {
      existing.push(h)
    } else {
      bySection.set(h.sectionNumber, [h])
    }
  }

  const result: RawHeading[] = []
  for (const [_key, occurrences] of bySection) {
    if (occurrences.length === 1) {
      result.push(occurrences[0])
    } else {
      // Pick the occurrence with the most body text after it
      let best = occurrences[0]
      let bestLen = 0
      for (const occ of occurrences) {
        const nextLines = lines.slice(occ.lineIndex + 1, occ.lineIndex + 50)
        const bodyLen = nextLines
          .map(l => l.trim())
          .filter(l => l.length > 20 && /[a-z]/.test(l))
          .join('').length
        if (bodyLen > bestLen) {
          bestLen = bodyLen
          best = occ
        }
      }
      result.push(best)
    }
  }

  // Re-sort by line index
  return result.sort((a, b) => a.lineIndex - b.lineIndex)
}

/** Convert section number to a URL-friendly slug. */
export function sectionToSlug(sectionNumber: string, title: string): string {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 50)
  return `seh-${sectionNumber.toLowerCase().replace(/\./g, '-')}-${base}`
}

/** Convert slug to camelCase export name. */
export function slugToExportName(slug: string): string {
  return slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase())
}
