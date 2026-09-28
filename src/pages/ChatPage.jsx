import { useState } from 'react'
import { ChatComposer } from '../components/chat/ChatComposer'
import { UserMessage } from '../components/chat/UserMessage'
import { AssistantMessage } from '../components/chat/AssistantMessage'

export function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: 'user',
      content: 'Show revenue.'
    },
    {
      role: 'assistant',
      content: 'I need one more detail',
      clarification: {
        title: 'Which time period should I use?',
        options: ['This month', 'Last month', 'This year', 'All time'],
        allowCustom: true,
        customPlaceholder: 'e.g. January 2026'
      }
    }
  ])

  return (
    <div className="chat-page">
      {messages.length === 0 ? (
        <div className="chat-page__empty">
          <h1>Ask your database</h1>
          <p className="text-secondary">Ask questions about your data in natural language.</p>
        </div>
      ) : (
        <div className="chat-page__messages">
          {messages.map((message, index) => (
            message.role === 'user' ? (
              <UserMessage key={index} content={message.content} />
            ) : (
              <AssistantMessage 
                key={index} 
                content={message.content}
                clarification={message.clarification}
                sql={message.sql}
                result={message.result}
              />
            )
          ))}
        </div>
      )}
      <div className="chat-page__composer">
        <ChatComposer />
      </div>
    </div>
  )
}
