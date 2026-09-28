import React from 'react';

const Home = () => {
  return (
    <div className="chat-container">
      <div className="empty-state">
        <div className="empty-state-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <h2 className="empty-state-title">Start a conversation</h2>
        <p className="empty-state-description">
          Ask questions about your data using natural language
        </p>
      </div>
    </div>
  );
};

export default Home;