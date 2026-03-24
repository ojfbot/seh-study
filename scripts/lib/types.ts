export interface SectionChunk {
  sectionNumber: string
  title: string
  parentChapter: string
  text: string
  pageEstimate: number
}

export interface ManifestEntry {
  sectionNumber: string
  title: string
  slug: string
  exportName: string
  fileName: string
  status: 'pending' | 'generated' | 'validated' | 'failed' | 'skipped'
  difficulty: string
  termCount: number
  nodeCount: number
  attempts: number
  lastError?: string
  generatedAt?: string
}

export interface GenerationManifest {
  version: 1
  model: string
  pdfHash: string
  sections: Record<string, ManifestEntry>
}
