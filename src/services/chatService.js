import api from './api';

const CHAT_STORAGE_KEY = 'sqlwhisper_chats';
const SELECTED_CHAT_KEY = 'sqlwhisper_selected_chat';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Local storage helpers
const getChatsFromStorage = () => {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading chats from storage:', error);
    return [];
  }
};

const saveChatsToStorage = (chats) => {
  try {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chats));
  } catch (error) {
    console.error('Error saving chats to storage:', error);
  }
};

const getSelectedChatFromStorage = () => {
  try {
    return localStorage.getItem(SELECTED_CHAT_KEY);
  } catch (error) {
    console.error('Error reading selected chat from storage:', error);
    return null;
  }
};

const saveSelectedChatToStorage = (chatId) => {
  try {
    localStorage.setItem(SELECTED_CHAT_KEY, chatId);
  } catch (error) {
    console.error('Error saving selected chat to storage:', error);
  }
};

// Generate unique ID
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Chat service methods
const chatService = {
  // Get all chats
  // TODO: Replace with: return api.get('/chats')
  getAllChats: async () => {
    const chats = getChatsFromStorage();
    return chats;
  },

  // Get chat by ID
  // TODO: Replace with: return api.get(`/chats/${id}`)
  getChatById: async (id) => {
    const chats = getChatsFromStorage();
    return chats.find(chat => chat.id === id) || null;
  },

  // Create new chat
  // TODO: Replace with: return api.post('/chats', { title })
  createChat: async (title = 'New Chat') => {
    const chats = getChatsFromStorage();
    const newChat = {
      id: generateId(),
      title,
      messages: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      archived: false,
    };
    chats.unshift(newChat);
    saveChatsToStorage(chats);
    saveSelectedChatToStorage(newChat.id);
    return newChat;
  },

  // Update chat
  // TODO: Replace with: return api.put(`/chats/${id}`, updates)
  updateChat: async (id, updates) => {
    const chats = getChatsFromStorage();
    const index = chats.findIndex(chat => chat.id === id);
    if (index !== -1) {
      chats[index] = {
        ...chats[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      saveChatsToStorage(chats);
      return chats[index];
    }
    return null;
  },

  // Delete chat
  // TODO: Replace with: return api.delete(`/chats/${id}`)
  deleteChat: async (id) => {
    const chats = getChatsFromStorage();
    const filtered = chats.filter(chat => chat.id !== id);
    saveChatsToStorage(filtered);
    const selectedChat = getSelectedChatFromStorage();
    if (selectedChat === id) {
      localStorage.removeItem(SELECTED_CHAT_KEY);
    }
    return true;
  },

  // Archive chat
  archiveChat: async (id) => {
    return chatService.updateChat(id, { archived: true });
  },

  // Unarchive chat
  unarchiveChat: async (id) => {
    return chatService.updateChat(id, { archived: false });
  },

  // Rename chat
  renameChat: async (id, newTitle) => {
    return chatService.updateChat(id, { title: newTitle });
  },

  // Get selected chat
  getSelectedChat: async () => {
    const selectedId = getSelectedChatFromStorage();
    if (selectedId) {
      return chatService.getChatById(selectedId);
    }
    return null;
  },

  // Set selected chat
  setSelectedChat: (id) => {
    saveSelectedChatToStorage(id);
    return chatService.getChatById(id);
  },

  // Search chats
  // TODO: Replace with: return api.get(`/chats/search?q=${query}`)
  searchChats: async (query) => {
    const chats = getChatsFromStorage();
    const lowerQuery = query.toLowerCase();
    return chats.filter(chat => 
      chat.title.toLowerCase().includes(lowerQuery) ||
      chat.messages.some(msg => 
        msg.content.toLowerCase().includes(lowerQuery)
      )
    );
  },

  // Group chats by date (client-side operation)
  groupChatsByDate: (chats = null) => {
    const chatsToGroup = chats || getChatsFromStorage();
    const groups = {};
    
    chatsToGroup.forEach(chat => {
      const date = new Date(chat.createdAt);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      let groupKey;
      if (date.toDateString() === today.toDateString()) {
        groupKey = 'Today';
      } else if (date.toDateString() === yesterday.toDateString()) {
        groupKey = 'Yesterday';
      } else if (date.getFullYear() === today.getFullYear()) {
        groupKey = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
      } else {
        groupKey = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      }
      
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(chat);
    });
    
    return groups;
  },

  // Add message to chat
  // TODO: Replace with: return api.post(`/chats/${chatId}/messages`, message)
  addMessage: async (chatId, message) => {
    const chats = getChatsFromStorage();
    const chatIndex = chats.findIndex(chat => chat.id === chatId);
    if (chatIndex !== -1) {
      chats[chatIndex].messages.push({
        id: generateId(),
        ...message,
        timestamp: new Date().toISOString(),
      });
      chats[chatIndex].updatedAt = new Date().toISOString();
      saveChatsToStorage(chats);
      return chats[chatIndex];
    }
    return null;
  },

  // Clear all chats (for testing)
  clearAllChats: () => {
    localStorage.removeItem(CHAT_STORAGE_KEY);
    localStorage.removeItem(SELECTED_CHAT_KEY);
    return true;
  },
};

export default chatService;