import { ThreadSidebar } from '@ojfbot/frame-ui-components'
import '@ojfbot/frame-ui-components/styles/thread-sidebar'
import type { ThreadItem } from '@ojfbot/frame-ui-components'
import { useAppDispatch, useAppSelector } from '../store/store.js'
import { addThread, removeThread, setActiveThread } from '../store/threadsSlice.js'

interface ThreadSidebarConnectedProps {
  isExpanded: boolean
  onToggle: () => void
}

export default function ThreadSidebarConnected({ isExpanded, onToggle }: ThreadSidebarConnectedProps) {
  const dispatch = useAppDispatch()
  const threads = useAppSelector(s => s.threads.threads)
  const activeThreadId = useAppSelector(s => s.threads.activeThreadId)

  const threadItems: ThreadItem[] = threads.map(t => ({
    threadId: t.id,
    title: t.name,
    updatedAt: t.updatedAt,
  }))

  return (
    <ThreadSidebar
      isExpanded={isExpanded}
      onToggle={onToggle}
      threads={threadItems}
      currentThreadId={activeThreadId}
      title="Study Sessions"
      onCreateThread={() => {
        const id = crypto.randomUUID()
        const timestamp = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
        dispatch(addThread({ id, name: `Study - ${timestamp}` }))
      }}
      onSelectThread={(threadId) => {
        if (activeThreadId !== threadId) dispatch(setActiveThread(threadId))
      }}
      onDeleteThread={(threadId) => dispatch(removeThread(threadId))}
    />
  )
}
