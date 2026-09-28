export function ChatComposer() {
  return (
    <div className="chat-composer">
      <div className="chat-composer__input-wrapper">
        <input 
          type="text" 
          className="chat-composer__input"
          placeholder="Ask a follow-up question..."
        />
        <button className="btn btn-primary chat-composer__send">
          ➤
        </button>
      </div>
    </div>
  )
}
