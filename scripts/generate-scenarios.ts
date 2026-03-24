#!/usr/bin/env tsx
/**
 * SEH Scenario Generation Pipeline
 *
 * Extracts sections from the NASA Systems Engineering Handbook PDF,
 * generates a ScenarioTemplate for each via Claude API, validates,
 * and writes TypeScript files.
 *
 * Usage:
 *   pnpm generate-scenarios                    # generate all pending
 *   pnpm generate-scenarios --dry-run          # parse PDF, show sections
 *   pnpm generate-scenarios --section 4.1      # generate one section
 *   pnpm generate-scenarios --retry-failed     # retry failed sections
 *   pnpm generate-scenarios --model claude-sonnet-4-20250514
 *   pnpm generate-scenarios --concurrency 3
 */
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'

const __dirname = dirname(fileURLToPath(import.meta.url))
import Anthropic from '@anthropic-ai/sdk'
import { extractPdfText, hashFile } from './lib/pdf-extractor.js'
import { parseSections, sectionToSlug, slugToExportName } from './lib/section-parser.js'
import { buildPrompt } from './lib/prompt-builder.js'
import { validateScenario, cleanGeneratedCode } from './lib/scenario-validator.js'
import { loadManifest, saveManifest, createManifest, getOrCreateEntry } from './lib/manifest.js'
import { writeScenarioFile, regenerateBarrel } from './lib/file-writer.js'
import type { SectionChunk } from './lib/types.js'

// ── CLI args ────────────────────────────────────────────────────────────────

const { values: args } = parseArgs({
  options: {
    'dry-run': { type: 'boolean', default: false },
    section: { type: 'string' },
    'retry-failed': { type: 'boolean', default: false },
    model: { type: 'string', default: 'claude-sonnet-4-20250514' },
    concurrency: { type: 'string', default: '3' },
  },
})

