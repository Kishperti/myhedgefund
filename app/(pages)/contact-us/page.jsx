'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Typewriter from "typewriter-effect";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    setResult("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      if (response.status === 200) {
        setResult(json.message);
        setShowPopup(true);
      } else {
        setResult(json.message);
      }
    } catch (error) {
      setResult("Something went wrong!");
    } finally {
      form.reset();
      setTimeout(() => {
        setResult("");
        setShowPopup(false);
      }, 5000);
    }
  };

  return (
    <div>
      <div className="h-[100px] flex items-center sticky top-0 z-50 bg-black">
        <NavBar />
      </div>

      <div className="relative bg-yellow-400 bg-gradient-to-b from-yellow-400 via-yellow-400 to-black p-10 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <p className="text-6xl font-bold leading-[65px] text-center mb-10 text-black">
            We are Here for You.
          </p>

          <p className="m-auto text-[#DBDBDB] text-[24px] font-sans text-center">
            "Reach out for personalized assistance with your financial needs."
          </p>

          <p className="text-center mt-10">
            <span>
              <Typewriter
                options={{
                  strings: ["Personalized Assistance", "Get in Touch", "Financial Help"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>

          <Link href="/join-us">
            <button
              className="mt-6 border-2 text-[14px] m-auto flex rounded-[1px] bg-transparent justify-center p-2 hover:bg-yellow-600 hover:text-black"
              id="getStartedButton"
            >
              <p className="text-center text-black font-bold">
                Get Started
              </p>
            </button>
          </Link>
        </div>
      </div>

      <section className="text-gray-600 body-font relative py-12">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4267.322935993889!2d76.68498346974731!3d30.710192829944237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee57aaaaaa93%3A0x326ffb09498c00a!2sTDS%20Tower!5e0!3m2!1sen!2sin!4v1717345033300!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-end">
          <div className="bg-white p-10 rounded-lg shadow-md z-10 md:w-1/2 lg:w-1/3">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="fec086a8-4873-4070-9bcf-d84bf7968f0a" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />
              <input type="checkbox" name="botcheck" style={{ display: "none" }} />

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name here...."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your e-mail here...."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="text-sm text-gray-600">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your contact no...."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm text-gray-600">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message......."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                ></textarea>
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                  Send Message
                </button>
              </div>
              <p className="text-base text-center text-gray-400" id="result">{result}</p>
            </form>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg">
            <p>Thank you! Your message has been sent successfully.</p>
            <button onClick={() => setShowPopup(false)} className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
