import React from 'react';
import Head from 'next/head';
const Services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <div className="bg-gray-100 min-h-screen mt-10">
        <header className="bg-[#0d98ba] text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">Our Services</h1>
          </div>
        </header>
        
        <main className="container mx-auto p-6">
          {/* Social Media Marketing */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Social Media Marketing</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Social Media Strategy Development</li>
              <li>Social Media Account Management</li>
              <li>Social Media Campaign Creation</li>
              <li>Community Engagement and Management</li>
              <li>Influencer Marketing</li>
              <li>Social Media Analytics and Reporting</li>
            </ul>
          </section>
          
          {/* Content Calendar Creation */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Content Calendar Creation</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Monthly Content Calendar Planning</li>
              <li>Content Scheduling and Publishing</li>
              <li>Platform-Specific Content Strategy</li>
              <li>Performance Tracking and Optimization</li>
            </ul>
          </section>
          
          {/* Facebook Ads */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Facebook Ads</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Facebook Ad Campaign Strategy</li>
              <li>Ad Creation and Design</li>
              <li>Audience Targeting and Segmentation</li>
              <li>Budget Management and Optimization</li>
              <li>Ad Performance Monitoring and Reporting</li>
            </ul>
          </section>
          
          {/* Video Editing */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Video Editing</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Promotional Video Production</li>
              <li>Social Media Video Content</li>
              <li>Explainer Videos</li>
              <li>Product Demos and Tutorials</li>
              <li>Event Coverage and Highlights</li>
              <li>Video Animation and Effects</li>
            </ul>
          </section>
          
          {/* Graphic Designing */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Graphic Designing</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Logo and Brand Identity Design</li>
              <li>Marketing Collateral Design (Brochures, Flyers, Posters)</li>
              <li>Social Media Graphics and Banners</li>
              <li>Infographics</li>
              <li>Packaging Design</li>
              <li>Custom Illustrations</li>
            </ul>
          </section>
          
          {/* Content Writing */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Content Writing</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Blog Posts and Articles</li>
              <li>Website Content</li>
              <li>Product Descriptions</li>
              <li>Press Releases</li>
              <li>Case Studies</li>
              <li>Newsletters and Email Campaigns</li>
            </ul>
          </section>
          
          {/* Copywriting */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Copywriting</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Sales Copywriting</li>
              <li>Ad Copy for Digital and Print</li>
              <li>Landing Page Copy</li>
              <li>Email Marketing Copy</li>
              <li>Social Media Ad Copy</li>
              <li>Brand Storytelling</li>
            </ul>
          </section>
          
          {/* SEO (Search Engine Optimization) */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">SEO (Search Engine Optimization)</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>SEO Audits and Analysis</li>
              <li>Keyword Research and Optimization</li>
              <li>On-Page and Off-Page SEO</li>
              <li>Technical SEO</li>
              <li>Link Building Strategies</li>
              <li>Local SEO Services</li>
            </ul>
          </section>
          
          {/* Web Development */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Custom Website Development</li>
              <li>E-commerce Website Development</li>
              <li>CMS Development (WordPress, Shopify, etc.)</li>
              <li>Web Application Development</li>
              <li>Website Maintenance and Support</li>
              <li>Performance Optimization</li>
            </ul>
          </section>
          
          {/* Web Designing */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Web Designing</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Website Layout and Structure Design</li>
              <li>Responsive Design for Mobile and Tablets</li>
              <li>Landing Page Design</li>
            </ul>
          </section>
          
          {/* UX/UI Design for Web Applications */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">UX/UI Design for Web Applications</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Visual Design and Branding Integration</li>
              <li>Prototyping and Wireframing</li>
              <li>UI/UX Design</li>
              <li>User Research and Personas</li>
              <li>Wireframes and Prototypes</li>
              <li>User Interface Design</li>
              <li>Usability Testing and Analysis</li>
              <li>Interaction Design</li>
              <li>User Experience Optimization</li>
            </ul>
          </section>
          
          {/* Summary of Services */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Summary of Services</h2>
            <p className="text-gray-700">
              We offer a comprehensive suite of services designed to enhance your digital presence and drive business growth. From strategic social media marketing and captivating content creation to advanced SEO techniques and cutting-edge web development, our team of experts is equipped to deliver top-notch solutions tailored to your unique needs. Let us help you achieve your goals with our full range of professional services.
            </p>
          </section>
        </main>
        

      </div>
    </>
  );
}

export default Services;
