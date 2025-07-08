# Kautike Charitable Foundation - Supabase Setup

This project now uses Supabase as the backend instead of Django, making it much simpler to set up and deploy.

## Quick Setup Steps

### 1. Set up Supabase Project

1. Go to [Supabase](https://supabase.com) and create a new project
2. Wait for the project to be ready (usually takes 2-3 minutes)
3. Go to Settings > API to get your project URL and anon key

### 2. Configure Environment Variables

Update `frontend/.env.local` with your Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Razorpay Configuration (keep existing)
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id_here
```

### 3. Set up Database Schema

1. In your Supabase dashboard, go to the SQL Editor
2. Copy and paste the entire content from `supabase/migrations/create_initial_schema.sql`
3. Run the SQL script - this will create all tables, policies, and insert sample data

### 4. Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

Your application will be running at `http://localhost:3000` with all data coming from Supabase!

## What's Included

### Database Tables:
- **stats** - Impact statistics for homepage and about page
- **initiatives** - Feeding initiatives and programs  
- **campaigns** - Active donation campaigns
- **testimonials** - User testimonials and stories
- **team_members** - Leadership team information
- **blog_posts** - Blog articles and content
- **contact_submissions** - Contact form submissions

### Features:
- ✅ Public read access to all content
- ✅ Row Level Security (RLS) enabled
- ✅ Contact form submissions work
- ✅ Sample data pre-populated
- ✅ Admin access for authenticated users
- ✅ Optimized queries with proper indexing

### Pages Working:
- ✅ Homepage with stats, initiatives, campaigns, testimonials
- ✅ About page with team, initiatives, stats
- ✅ Blog page with posts and categories
- ✅ Contact page with working form
- ✅ Donate page with Razorpay integration

## Benefits of Supabase vs Django:

1. **No Backend Server** - No need to run Django server locally
2. **Real-time Updates** - Built-in real-time subscriptions
3. **Authentication** - Built-in auth system
4. **Auto-scaling** - Handles traffic automatically
5. **Easy Deployment** - Frontend can be deployed anywhere
6. **Built-in Admin** - Use Supabase dashboard to manage data
7. **API Auto-generated** - REST and GraphQL APIs automatically created

## Managing Content

Use the Supabase dashboard to:
- Add/edit blog posts
- Update campaign information
- Manage team members
- View contact form submissions
- Update statistics and initiatives

## Deployment

Since there's no backend server, you can deploy the frontend to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

Just make sure to add your environment variables to your deployment platform.

## Development

The frontend automatically connects to Supabase and all the existing API calls in your components will work without any changes!