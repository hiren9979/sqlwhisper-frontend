import { useState, useEffect, useCallback } from 'react';
import chatService from '../services/chatService';

const useChats = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  // Load chats on mount
  useEffect(() => {
    loadChats();
  }, []);

  // Load chats from service
  const loadChats = useCallback(async () => {
    setLoading(true);
    const allChats = await chatService.getAllChats();
    setChats(allChats);
    setLoading(false);
  }, []);

  // Create new chat
  const createChat = useCallback(async (title) => {
    const newChat = await chatService.createChat(title);
    setChats(prevChats => [newChat, ...prevChats]);
    return newChat;
  }, []);

  // Delete chat
  const deleteChat = useCallback(async (id) => {
    await chatService.deleteChat(id);
    setChats(prevChats => prevChats.filter(chat => chat.id !== id));
  }, []);

  // Archive chat
  const archiveChat = useCallback(async (id) => {
    await chatService.archiveChat(id);
    setChats(prevChats => 
      prevChats.map(chat => 
        chat.id === id ? { ...chat, archived: true } : chat
      )
    );
  }, []);

  // Unarchive chat
  const unarchiveChat = useCallback(async (id) => {
    await chatService.unarchiveChat(id);
    setChats(prevChats => 
      prevChats.map(chat => 
        chat.id === id ? { ...chat, archived: false } : chat
      )
    );
  }, []);

  // Rename chat
  const renameChat = useCallback(async (id, newTitle) => {
    await chatService.renameChat(id, newTitle);
    setChats(prevChats => 
      prevChats.map(chat => 
        chat.id === id ? { ...chat, title: newTitle } : chat
      )
    );
  }, []);

  // Search chats
  const [filteredChats, setFilteredChats] = useState([]);

  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery) {
        const results = await chatService.searchChats(searchQuery);
        setFilteredChats(results);
      } else {
        setFilteredChats(chats.filter(chat => !chat.archived));
      }
    };
    performSearch();
  }, [searchQuery, chats]);

  // Group chats by date
  const groupedChats = chatService.groupChatsByDate(filteredChats);

  // Load selected chat
  useEffect(() => {
    const loadSelectedChat = async () => {
      const selectedId = localStorage.getItem('sqlwhisper_selected_chat');
      if (selectedId) {
        const chat = await chatService.getChatById(selectedId);
        setSelectedChat(chat);
      }
    };
    loadSelectedChat();
  }, [chats]);

  // Select chat
  const selectChat = useCallback(async (id) => {
    chatService.setSelectedChat(id);
    const chat = await chatService.getChatById(id);
    setSelectedChat(chat);
    return chat;
  }, []);

  return {
    chats: filteredChats,
    groupedChats,
    loading,
    searchQuery,
    setSearchQuery,
    createChat,
    deleteChat,
    archiveChat,
    unarchiveChat,
    renameChat,
    selectChat,
    selectedChat,
    refreshChats: loadChats,
  };
};

export default useChats;