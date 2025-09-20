// api/api.js - Single page for all Web Development related APIs

class API {
  constructor() {
    // Use environment variables for API configuration
    this.baseURL = process.env.REACT_APP_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    
    // Debug mode from environment
    this.debug = process.env.REACT_APP_DEBUG === 'true' || process.env.NODE_ENV === 'development';
  }

  // Log API calls in debug mode
  log(message, data = null) {
    if (this.debug) {
      console.log(`[API] ${message}`, data);
    }
  }

  // Get CSRF token for Laravel
  async getCSRFToken() {
    try {
      this.log('Fetching CSRF token...');
      const response = await fetch(`${this.baseURL.replace('/api', '')}/sanctum/csrf-cookie`, {
        method: 'GET',
        credentials: 'include'
      });
      this.log('CSRF token fetched', { status: response.status });
      return response;
    } catch (error) {
      this.log('CSRF token fetch failed', error);
      console.error('CSRF token fetch failed:', error);
    }
  }

  // Generic API request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    this.log(`Making request to: ${url}`, options);
    
    // Add CSRF token if available
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (csrfToken) {
      this.headers['X-CSRF-TOKEN'] = csrfToken;
    }

    const config = {
      headers: this.headers,
      credentials: 'include', // For Laravel Sanctum
      ...options,
    };

    try {
      const response = await fetch(url, config);
      this.log(`Response received:`, { 
        url, 
        status: response.status, 
        statusText: response.statusText 
      });
      
      return this.handleResponse(response);
    } catch (error) {
      this.log('Request failed:', error);
      throw this.handleError(error);
    }
  }

  // Handle API responses
  async handleResponse(response) {
    let data;
    
    try {
      data = await response.json();
    } catch (e) {
      // Handle non-JSON responses
      data = { message: 'Invalid response format' };
    }
    
    this.log(`Response data:`, data);
    
    if (!response.ok) {
      throw {
        status: response.status,
        message: data.message || 'An error occurred',
        errors: data.errors || {},
        data: data
      };
    }
    
    return data;
  }

  // Handle API errors
  handleError(error) {
    this.log('API Error:', error);
    console.error('API Error:', error);
    
    return {
      status: 500,
      message: 'Network error or server unavailable',
      errors: {},
      data: null
    };
  }

  // ==================== LEAD MANAGEMENT APIs ====================

  // 1. Submit Lead/Contact Form
  async submitLead(formData) {
    this.log('Submitting lead:', formData);
    
    return this.request('/web-dev/leads', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // 2. Get all leads (admin)
  async getLeads(page = 1, limit = 10, filters = {}) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== '' && value !== null && value !== undefined)
      )
    });
    
    this.log('Fetching leads with params:', { page, limit, filters });
    
    return this.request(`/web-dev/leads?${queryParams}`);
  }

  // 3. Get single lead details
  async getLead(id) {
    this.log('Fetching lead:', id);
    
    return this.request(`/web-dev/leads/${id}`);
  }

  // 4. Update lead status
  async updateLeadStatus(id, status, notes = '') {
    this.log('Updating lead status:', { id, status, notes });
    
    return this.request(`/web-dev/leads/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, notes }),
    });
  }

  // 5. Delete lead
  async deleteLead(id) {
    this.log('Deleting lead:', id);
    
    return this.request(`/web-dev/leads/${id}`, {
      method: 'DELETE',
    });
  }

  // ==================== CONTACT FORM APIs ====================

  // 1. Submit Contact Form
  async submitContact(formData) {
    this.log('Submitting contact message:', formData);
    
    return this.request('/contacts', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // 2. Get all contact messages (admin)
  async getContacts(page = 1, limit = 10, filters = {}) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== '' && value !== null && value !== undefined)
      )
    });
    
    this.log('Fetching contacts with params:', { page, limit, filters });
    
    return this.request(`/contacts?${queryParams}`);
  }

  // 3. Get single contact message
  async getContact(id) {
    this.log('Fetching contact:', id);
    
    return this.request(`/contacts/${id}`);
  }

  // 4. Update contact status
  async updateContactStatus(id, status, adminNotes = '') {
    this.log('Updating contact status:', { id, status, adminNotes });
    
    return this.request(`/contacts/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, admin_notes: adminNotes }),
    });
  }

  // 5. Delete contact message
  async deleteContact(id) {
    this.log('Deleting contact:', id);
    
    return this.request(`/contacts/${id}`, {
      method: 'DELETE',
    });
  }

  // ==================== NEWSLETTER APIs ====================

  // 1. Subscribe to newsletter
  async subscribeNewsletter(formData) {
    this.log('Subscribing to newsletter:', formData);
    
    return this.request('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // 2. Unsubscribe from newsletter
  async unsubscribeNewsletter(token) {
    this.log('Unsubscribing from newsletter:', token);
    
    return this.request(`/newsletter/unsubscribe/${token}`, {
      method: 'POST',
    });
  }

  // 3. Get all newsletter subscriptions (admin)
  async getNewsletterSubscriptions(page = 1, limit = 10, filters = {}) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== '' && value !== null && value !== undefined)
      )
    });
    
    this.log('Fetching newsletter subscriptions with params:', { page, limit, filters });
    
    return this.request(`/newsletter/subscriptions?${queryParams}`);
  }

  // 4. Get single newsletter subscription
  async getNewsletterSubscription(id) {
    this.log('Fetching newsletter subscription:', id);
    
    return this.request(`/newsletter/subscriptions/${id}`);
  }

  // 5. Update newsletter subscription status
  async updateNewsletterSubscriptionStatus(id, status) {
    this.log('Updating newsletter subscription status:', { id, status });
    
    return this.request(`/newsletter/subscriptions/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  // 6. Delete newsletter subscription
  async deleteNewsletterSubscription(id) {
    this.log('Deleting newsletter subscription:', id);
    
    return this.request(`/newsletter/subscriptions/${id}`, {
      method: 'DELETE',
    });
  }

  // 7. Get newsletter statistics (admin)
  async getNewsletterStats() {
    this.log('Fetching newsletter statistics');
    
    return this.request('/newsletter/stats');
  }

  // ==================== UTILITY METHODS ====================

  // Test API connection
  async testConnection() {
    try {
      this.log('Testing API connection...');
      // You can create a simple health check endpoint
      const response = await this.request('/health');
      this.log('Connection test successful:', response);
      return { success: true, data: response };
    } catch (error) {
      this.log('Connection test failed:', error);
      return { success: false, error };
    }
  }

  // Get API configuration info
  getConfig() {
    return {
      baseURL: this.baseURL,
      debug: this.debug,
      headers: this.headers
    };
  }
}

// Create singleton instance
const webDevAPI = new API();

// Export both the class and instance for flexibility
export { API };
export default webDevAPI;