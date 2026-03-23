import { Router } from 'express'
import type { ToolManifestEntry } from '@ojfbot/seh-study-shared'

const router = Router()

const TOOLS: ToolManifestEntry[] = [
  {
    name: 'generate_distractors',
    description: 'Generate 3 plausible wrong answers for a glossary term quiz question',
    endpoint: 'POST /api/quiz/distractors',
  },
  {
    name: 'explain_term',
    description: 'Explain a systems engineering term in context with related concepts',
    endpoint: 'POST /api/explain',
  },
  {
    name: 'relate_terms',
    description: 'Find and describe relationships between SE glossary terms',
    endpoint: 'POST /api/relate',
  },
]

router.get('/', (_req, res) => {
  res.json(TOOLS)
})

export default router
