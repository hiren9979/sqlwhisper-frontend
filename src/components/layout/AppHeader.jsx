import React from 'react';

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-brand">
          <h1 className="app-title">SQLWhisper</h1>
          <span className="app-subtitle">Text-to-SQL Interface</span>
        </div>
        <div className="header-actions">
          <button className="btn btn-outline btn-sm header-settings-btn">
            <i className="bi bi-gear"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;