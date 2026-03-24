import { useMemo } from 'react'
import { GLOSSARY } from '@ojfbot/seh-study-shared'
import type { ScenarioNode } from '@ojfbot/seh-study-shared'

interface NarrativeBlockProps {
  node: ScenarioNode
}

/** Renders narrative text with glossary terms highlighted and tooltipped. */
export default function NarrativeBlock({ node }: NarrativeBlockProps) {
  const highlighted = useMemo(() => {
    if (node.termHighlights.length === 0) return node.narrative

    // Build a map of term name → index for terms in this node
    const termMap = new Map<string, number>()
    for (const idx of node.termHighlights) {
      const term = GLOSSARY[idx]
      if (term) termMap.set(term.term, idx)
    }

    // Sort by length (longest first) to match longer terms before shorter ones
    const termNames = [...termMap.keys()].sort((a, b) => b.length - a.length)
    if (termNames.length === 0) return node.narrative

    // Build regex that matches any of the term names (case-insensitive)
    const escaped = termNames.map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    const regex = new RegExp(`(${escaped.join('|')})`, 'gi')

    const parts = node.narrative.split(regex)

    return parts.map((part, i) => {
      // Check if this part matches a term (case-insensitive lookup)
      const matchedName = termNames.find(n => n.toLowerCase() === part.toLowerCase())
      if (matchedName) {
        const termIdx = termMap.get(matchedName)!
        const definition = GLOSSARY[termIdx].definition
        return (
          <span key={i} className="seh-study-scenario-term-highlight">
            {part}
            <span className="seh-study-scenario-term-tooltip">{definition}</span>
          </span>
        )
      }
      return part
    })
  }, [node.narrative, node.termHighlights])

  return (
    <div className="seh-study-scenario-narrative seh-study-scenario-typewriter">
      <h3 className="seh-study-scenario-node-title">{node.title}</h3>
      <p className="seh-study-scenario-narrative-text">{highlighted}</p>
    </div>
  )
}
