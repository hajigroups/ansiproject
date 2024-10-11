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
              <strong>Digital Lab</strong>, initially, was just an idea that struck the mind like stars colliding in space. Syed Ali Turab was the man who had this idea and the vision to gather professionals from different niches to build a professional online marketing team. He was well aware of social media's behavior and marketing strategies, but when he observed the marketing techniques and strategies of famous marketers, he saw a lot of mistakes.
            </p>
            <p className="text-gray-700 mb-4">
              He even thought that they couldn't manage a single account without paid advertisements and were still using outdated methods. So, he decided to create a solution. He started working with his brother, Syed Tasawar Abbas. Both decided to execute this plan. When they started, the first member who showed interest and collaborated was Laiba Imran Khan. She was a graphic designer and UI/UX designer.
            </p>
            <p className="text-gray-700 mb-4">
              In September 2023, Digital Lab came into being. This team worked tirelessly to make people aware of the real meaning of marketing. By the end of September 2023, we got our first client. We were overjoyed to showcase our skills and were extremely happy when we found our first client satisfied with our work. Then, things started falling into place, consistently getting clients, and proving ourselves as the best team.
            </p>
            <p className="text-gray-700">
              We started to increase the team and expand our model. Now, we have a team of professionals and seekers of work. We are targeting all struggling businesses worldwide to grow their market presence and boost their revenue.
            </p>
          </section>

          {/* Short and Concise */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Short and Concise</h2>
            <p className="text-gray-700 mb-4">
              <strong>Digital Lab: A Home for Professionals</strong>
            </p>
            <p className="text-gray-700 mb-4">
              It's like a mental state where expectations meet results. Here, an expert team of freelancers proficient in their respective niches works diligently for your success. We treat your business as if it were our own because a true professional always puts 100% into their own business.
            </p>
            <p className="text-gray-700">
              With this spirit and devotion to work, Digital Lab has successfully strengthened many businesses. Our clients are always satisfied with our work because quality is our priority. Now it’s your turn. Don't be late if you want to achieve your expected growth in minimal time!
            </p>
          </section>

          {/* Our Benefits */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Benefits</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Proper Content Schedule</li>
              <li>Totally UpToDate Strategy</li>
              <li>Expert Copywriter</li>
              <li>Social Media’s Algorithm’s Wise Strategy</li>
              <li>Professional Web Development</li>
              <li>Weekly 1 to 1 Call</li>
            </ul>
          </section>

          {/* Our Mission */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to provide high-quality [services] and exceptional customer service.
            </p>
          </section>

          {/* Get in Touch */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or need support, feel free to <a href="mailto:pkmart786122@gmail.com" className="text-blue-500 hover:underline">email us</a>. We’d love to hear from you!
            </p>
            <p className="text-gray-700">
              Alternatively, you can also reach out to us at <a href="mailto:pkmart786122@gmail.com" className="text-blue-500 hover:underline">pkmart786122@gmail.com</a>.
            </p>
          </section>
        </main>


      </div>
    </>
  );
}

export default About;
