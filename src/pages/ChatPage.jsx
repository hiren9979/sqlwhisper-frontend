import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useChat from '../hooks/useChat';

const ChatPage = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const { chat, loading, addMessage } = useChat(chatId);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat?.messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const userMessage = inputValue.trim();
    setInputValue('');

    try {
      // Add user message
      await addMessage({
        role: 'user',
        content: userMessage,
      });

      // TODO: Add API call to get AI response
      // For now, simulate a response
      setTimeout(async () => {
        await addMessage({
          role: 'assistant',
          content: `I received your message: "${userMessage}". This is a placeholder response. When the backend is integrated, this will be replaced with actual AI responses.`,
        });
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto-resize textarea
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  if (loading) {
    return (
      <div className="chat-page-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!chat) {
    return (
      <div className="chat-page-not-found">
        <div className="placeholder-content">
          <i className="bi bi-chat-square-text placeholder-icon"></i>
          <h2>Chat not found</h2>
          <p>The conversation you're looking for doesn't exist or has been deleted.</p>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/')}
          >
            <i className="bi bi-house"></i>
            <span>Go to Home</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-page">
      <div className="chat-header">
        <h1 className="chat-title">{chat.title}</h1>
        <div className="chat-meta">
          <span className="chat-date">
            Created {new Date(chat.createdAt).toLocaleDateString()}
          </span>
          {chat.messages.length > 0 && (
            <span className="chat-messages-count">
              {chat.messages.length} messages
            </span>
          )}
        </div>
      </div>
      
      <div className="chat-content">
        {chat.messages.length === 0 ? (
          <div className="chat-empty-state">
            <div className="placeholder-content">
              <i className="bi bi-chat-dots placeholder-icon"></i>
              <h2>Start a conversation</h2>
              <p>Ask a question about your database using natural language.</p>
            </div>
          </div>
        ) : (
          <div className="chat-messages">
            {chat.messages.map((message) => (
              <div key={message.id} className={`chat-message ${message.role}`}>
                <div className="message-content">
                  {message.content}
                </div>
                <div className="message-timestamp">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="chat-input-container">
        <form onSubmit={handleSubmit} className="chat-input-form">
          <div className="chat-input-wrapper">
            <textarea
              ref={inputRef}
              className="chat-input"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question about your database..."
              rows={1}
              disabled={isSubmitting}
            />
            <button 
              type="submit" 
              className="chat-send-button"
              disabled={!inputValue.trim() || isSubmitting}
            >
              {isSubmitting ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Sending...</span>
                </div>
              ) : (
                <i className="bi bi-send"></i>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;