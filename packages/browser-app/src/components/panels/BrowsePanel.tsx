import { useMemo, useState } from 'react'
import { Search, Accordion, AccordionItem, Tag } from '@carbon/react'
import {
  getCategorizedTerms, CATEGORIES, CATEGORY_LABELS,
  type CategorizedTerm, type Category,
} from '@ojfbot/seh-study-shared'
import { useAppSelector } from '../../store/store.js'
import './BrowsePanel.css'

export default function BrowsePanel() {
  const [query, setQuery] = useState('')
  const cards = useAppSelector(s => s.study.cards)

  const allTerms = useMemo(() => getCategorizedTerms(), [])

  const filtered = useMemo(() => {
    if (!query.trim()) return allTerms
    const q = query.toLowerCase()
    return allTerms.filter(
      t => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q),
    )
  }, [allTerms, query])

  const grouped = useMemo(() => {
    const map = new Map<Category, CategorizedTerm[]>()
    for (const cat of CATEGORIES) map.set(cat, [])
    for (const t of filtered) {
      map.get(t.category)!.push(t)
    }
    return map
  }, [filtered])

  return (
    <div className="seh-study-panel seh-study-panel--browse">
      <Search
        id="glossary-search"
        labelText="Search glossary"
        placeholder="Search 238 terms..."
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        size="lg"
      />

      <p className="browse-count">{filtered.length} terms{query ? ` matching "${query}"` : ''}</p>

      <Accordion>
        {CATEGORIES.map(cat => {
          const terms = grouped.get(cat)!
          if (terms.length === 0) return null
          return (
            <AccordionItem
              key={cat}
              title={
                <span className="browse-category-title">
                  {CATEGORY_LABELS[cat]}
                  <Tag type="gray" size="sm">{terms.length}</Tag>
                </span>
              }
            >
              <div className="browse-term-list">
                {terms.map(t => {
                  const card = cards[t.index]
                  return (
                    <div key={t.index} className="browse-term">
                      <div className="browse-term-header">
                        <strong>{t.term}</strong>
                        {card && card.box > 1 && (
                          <Tag
                            type={card.box >= 4 ? 'green' : card.box >= 3 ? 'blue' : 'teal'}
                            size="sm"
                          >
                            Box {card.box}
                          </Tag>
                        )}
                      </div>
                      <p className="browse-term-def">{t.definition}</p>
                    </div>
                  )
                })}
              </div>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
