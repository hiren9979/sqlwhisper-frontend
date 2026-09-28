import React from 'react';

const NewChatButton = ({ onClick, disabled = false }) => {
  return (
    <button 
      className="btn btn-primary btn-new-chat"
      onClick={onClick}
      disabled={disabled}
    >
      <i className="bi bi-plus-lg"></i>
      <span>New Chat</span>
    </button>
  );
};

export default NewChatButton;