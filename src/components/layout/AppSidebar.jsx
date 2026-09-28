export function AppSidebar({ isCollapsed, onToggleCollapse }) {
  return (
    <aside className={`app-sidebar ${isCollapsed ? 'app-sidebar--collapsed' : ''}`}>
      <div className="sidebar__top">
        <button className="btn btn-primary btn-full btn-new-chat">
          {isCollapsed ? '+' : '+ New Chat'}
        </button>

        <div className="sidebar-section">
          {!isCollapsed && (
            <h3 className="sidebar-section__title">Chats</h3>
          )}
          <div className="chat-list">
            <div className="chat-item chat-item--active">
              {isCollapsed ? (
                <span className="chat-item__icon">R</span>
              ) : (
                <span className="chat-item__title">Revenue for Gujarat</span>
              )}
            </div>
            <div className="chat-item">
              {isCollapsed ? (
                <span className="chat-item__icon">A</span>
              ) : (
                <span className="chat-item__title">August Sales</span>
              )}
            </div>
            <div className="chat-item">
              {isCollapsed ? (
                <span className="chat-item__icon">C</span>
              ) : (
                <span className="chat-item__title">Customer Analysis</span>
              )}
            </div>
            <div className="chat-item">
              {isCollapsed ? (
                <span className="chat-item__icon">M</span>
              ) : (
                <span className="chat-item__title">Monthly Revenue</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar-section sidebar-section--bottom">
          <div className="sidebar-item" onClick={onToggleCollapse}>
            {isCollapsed ? (
              <span className="sidebar-item__icon">→</span>
            ) : (
              <span className="sidebar-item__title">← Collapse</span>
            )}
          </div>
          <div className="sidebar-item">
            {isCollapsed ? (
              <span className="sidebar-item__icon">⚙</span>
            ) : (
              <span className="sidebar-item__title">Settings</span>
            )}
          </div>
          <div className="sidebar-item">
            {isCollapsed ? (
              <div className="avatar avatar-sm">JD</div>
            ) : (
              <div className="sidebar-item__user">
                <div className="avatar avatar-sm">JD</div>
                <span className="sidebar-item__title">John Doe</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
