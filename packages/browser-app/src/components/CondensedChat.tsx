import { useState, useCallback } from 'react'
import {
  ChatShell,
  ChatMessage,
  MarkdownMessage,
  BadgeButton,
  getChatMessage,
} from '@ojfbot/frame-ui-components'
import '@ojfbot/frame-ui-components/styles/chat-shell'
import '@ojfbot/frame-ui-components/styles/markdown-message'
import '@ojfbot/frame-ui-components/styles/badge-button'
import type { ChatDisplayState, BadgeAction } from '@ojfbot/frame-ui-components'
import { useAppDispatch, useAppSelector } from '../store/store.js'
import {
  addMessage,
  setDraftInput,
  setLoading,
} from '../store/chatSlice.js'

interface CondensedChatProps {
  sidebarExpanded?: boolean
}

/**
 * SEH Study chat — wires shared ChatShell to seh-study's Redux chatSlice.
 */
export default function CondensedChat({ sidebarExpanded = false }: CondensedChatProps) {
  const dispatch = useAppDispatch()
  const messages = useAppSelector(s => s.chat.messages)
  const draftInput = useAppSelector(s => s.chat.draftInput)
  const isLoading = useAppSelector(s => s.chat.isLoading)
  const [displayState, setDisplayState] = useState<ChatDisplayState>('collapsed')

  const handleSend = useCallback((message: string) => {
    if (!message || isLoading) return

    dispatch(addMessage({ role: 'user', content: message }))
    dispatch(setDraftInput(''))
    dispatch(setLoading(true))

    // TODO: Connect to SEH Study agent API
    setTimeout(() => {
      dispatch(addMessage({
        role: 'assistant',
        content: 'SEH Study agent integration coming soon. Ask me about systems engineering concepts!',
      }))
      dispatch(setLoading(false))
    }, 1000)
  }, [isLoading, dispatch])

  const handleExecute = useCallback((action: BadgeAction) => {
    const msg = getChatMessage(action)
    if (msg) handleSend(msg)
  }, [handleSend])

  return (
    <ChatShell
      displayState={displayState}
      onDisplayStateChange={setDisplayState}
      sidebarExpanded={sidebarExpanded}
      title="SEH Study AI"
      isLoading={isLoading}
      draftInput={draftInput}
      onDraftChange={(value) => dispatch(setDraftInput(value))}
      onSend={handleSend}
      placeholder="Ask about SE concepts..."
    >
      {messages.map((msg, idx) => (
        <ChatMessage key={idx} role={msg.role}>
          {msg.role === 'user' ? (
            <span style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</span>
          ) : (
            <MarkdownMessage
              content={msg.content}
              onExecute={handleExecute}
              compact
            />
          )}
        </ChatMessage>
      ))}
    </ChatShell>
  )
}
