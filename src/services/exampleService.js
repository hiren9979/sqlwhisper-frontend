import api from './api';

// Example service methods - replace with your actual API endpoints
export const exampleService = {
  // GET request example
  getData: async () => {
    const response = await api.get('/api/example');
    return response.data;
  },

  // POST request example
  postData: async (data) => {
    const response = await api.post('/api/example', data);
    return response.data;
  },

  // PUT request example
  updateData: async (id, data) => {
    const response = await api.put(`/api/example/${id}`, data);
    return response.data;
  },

  // DELETE request example
  deleteData: async (id) => {
    const response = await api.delete(`/api/example/${id}`);
    return response.data;
  },
};

export default exampleService;