// components/TypedComponent.tsx
"use client";

import { useEffect } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  useEffect(() => {
    const element = document.getElementById('typed-element');
    if (element) {
      const typed = new Typed(element, {
        strings: [
          'Social media marketing',
          'Content Calendar',
          'Fb ads',
          'Video Editing',
          'Graphic designing',
          'Content Writing',
          'Copywriting',
          'SEO',
          'Web Development',
          'Web Designing',
          'UI/UX Design', // Corrected the backslash to a forward slash
        ],
        typeSpeed: 40,       // Speed at which text is typed
        backSpeed: 20,        // Speed at which text is erased (optional)
        // backDelay: 700,     // Delay before starting to erase (optional)
        // startDelay: 500,    // Delay before starting to type (optional)
        loop: false,          // Loop the typing animation indefinitely
        showCursor: false,    // Hide the blinking cursor
      });

      // Cleanup function to destroy the instance on component unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div
      className="text-red-500 mt-2 ml-10 text-4xl"
      id="typed-element"
    ></div>
  );
};

export default TypedComponent;
