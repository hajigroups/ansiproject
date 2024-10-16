"use client"; // This makes the component a client component
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  complain: string;
}

const Contactus: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    complain: '',
  });

  // Type the event parameter for handleChange
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Type the event parameter for handleSubmit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', { // Ensure the API endpoint is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Contact form submitted successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          complain: '',
        });
      } else {
        alert('Error submitting contact form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <>
      <title>Contact Us</title>
      <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl font-bold text-center mb-8">Fill The Form</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                className="w-full h-12 p-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="w-full h-12 p-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="w-full h-12 p-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                className="w-full h-32 p-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                placeholder="Complain-box"
                name="complain"
                id="complain"
                value={formData.complain}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <button
                className="w-full h-12 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactus;
