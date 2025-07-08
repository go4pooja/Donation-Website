import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database service functions
export const supabaseService = {
  // Homepage data
  async getHomepageStats() {
    const { data, error } = await supabase
      .from('stats')
      .select('icon, value, label')
      .eq('page', 'homepage')
      .order('order_index')
    
    if (error) throw error
    return data
  },

  async getInitiatives() {
    const { data, error } = await supabase
      .from('initiatives')
      .select('title, description, impact, link, image')
      .eq('page', 'homepage')
      .order('order_index')
    
    if (error) throw error
    return data
  },

  async getCampaigns() {
    const { data, error } = await supabase
      .from('campaigns')
      .select('title, subtitle, beneficiaries, days_left, raised, goal, image')
      .eq('is_active', true)
      .order('order_index')
    
    if (error) throw error
    return data
  },

  async getTestimonials() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('name, story, rating')
      .eq('is_active', true)
      .order('order_index')
    
    if (error) throw error
    return data
  },

  // About page data
  async getAboutStats() {
    const { data, error } = await supabase
      .from('stats')
      .select('icon, value, label')
      .eq('page', 'about')
      .order('order_index')
    
    if (error) throw error
    return data
  },

  async getAboutInitiatives() {
    const { data, error } = await supabase
      .from('initiatives')
      .select('title, description, impact, link, image')
      .eq('page', 'about')
      .order('order_index')
    
    if (error) throw error
    return data
  },

  async getTeamMembers() {
    const { data, error } = await supabase
      .from('team_members')
      .select('name, position, description, image')
      .eq('is_active', true)
      .order('order_index')
    
    if (error) throw error
    return data
  },

  // Blog data
  async getBlogPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('title, excerpt, category, date')
      .eq('is_published', true)
      .order('date', { ascending: false })
      .order('order_index')
    
    if (error) throw error
    return data
  },

  async getBlogCategories() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('category')
      .eq('is_published', true)
    
    if (error) throw error
    
    // Extract unique categories
    const categories = [...new Set(data.map(post => post.category))]
    return categories
  },

  // Contact form
  async submitContactForm(formData) {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([formData])
      .select()
    
    if (error) throw error
    return data
  }
}