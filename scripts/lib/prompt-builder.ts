import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { SectionChunk } from './types.js'
import { matchTerms, getAllTermNames } from './term-matcher.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const MISSIONS = [
  'Mars rover', 'lunar gateway module', 'Earth observation satellite',
  'deep space telescope', 'crewed transport vehicle', 'CubeSat constellation',
  'sounding rocket', 'ISS science experiment', 'asteroid sample return',
  'space station resupply vehicle',
]

const ROLES = [
  'Lead Systems Engineer', 'Mission Assurance Engineer', 'Requirements Lead',
  'V&V Engineer', 'Configuration Manager', 'Risk Manager', 'HSI Lead',
  'Integration & Test Lead',
]

const DIFFICULTIES = ['beginner', 'intermediate', 'advanced'] as const

const CATEGORIES = [
  'lifecycle', 'requirements', 'design', 'reviews', 'risk',
  'verification', 'project-mgmt', 'configuration', 'human-factors', 'technology',
]

// Cache example scenarios
let exampleCache: string[] | null = null

function loadExamples(): string[] {
  if (exampleCache) return exampleCache
  const dir = resolve(__dirname, '../../packages/shared/src/scenarios')
  const files = ['mars-sample-return.ts', 'anomaly-on-station.ts', 'requirements-tangle.ts']
  exampleCache = files.map(f => {
    try {
      const content = readFileSync(resolve(dir, f), 'utf-8')
      // Truncate to first 120 lines to fit in context
      return content.split('\n').slice(0, 120).join('\n') + '\n// ... (truncated)'
    } catch {
      return ''
    }
  }).filter(Boolean)
  return exampleCache
}

/** Pick a random item from an array. */
function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

/** Build the generation prompt for a section. */
export function buildPrompt(
  section: SectionChunk,
  sectionIndex: number,
  slug: string,
  exportName: string,
): { system: string; user: string; difficulty: string } {
  const terms = matchTerms(section.text, section.parentChapter, 12)
  const allTermNames = getAllTermNames()
  const examples = loadExamples()
  const mission = pick(MISSIONS)
  const role = pick(ROLES)
  const difficulty = DIFFICULTIES[sectionIndex % 3]
  const example = examples[sectionIndex % examples.length] || examples[0]

  // Truncate section text if too long (~8000 tokens ≈ 32000 chars)
  const sectionText = section.text.length > 32000
    ? section.text.slice(0, 32000) + '\n\n[... section text truncated ...]'
    : section.text

  const system = `You are a training scenario generator for a NASA Systems Engineering study app. You generate TypeScript code that matches an exact type contract. Output ONLY valid TypeScript code — no markdown fences, no explanations, no comments outside the code.`

  const user = `Generate a scenario for SEH section ${section.sectionNumber}: "${section.title}"

## Section Content
${sectionText}

## Available Glossary Terms (use ONLY these exact strings with t('...'))
${JSON.stringify(allTermNames)}

## Most Relevant Terms for This Section
${terms.map(t => `- "${t.term}": ${t.definition}`).join('\n')}

## Valid Categories
${JSON.stringify(CATEGORIES)}

## Mission Context
Role: ${role}
Mission: ${mission}
Difficulty: ${difficulty}

## Format Reference (abbreviated)
${example}

## Output Requirements
Generate a complete TypeScript file matching this EXACT structure:

import type { ScenarioTemplate } from '../../scenario-types.js'
import { termIndexByName as t } from '../../glossary.js'

export const ${exportName}: ScenarioTemplate = {
  meta: {
    id: '${slug}',
    title: '<engaging title related to section topic>',
    subtitle: '<one-line hook>',
    difficulty: '${difficulty}',
    categories: [<1-3 categories from valid list>],
    termIndices: [t('<exact term>'), ...],  // 6-15 terms from the glossary list
    estimatedMinutes: <10-25>,
  },
  startNodeId: 'node-1',
  nodes: [
    // 5-8 ScenarioNode objects
    // Each node has: id, phase, title, narrative (2-4 sentences, second person), termHighlights, decisions, defaultNextNodeId
    // Each node has 2-3 DecisionOption objects
    // DecisionOption has: id ('a'|'b'|'c'), text, termIndices, isCorrect, isAcceptable, feedback, nextNodeId (always null), scoreImpact
  ],
  debriefTemplate: {
    successNarrative: '<2-3 sentences>',
    failureNarrative: '<2-3 sentences>',
    successThreshold: 60,
  },
}

CRITICAL RULES:
1. Every t('...') MUST use an EXACT term name from the glossary list — no paraphrasing
2. Each node has exactly 2-3 decisions
3. Each node: exactly one decision with isCorrect:true AND isAcceptable:true
4. Each node: at least one decision with isCorrect:false AND isAcceptable:false
5. Node IDs: 'node-1', 'node-2', etc. Sequential.
6. All decision nextNodeId values MUST be null
7. defaultNextNodeId: points to next node ID, EXCEPT last node which MUST be null
8. scoreImpact: risk [-8,8], schedule [-5,5], budget [-5,5]
9. The scenario MUST teach concepts from this specific section
10. Categories must be from the valid list: ${JSON.stringify(CATEGORIES)}
11. Output ONLY the TypeScript code. No markdown, no backticks, no explanation.`

  return { system, user, difficulty }
}
