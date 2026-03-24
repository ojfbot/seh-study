import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { GenerationManifest, ManifestEntry } from './types.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const MANIFEST_PATH = resolve(__dirname, '../generation-manifest.json')

/** Load manifest from disk, or return null if it doesn't exist. */
export function loadManifest(): GenerationManifest | null {
  if (!existsSync(MANIFEST_PATH)) return null
  try {
    return JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8')) as GenerationManifest
  } catch {
    return null
  }
}

/** Save manifest to disk. */
export function saveManifest(manifest: GenerationManifest): void {
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n')
}

/** Create a fresh manifest. */
export function createManifest(model: string, pdfHash: string): GenerationManifest {
  return { version: 1, model, pdfHash, sections: {} }
}

/** Get or create a manifest entry for a section. */
export function getOrCreateEntry(
  manifest: GenerationManifest,
  sectionNumber: string,
  title: string,
  slug: string,
  exportName: string,
): ManifestEntry {
  if (manifest.sections[sectionNumber]) {
    return manifest.sections[sectionNumber]
  }
  const entry: ManifestEntry = {
    sectionNumber,
    title,
    slug,
    exportName,
    fileName: `${slug}.ts`,
    status: 'pending',
    difficulty: '',
    termCount: 0,
    nodeCount: 0,
    attempts: 0,
  }
  manifest.sections[sectionNumber] = entry
  return entry
}
