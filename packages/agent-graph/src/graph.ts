import { StateGraph } from '@langchain/langgraph'
import { SehStudyStateAnnotation } from './state/schema.js'
import { quizGeneratorNode, explainerNode } from './nodes/index.js'

const builder = new StateGraph(SehStudyStateAnnotation)
  .addNode('quizGenerator', quizGeneratorNode)
  .addNode('explainer', explainerNode)
  .addConditionalEdges('__start__', (state) => {
    if (state.targetTerm && state.distractors.length === 0) return 'quizGenerator'
    return 'explainer'
  })
  .addEdge('quizGenerator', '__end__')
  .addEdge('explainer', '__end__')

export const graph = builder.compile()
