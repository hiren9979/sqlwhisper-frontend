import React from 'react';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <button className="menu-toggle" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <span className="brand-name">SQL Whisper</span>
      </div>
      <div className="header-right">
        <div className="user-avatar" aria-label="User menu">
          <span className="user-initials">H</span>
        </div>
      </div>
    </header>
  );
};

export default Header;