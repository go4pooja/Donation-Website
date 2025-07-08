/*
  # Initial Database Schema for Kautike Charitable Foundation

  1. New Tables
    - `stats` - Impact statistics for homepage and about page
    - `initiatives` - Feeding initiatives and programs
    - `campaigns` - Active donation campaigns
    - `testimonials` - User testimonials and stories
    - `team_members` - Leadership team information
    - `blog_posts` - Blog articles and content
    - `contact_submissions` - Contact form submissions

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access where appropriate
    - Add policies for authenticated admin access for modifications

  3. Initial Data
    - Populate with sample data for immediate functionality
*/

-- Stats table for impact numbers
CREATE TABLE IF NOT EXISTS stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  icon text NOT NULL,
  value text NOT NULL,
  label text NOT NULL,
  page text NOT NULL CHECK (page IN ('homepage', 'about')),
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Initiatives table for programs and services
CREATE TABLE IF NOT EXISTS initiatives (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  impact text DEFAULT '',
  link text DEFAULT '',
  image text DEFAULT '',
  page text NOT NULL CHECK (page IN ('homepage', 'about')),
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Campaigns table for donation drives
CREATE TABLE IF NOT EXISTS campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text DEFAULT '',
  beneficiaries text NOT NULL,
  days_left integer NOT NULL,
  raised decimal(10,2) NOT NULL DEFAULT 0,
  goal decimal(10,2) NOT NULL,
  image text DEFAULT '',
  is_active boolean DEFAULT true,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Testimonials table for user stories
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  story text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_active boolean DEFAULT true,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  description text NOT NULL,
  image text DEFAULT '',
  is_active boolean DEFAULT true,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text DEFAULT '',
  category text NOT NULL,
  date date NOT NULL,
  is_published boolean DEFAULT true,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE initiatives ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can read stats" ON stats FOR SELECT TO anon USING (true);
CREATE POLICY "Public can read initiatives" ON initiatives FOR SELECT TO anon USING (true);
CREATE POLICY "Public can read active campaigns" ON campaigns FOR SELECT TO anon USING (is_active = true);
CREATE POLICY "Public can read active testimonials" ON testimonials FOR SELECT TO anon USING (is_active = true);
CREATE POLICY "Public can read active team members" ON team_members FOR SELECT TO anon USING (is_active = true);
CREATE POLICY "Public can read published blog posts" ON blog_posts FOR SELECT TO anon USING (is_published = true);

-- Policy for contact form submissions
CREATE POLICY "Anyone can insert contact submissions" ON contact_submissions FOR INSERT TO anon WITH CHECK (true);

-- Admin policies (for authenticated users)
CREATE POLICY "Authenticated users can manage stats" ON stats FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated users can manage initiatives" ON initiatives FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated users can manage campaigns" ON campaigns FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated users can manage testimonials" ON testimonials FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated users can manage team members" ON team_members FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated users can manage blog posts" ON blog_posts FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated users can read contact submissions" ON contact_submissions FOR SELECT TO authenticated USING (true);

-- Insert initial data
INSERT INTO stats (icon, value, label, page, order_index) VALUES
('Users', '13.0M+', 'Meals Served', 'homepage', 1),
('Users', '15.0M+', 'Beneficiaries Served', 'homepage', 2),
('School', '1052+', 'Municipal Schools', 'homepage', 3),
('Hospital', '507+', 'Govt Hospitals', 'homepage', 4),
('Users', '13.0M+', 'Meals Served', 'about', 1),
('Users', '15.0M+', 'Beneficiaries Served', 'about', 2),
('School', '1052+', 'Municipal Schools', 'about', 3),
('Hospital', '507+', 'Govt Hospitals', 'about', 4);

INSERT INTO initiatives (title, description, impact, link, page, order_index) VALUES
('Swasthya Ahara', 'Govt. Hospital feeding program in Mumbai to ease food cost and enable better care for patient.', '', '#', 'homepage', 1),
('Bal Shiksha Ahara', 'Municipal School feeding program to support zero-classroom hunger for better attendance & learning outcome.', '', '#', 'homepage', 2),
('Paushtik Ahara', 'Meals on wheels to nourish the underprivileged and enable informal education.', '', '#', 'homepage', 3),
('Swasthya Ahara', 'Our government hospital feeding program in Mumbai aims to ease food costs and enable better care for patients. We understand that when families are dealing with medical expenses, providing nutritious meals becomes a challenge. Our program ensures that patients and their families receive hot, nutritious meals during their hospital stay.', 'Serving 32+ government hospitals across Mumbai', '', 'about', 1),
('Bal Shiksha Ahara', 'Our municipal school feeding program supports zero-classroom hunger for better attendance and learning outcomes. We believe that no child should study on an empty stomach. By providing nutritious mid-day meals, we help improve school attendance and concentration levels.', 'Supporting 1052+ municipal schools', '', 'about', 2),
('Paushtik Ahara', 'Our meals on wheels program nourishes the underprivileged and enables informal education. We reach out to communities that may not have access to regular meals, providing both nutrition and a platform for community engagement and education.', 'Reaching underserved communities across Mumbai', '', 'about', 3);

INSERT INTO campaigns (title, subtitle, beneficiaries, days_left, raised, goal, order_index) VALUES
('Donate on Rath Yatra', 'Share the Gift of Nourishment', '14,949', 12, 373728, 1400000, 1),
('Tata Cancer Care Centre', 'Help Families Endure Their Toughest Battle', '25,267', 3, 631682, 2000000, 2);

INSERT INTO testimonials (name, story, rating, order_index) VALUES
('Parent of Kidney Stone Patient', 'My son is admitted here for kidney stone treatment costing around ₹15,000, which I can''t afford. I borrowed money for treatment, but daily travel from Mankhurd to the hospital is expensive. I can''t travel by train, so I take a bus or autorickshaw, which adds to the cost. I can''t afford restaurant food or go home for lunch, so I skip meals, making me weak.', 5, 1),
('Father of Yash', 'When my wife was admitted to the hospital for the delivery of our second child, I didn''t know what to feed our 9-year-old son, Yash. I can''t cook and can''t afford restaurant food, so we depended on street food like vada pav. I was happy about our second child but worried about Yash''s health due to the unhealthy diet. When I heard about Akshaya Chaitanya''s free lunch service, I was relieved to feed him a good, nutritious lunch.', 5, 2);

INSERT INTO team_members (name, position, description, order_index) VALUES
('Dr. Rajesh Kumar', 'Founder & CEO', 'Leading our mission to eradicate hunger and empower communities through sustainable food programs.', 1),
('Priya Sharma', 'Operations Director', 'Overseeing our kitchen operations and ensuring the highest standards of food safety and quality.', 2),
('Amit Patel', 'Program Manager', 'Managing our feeding initiatives and coordinating with government departments and schools.', 3);

INSERT INTO blog_posts (title, excerpt, category, date, order_index) VALUES
('This Shravan Maas, Let''s Serve with Love — Donate Food, Feed Hope', 'As Shravan Maas approaches, we invite you to transform your devotion into action. This sacred month is a time for spiritual reflection, fasting, and rituals, but it''s also an opportunity to serve the needy.', 'Employee Volunteering', '2025-06-30', 1),
('What Is Pitru Paksha? Meaning, Rituals, and Significance of Shradh (2025)', 'Have you ever lit a diya in memory of a loved one and felt their quiet presence surrounding you? In Indian culture, remembering our ancestors isn''t just a tradition – it''s a sacred expression of love, gratitude, and spiritual connection.', 'Donation & Charity', '2025-05-31', 2),
('Understanding the Meaning of Pind Daan and Why You Should Donate on Pitru Paksha', 'Pitru Paksha is a revered 16-day period in the Hindu calendar, dedicated to honoring our ancestors through rituals, prayers, and offerings. Daan (donation) holds a special place during this time.', 'Donation & Charity', '2025-05-28', 3),
('Kids Birthday Party Celebration Idea more Than Cake and Candles', 'What if, alongside the party hats and presents, your child could also experience the joy of giving? Discover how to add a deeper layer of meaning to your child''s birthday celebration.', 'Donation & Charity', '2025-05-28', 4);