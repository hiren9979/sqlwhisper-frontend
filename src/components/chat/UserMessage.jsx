export function UserMessage({ content }) {
  return (
    <div className="message message--user">
      <div className="message__content">
        {content}
      </div>
    </div>
  )
}
