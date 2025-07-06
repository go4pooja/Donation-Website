import { Calendar, Tag } from "lucide-react";

const posts = [
  {
    title: "This Shravan Maas, Let's Serve with Love — Donate Food, Feed Hope",
    date: "June 30, 2025",
    category: "Employee Volunteering",
    excerpt: "As Shravan Maas approaches, we invite you to transform your devotion into action. This sacred month is a time for spiritual reflection, fasting, and rituals, but it's also an opportunity to serve the needy.",
    href: "#"
  },
  {
    title: "What Is Pitru Paksha? Meaning, Rituals, and Significance of Shradh (2025)",
    date: "May 31, 2025",
    category: "Donation & Charity",
    excerpt: "Have you ever lit a diya in memory of a loved one and felt their quiet presence surrounding you? In Indian culture, remembering our ancestors isn't just a tradition – it's a sacred expression of love, gratitude, and spiritual connection.",
    href: "#"
  },
  {
    title: "Understanding the Meaning of Pind Daan and Why You Should Donate on Pitru Paksha",
    date: "May 28, 2025",
    category: "Donation & Charity",
    excerpt: "Pitru Paksha is a revered 16-day period in the Hindu calendar, dedicated to honoring our ancestors through rituals, prayers, and offerings. Daan (donation) holds a special place during this time.",
    href: "#"
  },
  {
    title: "Kids Birthday Party Celebration Idea more Than Cake and Candles",
    date: "May 28, 2025",
    category: "Donation & Charity",
    excerpt: "What if, alongside the party hats and presents, your child could also experience the joy of giving? Discover how to add a deeper layer of meaning to your child's birthday celebration.",
    href: "#"
  }
];

const categories = [
  "Employee Volunteering",
  "CSR",
  "Tax saving",
  "Donation & Charity",
  "NGO"
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 mb-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl mb-2 max-w-2xl mx-auto">
            Stories, ideas, and inspiration from Kautike Charitable Foundation.
          </p>
          <p className="text-md text-blue-100">We believe the foundation and credibility of a not-for-profit organisation is built on good governance, integrity, and clear conscience.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        {/* Categories Sidebar */}
        <aside className="lg:w-1/4 mb-8 lg:mb-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center"><Tag className="w-5 h-5 mr-2 text-blue-600" />Categories</h2>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button className="text-gray-700 hover:text-blue-600 text-sm font-medium w-full text-left">
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Blog Posts */}
        <main className="flex-1">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, idx) => (
              <a key={idx} href={post.href} className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-blue-600 font-medium">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <span className="text-blue-600 font-semibold text-sm">Read More →</span>
              </a>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
} 