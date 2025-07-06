import { Users, School, Hospital, Heart, MapPin, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "13.0M+", label: "Meals Served" },
    { icon: Users, value: "15.0M+", label: "Beneficiaries Served" },
    { icon: School, value: "1052+", label: "Municipal Schools" },
    { icon: Hospital, value: "507+", label: "Govt Hospitals" },
  ];

  const initiatives = [
    {
      title: "Swasthya Ahara",
      description: "Our government hospital feeding program in Mumbai aims to ease food costs and enable better care for patients. We understand that when families are dealing with medical expenses, providing nutritious meals becomes a challenge. Our program ensures that patients and their families receive hot, nutritious meals during their hospital stay.",
      impact: "Serving 32+ government hospitals across Mumbai",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Bal Shiksha Ahara",
      description: "Our municipal school feeding program supports zero-classroom hunger for better attendance and learning outcomes. We believe that no child should study on an empty stomach. By providing nutritious mid-day meals, we help improve school attendance and concentration levels.",
      impact: "Supporting 1052+ municipal schools",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Paushtik Ahara",
      description: "Our meals on wheels program nourishes the underprivileged and enables informal education. We reach out to communities that may not have access to regular meals, providing both nutrition and a platform for community engagement and education.",
      impact: "Reaching underserved communities across Mumbai",
      image: "/api/placeholder/400/300"
    }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Founder & CEO",
      description: "Leading our mission to eradicate hunger and empower communities through sustainable food programs.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Priya Sharma",
      position: "Operations Director",
      description: "Overseeing our kitchen operations and ensuring the highest standards of food safety and quality.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Amit Patel",
      position: "Program Manager",
      description: "Managing our feeding initiatives and coordinating with government departments and schools.",
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Akshaya Chaitanya</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            At our core, we believe a food-secure society helps unlock its true potential. 
            We are not only nourishing bodies but also opening doors to better education, 
            health and prosperity for fellow citizens.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Akshaya Chaitanya is dedicated to eradicating hunger and empowering communities 
                in Mumbai through unified efforts. From distributing nutritious meals to addressing 
                underlying poverty issues, we're committed to transforming lives.
              </p>
              <p className="text-gray-600 mb-6">
                Together, we can pave the way for a future where every vulnerable person has an 
                equal chance to thrive. Our state-of-the-art FSSAI compliant kitchen ensures that 
                every meal we serve meets the highest standards of hygiene and nutrition.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Heart className="w-5 h-5 mr-2" />
                Join our cause and make a difference
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <stat.icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Kitchen Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Centralized Kitchen</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At our 8000 sq. ft centralized kitchen in Byculla, Mumbai, we prioritize hygiene, 
              nutrition, quality and adhere to FSSAI regulations. From staff hygiene to food 
              preparation, we ensure the highest standards while serving 16,000 underprivileged 
              with integrity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hygiene First</h3>
              <p className="text-gray-600">
                Our kitchen follows strict hygiene protocols with regular sanitization and 
                staff training programs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nutrition Focus</h3>
              <p className="text-gray-600">
                Every meal is planned by nutritionists to ensure balanced nutrition for 
                growing children and recovering patients.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hospital className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                FSSAI compliant processes ensure that every meal meets the highest standards 
                of food safety and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feeding Initiatives */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Feeding Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We serve hot, nutritious, locally palatable meals prepared at our very own 
              state-of-the-art FSSAI compliant kitchen.
            </p>
          </div>
          <div className="space-y-12">
            {initiatives.map((initiative, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h3 className="text-2xl font-semibold mb-4">{initiative.title}</h3>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 font-medium">{initiative.impact}</p>
                  </div>
                </div>
                <div className={`bg-gray-200 h-64 rounded-lg flex items-center justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <span className="text-gray-500">Initiative Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who drive our mission forward and ensure 
              that every meal reaches those who need it most.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                Akshaya Chaitanya Kitchen<br />
                JAK Compound, Dadoji Konddeo Cross Lane<br />
                Byculla, Mumbai 400027
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">+91 892 899 1161</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">write2us@akshayachaitanya.org</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 