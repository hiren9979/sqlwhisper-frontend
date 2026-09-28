export function ChatComposer() {
  return (
    <div className="chat-composer">
      <div className="chat-composer__input-wrapper">
        <input 
          type="text" 
          className="chat-composer__input"
          placeholder="Select an option or type your response..."
        />
        <button className="btn btn-primary chat-composer__send">
          ➤
        </button>
      </div>
    </div>
  )
}
