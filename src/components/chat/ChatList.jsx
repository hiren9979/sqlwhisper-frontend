import React from 'react';
import ChatListItem from './ChatListItem';

const ChatList = ({ groupedChats, selectedChatId, onSelectChat, onRenameChat, onDeleteChat, onArchiveChat }) => {
  if (!groupedChats || Object.keys(groupedChats).length === 0) {
    return (
      <div className="chat-list-empty">
        <p className="text-muted">No conversations yet</p>
      </div>
    );
  }

  return (
    <div className="chat-list">
      {Object.entries(groupedChats).map(([dateGroup, chats]) => (
        <div key={dateGroup} className="chat-date-group">
          <div className="chat-date-header">{dateGroup}</div>
          {chats.map(chat => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              isSelected={selectedChatId === chat.id}
              onSelect={onSelectChat}
              onRename={onRenameChat}
              onDelete={onDeleteChat}
              onArchive={onArchiveChat}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChatList;