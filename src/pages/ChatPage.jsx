import { useState } from 'react'
import { ChatComposer } from '../components/chat/ChatComposer'
import { UserMessage } from '../components/chat/UserMessage'
import { AssistantMessage } from '../components/chat/AssistantMessage'

export function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: 'user',
      content: 'Show revenue for Gujarat in August.'
    },
    {
      role: 'assistant',
      content: 'Revenue for Gujarat in August was ₹20.4M.',
      sql: `SELECT 
  region,
  month,
  revenue
FROM revenue_data
WHERE region = 'Gujarat'
  AND month = 'August'
ORDER BY revenue DESC;`,
      result: [
        { Region: 'Gujarat', Month: 'August', Revenue: '₹20.4M' }
      ]
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
