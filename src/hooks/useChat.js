import { useState, useEffect, useCallback } from 'react';
import chatService from '../services/chatService';

const useChat = (chatId) => {
  const [chat, setChat] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load chat from service
  const loadChat = useCallback(async (id) => {
    setLoading(true);
    const loadedChat = await chatService.getChatById(id);
    setChat(loadedChat);
    setLoading(false);
  }, []);

  // Load chat when chatId changes
  useEffect(() => {
    if (chatId) {
      loadChat(chatId);
    } else {
      setChat(null);
      setLoading(false);
    }
  }, [chatId, loadChat]);

  // Update chat
  const updateChat = useCallback(async (updates) => {
    if (chat) {
      const updatedChat = await chatService.updateChat(chat.id, updates);
      setChat(updatedChat);
      return updatedChat;
    }
    return null;
  }, [chat]);

  // Add message to chat
  const addMessage = useCallback(async (message) => {
    if (chat) {
      const updatedChat = await chatService.addMessage(chat.id, message);
      setChat(updatedChat);
      return updatedChat;
    }
    return null;
  }, [chat]);

  // Rename chat
  const renameChat = useCallback(async (newTitle) => {
    return updateChat({ title: newTitle });
  }, [updateChat]);

  // Archive chat
  const archiveChat = useCallback(async () => {
    return updateChat({ archived: true });
  }, [updateChat]);

  // Delete chat
  const deleteChat = useCallback(async () => {
    if (chat) {
      await chatService.deleteChat(chat.id);
      setChat(null);
      return true;
    }
    return false;
  }, [chat]);

  // Format timestamp for display
  const formatTimestamp = useCallback((timestamp) => {
    if (!timestamp) return '';
    
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
  }, []);

  return {
    chat,
    loading,
    updateChat,
    addMessage,
    renameChat,
    archiveChat,
    deleteChat,
    formatTimestamp,
    refreshChat: () => loadChat(chatId),
  };
};

export default useChat;