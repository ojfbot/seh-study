import { Annotation } from '@langchain/langgraph'

export const SehStudyStateAnnotation = Annotation.Root({
  messages: Annotation<string[]>({ reducer: (a, b) => [...a, ...b], default: () => [] }),
  targetTerm: Annotation<string | null>({ reducer: (_, b) => b, default: () => null }),
  distractors: Annotation<string[]>({ reducer: (_, b) => b, default: () => [] }),
  explanation: Annotation<string | null>({ reducer: (_, b) => b, default: () => null }),
  error: Annotation<string | null>({ reducer: (_, b) => b, default: () => null }),
})

export type SehStudyState = typeof SehStudyStateAnnotation.State
