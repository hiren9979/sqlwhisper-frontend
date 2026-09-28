export function AppSidebar() {
  return (
    <aside className="app-sidebar">
      <button className="btn btn-primary btn-full btn-new-chat">
        + New Chat
      </button>

      <div className="sidebar-section">
        <h3 className="sidebar-section__title">Chats</h3>
        <div className="chat-list">
          <div className="chat-item chat-item--active">
            <span className="chat-item__title">Revenue Analysis</span>
          </div>
          <div className="chat-item">
            <span className="chat-item__title">Sales Report</span>
          </div>
          <div className="chat-item">
            <span className="chat-item__title">Customer Insights</span>
          </div>
          <div className="chat-item">
            <span className="chat-item__title">Inventory Query</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
