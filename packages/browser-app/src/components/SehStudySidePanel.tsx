import { useAppSelector, useAppDispatch } from '../store/store.js'
import { setActivePanelTab } from '../store/threadsSlice.js'
import type { PanelTab } from '@ojfbot/seh-study-shared'
import './SehStudySidePanel.css'

export default function SehStudySidePanel() {
  const dispatch = useAppDispatch()
  const { sidebarExpanded, activePanelTab, threads, activeThreadId } = useAppSelector(s => s.threads)

  return (
    <div
      className={`seh-study-side-panel${sidebarExpanded ? ' seh-study-side-panel--open' : ''}`}
      {...(!sidebarExpanded ? { inert: '' as any } : {})}
    >
      <div className="seh-study-side-panel__tabs">
        {(['sessions', 'chat'] as PanelTab[]).map(tab => (
          <button
            key={tab}
            className={`seh-study-side-panel__tab${activePanelTab === tab ? ' seh-study-side-panel__tab--active' : ''}`}
            onClick={() => dispatch(setActivePanelTab(tab))}
          >
            {tab === 'sessions' ? 'Sessions' : 'Chat'}
          </button>
        ))}
      </div>

      <div className="seh-study-side-panel__content">
        {activePanelTab === 'sessions' ? (
          <div className="seh-study-side-panel__sessions">
            {threads.map(t => (
              <div
                key={t.id}
                className={`seh-study-session-item${t.id === activeThreadId ? ' seh-study-session-item--active' : ''}`}
              >
                {t.name}
              </div>
            ))}
          </div>
        ) : (
          <div className="seh-study-side-panel__chat">
            <p className="seh-study-side-panel__placeholder">Ask about any SE concept...</p>
          </div>
        )}
      </div>
    </div>
  )
}
