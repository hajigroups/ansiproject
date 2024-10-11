import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState<string>('');

  // Function to handle link clicks
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-gray-300 text-black p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link href="#home" className="flex items-center">
            <img src="/images/logo.jpg" className="me-3 w-16 rounded-xl" alt="FlowBite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Envato Groups</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
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
    </nav>
  );
};

export default Navbar;
