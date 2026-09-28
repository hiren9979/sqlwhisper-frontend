import React from 'react';

const Sidebar = () => {
  const chatHistory = [
    { id: 1, name: 'Revenue Analysis', date: 'Today' },
    { id: 2, name: 'Sales Trends', date: 'Yesterday' },
    { id: 3, name: 'Customer Segments', date: '2 days ago' },
  ];

  return (
    <aside className="app-sidebar">
      <button className="new-chat-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <span>New Chat</span>
      </button>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Chats</h3>
        <ul className="chat-list">
          {chatHistory.map((chat) => (
            <li key={chat.id} className="chat-item">
              <button className="chat-button">
                <span className="chat-name">{chat.name}</span>
                <span className="chat-date">{chat.date}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;