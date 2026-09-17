import React from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarSection from './SidebarSection';
import NewChatButton from '../chat/NewChatButton';
import ChatList from '../chat/ChatList';
import useChats from '../../hooks/useChats';

const AppSidebar = () => {
  const navigate = useNavigate();
  const {
    groupedChats,
    selectedChat,
    createChat,
    deleteChat,
    archiveChat,
    renameChat,
    selectChat,
    loading,
  } = useChats();

  const handleNewChat = async () => {
    const newChat = await createChat('New Chat');
    if (newChat) {
      navigate(`/chat/${newChat.id}`);
    }
  };

  const handleSelectChat = async (chatId) => {
    await selectChat(chatId);
    navigate(`/chat/${chatId}`);
  };

  const handleRenameChat = async (chatId, newTitle) => {
    await renameChat(chatId, newTitle);
  };

  const handleDeleteChat = async (chatId) => {
    await deleteChat(chatId);
    if (selectedChat?.id === chatId) {
      navigate('/');
    }
  };

  const handleArchiveChat = async (chatId) => {
    await archiveChat(chatId);
    if (selectedChat?.id === chatId) {
      navigate('/');
    }
  };

  return (
    <aside className="app-sidebar">
      {/* New Chat Section */}
      <div className="sidebar-new-chat">
        <NewChatButton onClick={handleNewChat} disabled={loading} />
      </div>

      {/* Chat History Section */}
      <SidebarSection 
        title="Chat History" 
        icon="bi-chat-left-text"
      >
        <ChatList
          groupedChats={groupedChats}
          selectedChatId={selectedChat?.id}
          onSelectChat={handleSelectChat}
          onRenameChat={handleRenameChat}
          onDeleteChat={handleDeleteChat}
          onArchiveChat={handleArchiveChat}
        />
      </SidebarSection>

      {/* Data Source Section */}
      <SidebarSection 
        title="Data Sources" 
        icon="bi-database"
        actionButton={
          <button className="btn btn-outline btn-xs">
            <i className="bi bi-plus"></i>
          </button>
        }
      >
        <div className="data-source-list">
          <div className="data-source-item">
            <i className="bi bi-database-fill"></i>
            <span>Production DB</span>
            <span className="badge badge-success">Connected</span>
          </div>
          <div className="data-source-item data-source-placeholder">
            <i className="bi bi-database"></i>
            <span>Add data source...</span>
          </div>
        </div>
      </SidebarSection>

      {/* Navigation Section */}
      <div className="sidebar-navigation">
        <div className="nav-item">
          <i className="bi bi-table"></i>
          <span>Database Explorer</span>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;