// services/webDevService.js
import ApiService from './api';

export const webDevService = {
  submitLead: async (formData) => {
    return ApiService.request('/web-dev/leads', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  getProjects: async () => {
    return ApiService.request('/web-dev/projects');
  },

  uploadFile: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    return ApiService.request('/web-dev/upload', {
      method: 'POST',
      body: formData,
      headers: {} // Remove Content-Type for FormData
    });
  }
};