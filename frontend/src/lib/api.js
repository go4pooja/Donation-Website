// API configuration and helper functions
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Homepage API calls
  async getHomepageStats() {
    return this.request('/homepage/stats/');
  }

  async getInitiatives() {
    return this.request('/homepage/initiatives/');
  }

  async getCampaigns() {
    return this.request('/homepage/campaigns/');
  }

  async getTestimonials() {
    return this.request('/homepage/testimonials/');
  }

  // About page API calls
  async getAboutStats() {
    return this.request('/about/stats/');
  }

  async getAboutInitiatives() {
    return this.request('/about/initiatives/');
  }

  async getTeamMembers() {
    return this.request('/about/team/');
  }

  // Blog API calls
  async getBlogPosts() {
    return this.request('/blog/posts/');
  }

  async getBlogCategories() {
    return this.request('/blog/categories/');
  }

  // Contact API calls
  async submitContactForm(formData) {
    return this.request('/contact/submit/', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }
}

// Create and export a singleton instance
const apiClient = new ApiClient();
export default apiClient;

// Export individual functions for convenience
export const {
  getHomepageStats,
  getInitiatives,
  getCampaigns,
  getTestimonials,
  getAboutStats,
  getAboutInitiatives,
  getTeamMembers,
  getBlogPosts,
  getBlogCategories,
  submitContactForm,
} = apiClient;