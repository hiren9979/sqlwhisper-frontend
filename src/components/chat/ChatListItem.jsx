import React, { useState } from 'react';
import ChatActions from './ChatActions';

const ChatListItem = ({ chat, isSelected, onSelect, onRename, onDelete, onArchive }) => {
  const [showActions, setShowActions] = useState(false);

  const handleClick = async () => {
    if (!showActions) {
      await onSelect(chat.id);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div 
      className={`chat-item ${isSelected ? 'chat-item-selected' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="chat-item-content">
        <div className="chat-item-title">{chat.title}</div>
        <div className="chat-item-time">{formatDate(chat.updatedAt)}</div>
      </div>
      {showActions && (
        <ChatActions
          chat={chat}
          onRename={onRename}
          onDelete={onDelete}
          onArchive={onArchive}
          onClose={() => setShowActions(false)}
        />
      )}
    </div>
  );
};

export default ChatListItem;