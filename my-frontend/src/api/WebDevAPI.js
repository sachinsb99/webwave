// api/WebDevAPI.js - Single page for all Web Development related APIs

class WebDevAPI {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  // Get CSRF token for Laravel
  async getCSRFToken() {
    try {
      const response = await fetch(`${this.baseURL}/csrf-cookie`, {
        method: 'GET',
        credentials: 'include'
      });
      return response;
    } catch (error) {
      console.error('CSRF token fetch failed:', error);
    }
  }

  // Generic API request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
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
      return this.handleResponse(response);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Handle API responses
  async handleResponse(response) {
    const data = await response.json();
    
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
    console.error('API Error:', error);
    return {
      status: 500,
      message: 'Network error or server unavailable',
      errors: {},
      data: null
    };
  }

  // ==================== WEB DEVELOPMENT APIs ====================

  // 1. Submit Lead/Contact Form
  async submitLead(formData) {
    return this.request('/web-dev/leads', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // 2. Get all leads (admin)
  async getLeads(page = 1, limit = 10, filters = {}) {
    const queryParams = new URLSearchParams({
      page,
      limit,
      ...filters
    });
    
    return this.request(`/web-dev/leads?${queryParams}`);
  }

  // 3. Get single lead details
  async getLead(id) {
    return this.request(`/web-dev/leads/${id}`);
  }

  // 4. Update lead status
  async updateLeadStatus(id, status, notes = '') {
    return this.request(`/web-dev/leads/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, notes }),
    });
  }

  // 5. Delete lead
  async deleteLead(id) {
    return this.request(`/web-dev/leads/${id}`, {
      method: 'DELETE',
    });
  }

  // 6. Get project portfolio
  async getPortfolio(category = 'all', limit = 12) {
    const queryParams = new URLSearchParams({
      category,
      limit
    });
    
    return this.request(`/web-dev/portfolio?${queryParams}`);
  }

  // 7. Get project details
  async getProjectDetails(id) {
    return this.request(`/web-dev/portfolio/${id}`);
  }

  // 8. Submit project inquiry
  async submitProjectInquiry(projectId, inquiryData) {
    return this.request(`/web-dev/portfolio/${projectId}/inquire`, {
      method: 'POST',
      body: JSON.stringify(inquiryData),
    });
  }

  // 9. Get pricing packages
  async getPricingPackages() {
    return this.request('/web-dev/pricing');
  }

  // 10. Request custom quote
  async requestCustomQuote(quoteData) {
    return this.request('/web-dev/quotes', {
      method: 'POST',
      body: JSON.stringify(quoteData),
    });
  }

  // 11. File upload for project requirements
  async uploadFile(file, type = 'requirement') {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    return this.request('/web-dev/upload', {
      method: 'POST',
      body: formData,
      headers: {
        // Don't set Content-Type for FormData
        'Accept': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
      }
    });
  }

  // 12. Get service categories
  async getServiceCategories() {
    return this.request('/web-dev/services');
  }

  // 13. Subscribe to newsletter
  async subscribeNewsletter(email, name = '') {
    return this.request('/web-dev/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email, name }),
    });
  }

  // 14. Submit testimonial/review
  async submitTestimonial(testimonialData) {
    return this.request('/web-dev/testimonials', {
      method: 'POST',
      body: JSON.stringify(testimonialData),
    });
  }

  // 15. Get testimonials
  async getTestimonials(limit = 10, featured = false) {
    const queryParams = new URLSearchParams({
      limit,
      featured: featured ? '1' : '0'
    });
    
    return this.request(`/web-dev/testimonials?${queryParams}`);
  }

  // 16. Schedule consultation
  async scheduleConsultation(consultationData) {
    return this.request('/web-dev/consultation', {
      method: 'POST',
      body: JSON.stringify(consultationData),
    });
  }

  // 17. Get available consultation slots
  async getConsultationSlots(date) {
    return this.request(`/web-dev/consultation/slots?date=${date}`);
  }

  // 18. Contact form submission
  async submitContactForm(contactData) {
    return this.request('/web-dev/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  // 19. Get FAQ items
  async getFAQs(category = 'general') {
    return this.request(`/web-dev/faqs?category=${category}`);
  }

  // 20. Submit FAQ question
  async submitFAQQuestion(question, email, name) {
    return this.request('/web-dev/faqs/ask', {
      method: 'POST',
      body: JSON.stringify({ question, email, name }),
    });
  }

  // ==================== ANALYTICS & TRACKING ====================

  // Track form events
  async trackEvent(eventName, eventData) {
    return this.request('/web-dev/analytics/track', {
      method: 'POST',
      body: JSON.stringify({
        event: eventName,
        data: eventData,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        referrer: document.referrer
      }),
    });
  }

  // ==================== UTILITY METHODS ====================

  // Check if API is healthy
  async healthCheck() {
    return this.request('/health');
  }

  // Get system status
  async getSystemStatus() {
    return this.request('/web-dev/status');
  }
}

// Create singleton instance
const webDevAPI = new WebDevAPI();

// Export both class and instance
export { WebDevAPI, webDevAPI as default };

// ==================== USAGE EXAMPLES ====================

/*
// Import in your React component:
import webDevAPI from './api/WebDevAPI';

// Usage examples:

// 1. Submit lead form
try {
  const response = await webDevAPI.submitLead({
    name: 'John Doe',
    email: 'john@example.com',
    mobile: '+1234567890',
    projectType: 'website',
    budget: '$5,000 - $10,000'
  });
  console.log('Lead submitted:', response);
} catch (error) {
  console.error('Error:', error.message);
}

// 2. Upload file
try {
  const fileResponse = await webDevAPI.uploadFile(selectedFile, 'requirement');
  console.log('File uploaded:', fileResponse);
} catch (error) {
  console.error('Upload error:', error.message);
}

// 3. Track events
webDevAPI.trackEvent('popup_opened', {
  popup_type: 'web_dev_service',
  user_agent: navigator.userAgent
});

// 4. Get portfolio
const portfolio = await webDevAPI.getPortfolio('website', 6);

// 5. Schedule consultation
const consultation = await webDevAPI.scheduleConsultation({
  name: 'Jane Doe',
  email: 'jane@example.com',
  date: '2024-03-15',
  time: '10:00',
  timezone: 'America/New_York'
});
*/