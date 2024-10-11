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
      <section id="home" className="relative pt-20">
        <div className="relative">
          <h1 className="mt-40 ml-10 font-bold text-[70px] w-[50%]">
            Smooth and Grow Your Business.
          </h1>
          <p className="mt-2 ml-32 w-[40%] text-[12px] text-justify">
            Welcome to Digital Lab, where every member is as creative as Tom and Jerry. Fling your worries about social presence and digital marketing aside, because our passionate and creative team of professionals has already helped many people. Now, it's your turn to experience our expertise!
          </p>
        </div>
        <div className="flex text-center">
          <span className="ml-40 mt-4 text-red-800">________________________</span>
          <span className="mt-[22px] ml-10 font-bold">Discover Now</span>
        </div>
        <div className="m-4 absolute bottom-[300px] left-[740px]">
          <h1 className="mt-10 text-xl font-bold ml-10">Our Professional Expertise in </h1>
          {isMounted && <TypedComponent />} {/* Only render on the client */}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <Services />
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <About />
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20">
        <Contactus />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
