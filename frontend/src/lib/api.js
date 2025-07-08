// Updated API client to use Supabase instead of Django backend
import { supabaseService } from './supabase'

class ApiClient {
  // Homepage API calls
  async getHomepageStats() {
    return supabaseService.getHomepageStats()
  }

  async getInitiatives() {
    return supabaseService.getInitiatives()
  }

  async getCampaigns() {
    return supabaseService.getCampaigns()
  }

  async getTestimonials() {
    return supabaseService.getTestimonials()
  }

  // About page API calls
  async getAboutStats() {
    return supabaseService.getAboutStats()
  }

  async getAboutInitiatives() {
    return supabaseService.getAboutInitiatives()
  }

  async getTeamMembers() {
    return supabaseService.getTeamMembers()
  }

  // Blog API calls
  async getBlogPosts() {
    return supabaseService.getBlogPosts()
  }

  async getBlogCategories() {
    return supabaseService.getBlogCategories()
  }

  // Contact API calls
  async submitContactForm(formData) {
    return supabaseService.submitContactForm(formData)
  }
}

// Create and export a singleton instance
const apiClient = new ApiClient()
export default apiClient

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
} = apiClient