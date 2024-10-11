// pages/index.tsx
"use client"
import Navbar from "./components/Navbar";
import TypedComponent from "./components/Typed";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";
import { useEffect, useState } from "react";
import Contactus from "./components/Contact";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted

  useEffect(() => {
    setIsMounted(true); // Set mounted state to true after component mounts
  }, []);

  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home" className="relative pt-20 px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="relative">
          <h1 className="mt-20 md:mt-40 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Smooth and Grow Your Business.
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-justify">
            Welcome to Digital Lab, where every member is as creative as Tom and Jerry. Fling your worries about social presence and digital marketing aside, because our passionate and creative team of professionals has already helped many people. Now, it's your turn to experience our expertise!
          </p>
        </div>
        <div className="flex text-center">
          <span className="mt-4 text-red-800 flex-grow border-b border-red-800 mx-4"></span>
          <span className="mt-2 font-bold">Discover Now</span>
        </div>
        <div className="m-4 absolute bottom-[300px] left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="mt-10 text-xl font-bold">Our Professional Expertise in</h1>
          {isMounted && <TypedComponent />} {/* Only render on the client */}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-8 md:px-16 lg:px-20">
        <Services />
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 sm:px-8 md:px-16 lg:px-20">
        <About />
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 px-4 sm:px-8 md:px-16 lg:px-20">
        <Contactus />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
