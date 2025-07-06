// src/components/Header.jsx
"use client";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "About Kautike Charitable Foundation", href: "/about" },
        { name: "Our Mission & Objectives", href: "/about#objectives" },
        { name: "Board of Trustees", href: "/about#trustees" },
      ]
    },
    {
      name: "Our Initiatives",
      href: "/initiatives",
      dropdown: [
        { name: "Education & Scholarships", href: "/initiatives/education" },
        { name: "Healthcare & Relief", href: "/initiatives/healthcare" },
        { name: "Social Welfare", href: "/initiatives/social-welfare" },
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Helper to handle dropdown open/close
  const handleDropdownEnter = (name) => {
    setActiveDropdown(name);
    setDropdownHovered(true);
  };
  const handleDropdownLeave = () => {
    setDropdownHovered(false);
    setTimeout(() => {
      if (!dropdownHovered) setActiveDropdown(null);
    }, 100);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 whitespace-nowrap">Kautike Charitable Foundation</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative flex items-center">
                {item.dropdown ? (
                  <div
                    className="flex items-center group relative"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <span className="text-gray-700 font-semibold hover:text-blue-600 px-3 py-2 cursor-pointer flex items-center">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 text-gray-400 group-hover:text-blue-600" />
                    </span>
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                        onMouseEnter={() => setDropdownHovered(true)}
                        onMouseLeave={() => {
                          setDropdownHovered(false);
                          setActiveDropdown(null);
                        }}
                      >
                        <div className="py-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 font-semibold hover:text-blue-600 px-3 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* Donate Button */}
            <Link href="/donate" className="ml-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                Donate
              </button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t pb-4">
            <div className="px-2 pt-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between text-gray-700 font-semibold px-3 py-2 text-base hover:text-blue-600 focus:outline-none"
                        onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${mobileDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdown === item.name && (
                        <div className="ml-4 border-l border-gray-200 pl-4 py-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-2 py-2 text-gray-600 hover:text-blue-600 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-700 font-semibold px-3 py-2 text-base hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-2 mb-2">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