const PDF_PATH = resolve(__dirname, '../assets/nasa-seh-rev2.pdf')
const MODEL = args.model!
const CONCURRENCY = parseInt(args.concurrency!, 10)
const MAX_ATTEMPTS = 3

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('=== SEH Scenario Generation Pipeline ===\n')

  // 1. Extract PDF
  console.log('Extracting PDF text...')
  const pdfText = extractPdfText(PDF_PATH)
  const pdfHash = hashFile(PDF_PATH)
  console.log(`  ${pdfText.length} chars extracted, hash: ${pdfHash.slice(0, 12)}...`)

  // 2. Parse sections
  console.log('Parsing sections...')
  const sections = parseSections(pdfText)
  console.log(`  ${sections.length} sections found\n`)

  // 3. Dry run — just show sections
  if (args['dry-run']) {
    console.log('=== DRY RUN — Sections Found ===\n')
    for (const s of sections) {
      const slug = sectionToSlug(s.sectionNumber, s.title)
      console.log(`  ${s.sectionNumber.padEnd(12)} ${s.title.slice(0, 60).padEnd(62)} ~${s.pageEstimate}pp  ${slug}`)
    }
    console.log(`\nTotal: ${sections.length} sections`)
    return
  }

  // 4. Check API key
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ERROR: ANTHROPIC_API_KEY not set')
    process.exit(1)
  }

  const client = new Anthropic()

  // 5. Load/create manifest
  let manifest = loadManifest()
  if (!manifest || manifest.pdfHash !== pdfHash) {
    console.log('Creating new manifest...')
    manifest = createManifest(MODEL, pdfHash)
  }

  // 6. Filter sections to process
  let toProcess: SectionChunk[] = sections
  if (args.section) {
    toProcess = sections.filter(s => s.sectionNumber === args.section)
    if (toProcess.length === 0) {
      console.error(`Section "${args.section}" not found. Available:`)
      for (const s of sections) console.log(`  ${s.sectionNumber}: ${s.title}`)
      process.exit(1)
    }
  }

  // 7. Process sections with concurrency control
  let generated = 0
  let failed = 0
  let skipped = 0

  // Simple concurrency limiter
  const queue = [...toProcess]
  const active: Promise<void>[] = []

  async function processSection(section: SectionChunk, index: number) {
    const slug = sectionToSlug(section.sectionNumber, section.title)
    const exportName = slugToExportName(slug)
    const entry = getOrCreateEntry(manifest!, section.sectionNumber, section.title, slug, exportName)

    // Skip if already validated
    if (entry.status === 'validated' && !args['retry-failed']) {
      skipped++
      return
    }
    // Skip if failed and not retrying
    if (entry.status === 'failed' && !args['retry-failed']) {
      skipped++
      return
    }
    // Skip if too many attempts
    if (entry.attempts >= MAX_ATTEMPTS && !args['retry-failed']) {
      skipped++
      return
    }

    console.log(`[${section.sectionNumber}] Generating: ${section.title.slice(0, 50)}...`)

    let lastError = ''
    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      entry.attempts++
      try {
        const { system, user, difficulty } = buildPrompt(section, index, slug, exportName)

        // Append retry context if this is a retry
        let userPrompt = user
        if (attempt > 0 && lastError) {
          userPrompt += `\n\n## RETRY — Fix These Errors\n${lastError}`
        }

        const response = await client.messages.create({
          model: MODEL,
          max_tokens: 8192,
          system,
          messages: [{ role: 'user', content: userPrompt }],
        })

        const rawCode = response.content
          .filter(b => b.type === 'text')
          .map(b => b.text)
          .join('')

        const code = cleanGeneratedCode(rawCode)
        const result = validateScenario(code)

        if (!result.valid) {
          lastError = result.errors.join('\n')
          console.log(`  [${section.sectionNumber}] Validation failed (attempt ${attempt + 1}): ${result.errors[0]}`)
          continue
        }

        if (result.warnings.length > 0) {
          console.log(`  [${section.sectionNumber}] Warnings: ${result.warnings.join(', ')}`)
        }

        // Write the file
        writeScenarioFile(entry.fileName, code)

        // Count terms and nodes
        const termCount = (code.match(/t\('/g) || []).length
        const nodeCount = (code.match(/id:\s*'node-\d+'/g) || []).length

        entry.status = 'validated'
        entry.difficulty = difficulty
        entry.termCount = termCount
        entry.nodeCount = nodeCount
        entry.generatedAt = new Date().toISOString()
        entry.lastError = undefined
        saveManifest(manifest!)

        console.log(`  [${section.sectionNumber}] OK — ${nodeCount} nodes, ${termCount} terms`)
        generated++
        return
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err)
        lastError = msg
        console.log(`  [${section.sectionNumber}] Error (attempt ${attempt + 1}): ${msg.slice(0, 100)}`)

        // Rate limit — back off
        if (msg.includes('429') || msg.includes('rate')) {
          const delay = Math.min(60000, 5000 * Math.pow(2, attempt))
          console.log(`  Backing off ${delay / 1000}s...`)
          await new Promise(r => setTimeout(r, delay))
        }
      }
    }

    // All attempts failed
    entry.status = 'failed'
    entry.lastError = lastError
    saveManifest(manifest!)
    console.log(`  [${section.sectionNumber}] FAILED after ${MAX_ATTEMPTS} attempts`)
    failed++
  }

  // Process with concurrency
  for (let i = 0; i < queue.length; i++) {
    const section = queue[i]
    const promise = processSection(section, i).then(() => {
      const idx = active.indexOf(promise)
      if (idx !== -1) active.splice(idx, 1)
    })
    active.push(promise)

    if (active.length >= CONCURRENCY) {
      await Promise.race(active)
    }
  }
  await Promise.all(active)

  // 8. Regenerate barrel
  console.log('\nRegenerating generated/index.ts barrel...')
  regenerateBarrel(manifest)
  saveManifest(manifest)

  // 9. Summary
  const validatedCount = Object.values(manifest.sections).filter(e => e.status === 'validated').length
  const failedCount = Object.values(manifest.sections).filter(e => e.status === 'failed').length
  console.log(`
=== Summary ===
  Generated this run: ${generated}
  Skipped (already done): ${skipped}
  Failed this run: ${failed}
  Total validated: ${validatedCount}
  Total failed: ${failedCount}
  Total sections: ${sections.length}
`)
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
