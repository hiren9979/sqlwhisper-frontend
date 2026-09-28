export function ChatComposer() {
  return (
    <div className="chat-composer">
      <div className="chat-composer__input-wrapper">
        <input 
          type="text" 
          className="chat-composer__input"
          placeholder="Ask something about your data"
        />
        <button className="btn btn-primary chat-composer__send">
          ➤
        </button>
      </div>
    </div>
  )
}
