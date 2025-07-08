"use client";
import { useEffect, useState } from "react";
import { Calendar, Tag } from "lucide-react";
import apiClient from "@/lib/api";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postsData, categoriesData] = await Promise.all([
          apiClient.getBlogPosts(),
          apiClient.getBlogCategories(),
        ]);

        setPosts(postsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error('Error fetching blog data:', err);
        setError('Failed to load blog data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
              <a key={idx} href="#" className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
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