import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const VALID_CATEGORIES = new Set([
  'lifecycle', 'requirements', 'design', 'reviews', 'risk',
  'verification', 'project-mgmt', 'configuration', 'human-factors', 'technology',
])

let termNamesCache: Set<string> | null = null

function loadTermNames(): Set<string> {
  if (termNamesCache) return termNamesCache
  const path = resolve(__dirname, '../../packages/shared/src/glossary.json')
  const glossary = JSON.parse(readFileSync(path, 'utf-8')) as { term: string }[]
  termNamesCache = new Set(glossary.map(g => g.term))
  return termNamesCache
}

export interface ValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
}

/** Validate generated scenario TypeScript code. */
export function validateScenario(code: string): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []
  const termNames = loadTermNames()

  // 1. Check term existence — extract all t('...') calls
  const termCalls = [...code.matchAll(/t\('([^']+)'\)/g)]
  for (const match of termCalls) {
    if (!termNames.has(match[1])) {
      errors.push(`Unknown term: "${match[1]}"`)
    }
  }
  if (termCalls.length === 0) {
    errors.push('No t() term references found')
  }

  // 2. Check node IDs and graph connectivity
  const nodeIds = [...code.matchAll(/id:\s*'(node-\d+)'/g)].map(m => m[1])
  const nodeIdSet = new Set(nodeIds)
  if (nodeIds.length === 0) {
    errors.push('No nodes found')
  }

  // Check startNodeId
  const startMatch = code.match(/startNodeId:\s*'(node-\d+)'/)
  if (startMatch && !nodeIdSet.has(startMatch[1])) {
    errors.push(`startNodeId '${startMatch[1]}' not found in nodes`)
  }

  // Check defaultNextNodeId references
  const nextNodeRefs = [...code.matchAll(/defaultNextNodeId:\s*'(node-\d+)'/g)]
  for (const ref of nextNodeRefs) {
    if (!nodeIdSet.has(ref[1])) {
      errors.push(`defaultNextNodeId '${ref[1]}' not found in nodes`)
    }
  }

  // Check terminal node exists (defaultNextNodeId: null)
  const hasTerminal = /defaultNextNodeId:\s*null/.test(code)
  if (!hasTerminal) {
    errors.push('No terminal node found (defaultNextNodeId: null)')
  }

  // 3. Check categories
  const categoryMatches = code.match(/categories:\s*\[([^\]]+)\]/)
  if (categoryMatches) {
    const cats = [...categoryMatches[1].matchAll(/'([^']+)'/g)].map(m => m[1])
    for (const cat of cats) {
      if (!VALID_CATEGORIES.has(cat)) {
        errors.push(`Invalid category: '${cat}'`)
      }
    }
    if (cats.length === 0) {
      errors.push('Empty categories array')
    }
  }

  // 4. Check decision structure per node
  // Count decisions blocks — look for patterns of id: 'a', id: 'b' etc grouped
  const decisionBlocks = [...code.matchAll(/decisions:\s*\[/g)]
  const isCorrectCounts = [...code.matchAll(/isCorrect:\s*(true|false)/g)]
  const isAcceptableCounts = [...code.matchAll(/isAcceptable:\s*(true|false)/g)]

  if (decisionBlocks.length === 0) {
    errors.push('No decisions arrays found')
  }

  // 5. Basic structure checks
  if (!code.includes("import type { ScenarioTemplate }")) {
    errors.push('Missing ScenarioTemplate import')
  }
  if (!code.includes("import { termIndexByName as t }")) {
    errors.push('Missing termIndexByName import')
  }
  if (!code.includes('debriefTemplate')) {
    errors.push('Missing debriefTemplate')
  }
  if (!code.includes('successThreshold')) {
    errors.push('Missing successThreshold')
  }

  // 6. Check score impact bounds
  const scoreImpacts = [...code.matchAll(/risk:\s*(-?\d+)/g)]
  for (const m of scoreImpacts) {
    const v = parseInt(m[1])
    if (Math.abs(v) > 15) {
      warnings.push(`Large risk impact: ${v}`)
    }
  }

  // 7. Check that export exists
  if (!code.match(/export const \w+:\s*ScenarioTemplate/)) {
    errors.push('Missing export const declaration')
  }

  return { valid: errors.length === 0, errors, warnings }
}

/** Clean up generated code — remove markdown fences if present. */
export function cleanGeneratedCode(raw: string): string {
  let code = raw.trim()
  // Remove markdown fences
  if (code.startsWith('```')) {
    code = code.replace(/^```\w*\n?/, '').replace(/\n?```$/, '')
  }
  return code.trim()
}
