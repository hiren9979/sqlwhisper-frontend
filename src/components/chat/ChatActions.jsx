import React, { useState, useEffect } from 'react';

const ChatActions = ({ chat, onRename, onDelete, onArchive, onClose }) => {
  const [isRenaming, setIsRenaming] = useState(false);
  const [newTitle, setNewTitle] = useState(chat.title);

  useEffect(() => {
    setNewTitle(chat.title);
  }, [chat.title]);

  const handleRename = async () => {
    if (newTitle.trim() && newTitle !== chat.title) {
      await onRename(chat.id, newTitle.trim());
    }
    setIsRenaming(false);
    onClose();
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete "${chat.title}"?`)) {
      await onDelete(chat.id);
    }
    onClose();
  };

  const handleArchive = async () => {
    await onArchive(chat.id);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleRename();
    } else if (e.key === 'Escape') {
      setIsRenaming(false);
      setNewTitle(chat.title);
    }
  };

  if (isRenaming) {
    return (
      <div className="chat-actions-rename">
        <input
          type="text"
          className="form-control form-control-sm"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          onClick={(e) => e.stopPropagation()}
        />
        <div className="rename-actions">
          <button 
            className="btn btn-xs btn-primary" 
            onClick={handleRename}
          >
            Save
          </button>
          <button 
            className="btn btn-xs btn-secondary" 
            onClick={() => {
              setIsRenaming(false);
              setNewTitle(chat.title);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-actions-menu">
      <button 
        className="btn btn-xs btn-link action-btn"
        onClick={(e) => {
          e.stopPropagation();
          setIsRenaming(true);
        }}
        title="Rename"
      >
        <i className="bi bi-pencil"></i>
      </button>
      <button 
        className="btn btn-xs btn-link action-btn"
        onClick={handleArchive}
        title="Archive"
      >
        <i className="bi bi-archive"></i>
      </button>
      <button 
        className="btn btn-xs btn-link action-btn text-danger"
        onClick={handleDelete}
        title="Delete"
      >
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
};

export default ChatActions;