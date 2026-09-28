import { ChatComposer } from '../components/chat/ChatComposer'

export function ChatPage() {
  return (
    <div className="chat-page">
      <div className="chat-page__empty">
        <h1>Ask your database</h1>
        <p className="text-secondary">Ask questions about your data in natural language.</p>
      </div>
      <div className="chat-page__composer">
        <ChatComposer />
      </div>
    </div>
  )
}
