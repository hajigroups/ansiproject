import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  // State to track the active link and mobile menu visibility
  const [activeLink, setActiveLink] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Function to handle link clicks
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false); // Close the mobile menu after a link is clicked
  };

  return (
    <nav className="bg-gray-300 text-black p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link href="#home" className="flex items-center">
            <img src="/images/logo.jpg" className="me-3 w-16 rounded-xl" alt="Envato Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Envato Groups</span>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex space-x-6 ${isMobileMenuOpen ? 'flex' : 'hidden'} md:block`}>
          <Link
            href="#home"
            className={`text-black font-semibold cursor-pointer hover:text-red-500 hover:text-sm ${
              activeLink === 'home' ? 'text-red-500 underline' : ''
            }`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
          <Link
            href="#services"
            className={`text-black font-semibold cursor-pointer hover:text-red-500 hover:text-sm ${
              activeLink === 'services' ? 'text-red-500 underline' : ''
            }`}
            onClick={() => handleLinkClick('services')}
          >
            Services
          </Link>
          <Link
            href="#about"
            className={`text-black font-semibold cursor-pointer hover:text-red-500 hover:text-sm ${
              activeLink === 'about' ? 'text-red-500 underline' : ''
            }`}
            onClick={() => handleLinkClick('about')}
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className={`text-black font-semibold cursor-pointer hover:text-red-500 hover:text-sm ${
              activeLink === 'contact' ? 'text-red-500 underline' : ''
            }`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact Us
          </Link>
        </div>

        {/* Buy Now Button */}
        <div>
          <Link href="/Buynow" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
            Buy Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4">
          <Link
            href="#home"
            className={`text-black font-semibold cursor-pointer hover:text-red-500 ${
              activeLink === 'home' ? 'text-red-500 underline' : ''
            }`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
          <Link
            href="#services"
            className={`text-black font-semibold cursor-pointer hover:text-red-500 ${
              activeLink === 'services' ? 'text-red-500 underline' : ''
            }`}
            onClick={() => handleLinkClick('services')}
          >
            Services
          </Link>
          <Link
            href="#about"
            className={`text-black font-semibold cursor-pointer hover:text-red-500 ${
              activeLink === 'about' ? 'text-red-500 underline' : ''
            }`}
            onClick={() => handleLinkClick('about')}
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className={`text-black font-semibold cursor-pointer hover:text-red-500 ${
              activeLink === 'contact' ? 'text-red-500 underline' : ''
            }`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
