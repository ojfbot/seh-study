// ── Tab types ────────────────────────────────────────────────────────────────

export type TabSlug = 'study' | 'browse' | 'progress'

export const TAB_SLUGS: TabSlug[] = ['study', 'browse', 'progress']

export const TAB_LABELS: Record<TabSlug, string> = {
  study: 'Study',
  browse: 'Browse',
  progress: 'Progress',
}

export type PanelTab = 'sessions' | 'chat'

export const PANEL_TABS: PanelTab[] = ['sessions', 'chat']

// ── Glossary types ───────────────────────────────────────────────────────────

export interface GlossaryTerm {
  term: string
  definition: string
}

export type Category =
  | 'lifecycle'
  | 'requirements'
  | 'design'
  | 'reviews'
  | 'risk'
  | 'verification'
  | 'project-mgmt'
  | 'configuration'
  | 'human-factors'
  | 'technology'

export const CATEGORIES: Category[] = [
  'lifecycle',
  'requirements',
  'design',
  'reviews',
  'risk',
  'verification',
  'project-mgmt',
  'configuration',
  'human-factors',
  'technology',
]

export const CATEGORY_LABELS: Record<Category, string> = {
  lifecycle: 'Lifecycle & Phases',
  requirements: 'Requirements',
  design: 'Design & Integration',
  reviews: 'Reviews & Gates',
  risk: 'Risk Management',
  verification: 'Verification & Validation',
  'project-mgmt': 'Project Management',
  configuration: 'Configuration & Data',
  'human-factors': 'Human Factors & Stakeholders',
  technology: 'Technology & Maturity',
}

// ── Spaced repetition types ──────────────────────────────────────────────────

export type LeitnerBox = 1 | 2 | 3 | 4 | 5

export const BOX_INTERVALS_DAYS: Record<LeitnerBox, number> = {
  1: 0,    // immediate
  2: 1,    // 1 day
  3: 3,    // 3 days
  4: 7,    // 7 days
  5: 14,   // 14 days (mastered)
}

export interface CardState {
  termIndex: number
  box: LeitnerBox
  lastReviewedAt: string | null
  nextReviewAt: string
}

export type StudyMode = 'flashcard' | 'quiz' | 'match'

export interface StudySession {
  id: string
  startedAt: string
  endedAt: string | null
  cardsReviewed: number
  correct: number
  mode: StudyMode
}

// ── Quiz types ───────────────────────────────────────────────────────────────

export interface QuizQuestion {
  termIndex: number
  options: string[]
  correctIndex: number
}

// ── Chat types ───────────────────────────────────────────────────────────────

export interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp?: string
}

// ── Settings ─────────────────────────────────────────────────────────────────

export interface SehStudySettings {
  cardOrientation: 'term-first' | 'definition-first'
  quizCount: number
  selectedCategories: Category[]
}

// ── Tool manifest ────────────────────────────────────────────────────────────

export interface ToolManifestEntry {
  name: string
  description: string
  endpoint: string
}
