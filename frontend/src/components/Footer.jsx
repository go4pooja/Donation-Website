// src/components/Footer.jsx
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "About",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Mission & Objectives", href: "/about#objectives" },
        { name: "Board of Trustees", href: "/about#trustees" },
      ]
    },
    {
      title: "Initiatives",
      links: [
        { name: "Education & Scholarships", href: "/initiatives/education" },
        { name: "Healthcare & Relief", href: "/initiatives/healthcare" },
        { name: "Social Welfare", href: "/initiatives/social-welfare" },
      ]
    },
    {
      title: "Policies",
      links: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-red-500 mr-2" />
              <h3 className="text-2xl font-bold">Kautike Charitable Foundation</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Kautike Charitable Foundation is dedicated to promoting education, health, social welfare, relief, and the well-being of humanity. We support scholarships, healthcare, social initiatives, and relief efforts for the poor and distressed, striving for a better and more equitable society.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-sm">
                  Mumbai, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-sm">+91 892 899 1161</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-sm">info@kautikefoundation.org</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 - {currentYear} Kautike Charitable Foundation. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
