// src/app/page.js
"use client"; 
import { useEffect, useState } from "react";
import { Heart, Users, School, Hospital, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import apiClient from "@/lib/api";

export default function Home() {
  const [total, setTotal] = useState(0);
  const [stats, setStats] = useState([]);
  const [initiatives, setInitiatives] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deadline = new Date("2025-12-31T23:59:59");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [statsData, initiativesData, campaignsData, testimonialsData] = await Promise.all([
          apiClient.getHomepageStats(),
          apiClient.getInitiatives(),
          apiClient.getCampaigns(),
          apiClient.getTestimonials(),
        ]);

        setStats(statsData);
        setInitiatives(initiativesData);
        setCampaigns(campaignsData);
        setTestimonials(testimonialsData);
        
        // Calculate total from campaigns
        const totalRaised = campaignsData.reduce((sum, campaign) => sum + parseFloat(campaign.raised), 0);
        setTotal(totalRaised);
      } catch (err) {
        console.error('Error fetching homepage data:', err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const daysLeft = Math.ceil((deadline - new Date()) / (1000 * 60 * 60 * 24));

  // Icon mapping
  const iconMap = {
    Users,
    School,
    Hospital,
  };

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
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Improving Healthcare through food
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Witness the transformative power of food as we serve hope on the table.
          </p>
          <Link href="/about">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-blue-600 font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At our core, we believe a food-secure society helps unlock its true potential. 
              We are not only nourishing bodies but also opening doors to better education, 
              health and prosperity for fellow citizens.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon] || Users;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feeding Initiatives */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-blue-600 font-bold mb-4">Our Feeding Initiatives</h2>
            <p className="max-w-2xl mx-auto">
              We serve hot, nutritious, locally palatable meals prepared at our very own 
              state-of-the-art FSSAI compliant kitchen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl text-blue-600 font-semibold mb-3">{initiative.title}</h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <a href={initiative.link} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Know More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Campaigns */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-blue-600 font-bold mb-4">Support the cause</h2>
            <p className="text-gray-600">
              Make a difference in someone's life today
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {campaigns.map((campaign, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                  <p className="text-gray-600 mb-4">{campaign.subtitle}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{campaign.beneficiaries} Beneficiaries</span>
                    <span>{campaign.days_left} Days left</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>₹{parseFloat(campaign.raised).toLocaleString()}</span>
                      <span>₹{(campaign.goal / 100000).toFixed(1)}L goal</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Link href="/donate" className="block w-full h-full">
                      Donate
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hear stories of our beloved beneficiaries ❤️</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.story}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Cause</h2>
          <p className="text-xl mb-8">
            Together, we can pave the way for a future where every vulnerable has an equal chance to thrive.
          </p>
          <Link href="/donate">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Donate Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}