import { writeFileSync, readdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { GenerationManifest } from './types.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const GENERATED_DIR = resolve(__dirname, '../../packages/shared/src/scenarios/generated')

/** Write a generated scenario file. */
export function writeScenarioFile(fileName: string, code: string): void {
  writeFileSync(resolve(GENERATED_DIR, fileName), code + '\n')
}

/** Regenerate the barrel index for generated scenarios. */
export function regenerateBarrel(manifest: GenerationManifest): void {
  const validated = Object.values(manifest.sections)
    .filter(e => e.status === 'validated')
    .sort((a, b) => a.sectionNumber.localeCompare(b.sectionNumber))

  if (validated.length === 0) {
    writeFileSync(
      resolve(GENERATED_DIR, 'index.ts'),
      `// AUTO-GENERATED — do not edit. Re-run: pnpm generate-scenarios
import type { ScenarioTemplate } from '../../scenario-types.js'

export const GENERATED_SCENARIOS: ScenarioTemplate[] = []
`,
    )
    return
  }

  const imports = validated.map(
    e => `import { ${e.exportName} } from './${e.slug}.js'`,
  )
  const names = validated.map(e => `  ${e.exportName},`)

  const content = `// AUTO-GENERATED — do not edit. Re-run: pnpm generate-scenarios
import type { ScenarioTemplate } from '../../scenario-types.js'
${imports.join('\n')}

export const GENERATED_SCENARIOS: ScenarioTemplate[] = [
${names.join('\n')}
]
`
  writeFileSync(resolve(GENERATED_DIR, 'index.ts'), content)
}
