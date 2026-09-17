import React from 'react';
import { useNavigate } from 'react-router-dom';
import useChats from '../hooks/useChats';

const HomePage = () => {
  const navigate = useNavigate();
  const { createChat } = useChats();

  const handleNewChat = async () => {
    const newChat = await createChat('New Chat');
    if (newChat) {
      navigate(`/chat/${newChat.id}`);
    }
  };

  return (
    <div className="home-page">
      <div className="workspace-container">
        <div className="workspace-placeholder">
          <div className="placeholder-content">
            <i className="bi bi-chat-square-text placeholder-icon"></i>
            <h2>Welcome to SQLWhisper</h2>
            <p>Start a new conversation to query your database using natural language.</p>
            <div className="placeholder-actions">
              <button className="btn btn-primary" onClick={handleNewChat}>
                <i className="bi bi-plus-lg"></i>
                <span>New Chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;