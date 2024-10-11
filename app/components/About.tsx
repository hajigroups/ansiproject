import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-[#73a9c2] text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">About Pkmart</h1>
          </div>
        </header>

        <main className="container mx-auto p-6">
          {/* About Us */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              <strong>Digital Lab</strong> was initially just an idea that struck the mind like stars colliding in space. Syed Ali Turab was the man behind this vision to gather professionals from different niches to build a professional online marketing team. He recognized social media's behaviors and marketing strategies but noticed many mistakes in the techniques of well-known marketers.
            </p>
            <p className="text-gray-700 mb-4">
              He observed that many marketers struggled to manage a single account without paid advertisements and were still using outdated methods. So, he decided to create a solution, starting to work with his brother, Syed Tasawar Abbas. Their first collaborator was Laiba Imran Khan, a talented graphic and UI/UX designer.
            </p>
            <p className="text-gray-700 mb-4">
              In September 2023, Digital Lab was born. The team worked tirelessly to educate clients about the true meaning of marketing. By the end of that month, we secured our first client, which filled us with joy and pride as we showcased our skills. As we proved our capabilities, we started consistently acquiring clients.
            </p>
            <p className="text-gray-700">
              We expanded our team and our model, now comprising a group of professionals dedicated to helping struggling businesses worldwide improve their market presence and increase revenue.
            </p>
          </section>

          {/* Short and Concise */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Short and Concise</h2>
            <p className="text-gray-700 mb-4">
              <strong>Digital Lab: A Home for Professionals</strong>
            </p>
            <p className="text-gray-700 mb-4">
              It's a mental state where expectations meet results. Here, an expert team of freelancers proficient in their respective niches works diligently for your success. We treat your business as if it were our own because true professionals put 100% into their work.
            </p>
            <p className="text-gray-700">
              With this spirit and devotion, Digital Lab has strengthened many businesses. Our clients are consistently satisfied with our work, as quality is our priority. Now it’s your turn. Don't hesitate if you want to achieve your expected growth in minimal time!
            </p>
          </section>

          {/* Our Benefits */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Benefits</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Proper Content Schedule</li>
              <li>Up-to-Date Strategies</li>
              <li>Expert Copywriters</li>
              <li>Social Media Algorithm Strategies</li>
              <li>Professional Web Development</li>
              <li>Weekly 1-on-1 Calls</li>
            </ul>
          </section>

          {/* Our Mission */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to provide high-quality services and exceptional customer support.
            </p>
          </section>

          {/* Get in Touch */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or need support, feel free to <a href="mailto:pkmart786122@gmail.com" className="text-blue-500 hover:underline">email us</a>. We’d love to hear from you!
            </p>
            <p className="text-gray-700">
              Alternatively, you can reach out to us at <a href="mailto:pkmart786122@gmail.com" className="text-blue-500 hover:underline">pkmart786122@gmail.com</a>.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
