// src/app/page.js
"use client"; 
import { useEffect, useState } from "react";
import { Heart, Users, School, Hospital, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [total, setTotal] = useState(0);
  const deadline = new Date("2025-12-31T23:59:59");

  // TODO: fetch total from API
  useEffect(() => {
    // Simulate API call
    setTotal(373728);
  }, []);

  const daysLeft = Math.ceil((deadline - new Date()) / (1000 * 60 * 60 * 24));

  const stats = [
    { icon: Users, value: "13.0M+", label: "Meals Served" },
    { icon: Users, value: "15.0M+", label: "Beneficiaries Served" },
    { icon: School, value: "1052+", label: "Municipal Schools" },
    { icon: Hospital, value: "507+", label: "Govt Hospitals" },
  ];

  const initiatives = [
    {
      title: "Swasthya Ahara",
      description: "Govt. Hospital feeding program in Mumbai to ease food cost and enable better care for patient.",
      link: "#"
    },
    {
      title: "Bal Shiksha Ahara",
      description: "Municipal School feeding program to support zero-classroom hunger for better attendance & learning outcome.",
      link: "#"
    },
    {
      title: "Paushtik Ahara",
      description: "Meals on wheels to nourish the underprivileged and enable informal education.",
      link: "#"
    }
  ];

  const campaigns = [
    {
      title: "Donate on Rath Yatra",
      subtitle: "Share the Gift of Nourishment",
      beneficiaries: "14,949",
      daysLeft: 12,
      raised: 373728,
      goal: 1400000,
      image: "/api/placeholder/300/200"
    },
    {
      title: "Tata Cancer Care Centre",
      subtitle: "Help Families Endure Their Toughest Battle",
      beneficiaries: "25,267",
      daysLeft: 3,
      raised: 631682,
      goal: 2000000,
      image: "/api/placeholder/300/200"
    }
  ];

  const testimonials = [
    {
      name: "Parent of Kidney Stone Patient",
      story: "My son is admitted here for kidney stone treatment costing around ₹15,000, which I can't afford. I borrowed money for treatment, but daily travel from Mankhurd to the hospital is expensive. I can't travel by train, so I take a bus or autorickshaw, which adds to the cost. I can't afford restaurant food or go home for lunch, so I skip meals, making me weak.",
      rating: 5
    },
    {
      name: "Father of Yash",
      story: "When my wife was admitted to the hospital for the delivery of our second child, I didn't know what to feed our 9-year-old son, Yash. I can't cook and can't afford restaurant food, so we depended on street food like vada pav. I was happy about our second child but worried about Yash's health due to the unhealthy diet. When I heard about Akshaya Chaitanya's free lunch service, I was relieved to feed him a good, nutritious lunch.",
      rating: 5
    }
  ];

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
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
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
                    <span>{campaign.daysLeft} Days left</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>₹{campaign.raised.toLocaleString()}</span>
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
