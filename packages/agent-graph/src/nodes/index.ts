import type { SehStudyState } from '../state/schema.js'

export async function quizGeneratorNode(state: SehStudyState): Promise<Partial<SehStudyState>> {
  // SCAFFOLD: stub — generate 3 plausible distractors for state.targetTerm
  return { distractors: [] }
}

export async function explainerNode(state: SehStudyState): Promise<Partial<SehStudyState>> {
  // SCAFFOLD: stub — explain targetTerm in SE context
  return { explanation: null }
}
