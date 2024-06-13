"use client";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Typewriter from "typewriter-effect";

const CareersJoinForm = () => {
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

      <section className="text-gray-600 body-font relative py-12">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center">
          <div className="flex bg-white p-10 rounded-lg shadow-md w-full max-w-lg">
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="hidden"
                name="access_key"
                value="fec086a8-4873-4070-9bcf-d84bf7968f0a"
              />

              
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
              />

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-gray-600"
                >
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
                <label
                  htmlFor="communicationId"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Communication ID
                </label>
                <input
                  type="text"
                  name="communicationId"
                  id="communicationId"
                  placeholder="Enter your communication ID here...."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="dob"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="contactNumber"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  placeholder="Your contact no...."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="location"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Your current location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Your current location...."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="education"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Highest Education qualification / pursuing
                </label>
                <input
                  type="text"
                  name="education"
                  id="education"
                  placeholder="Your highest education qualification or currently pursuing...."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="resumeLink"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Drive link for resume (make sure it is visible to anyone)
                </label>
                <input
                  type="text"
                  name="resumeLink"
                  id="resumeLink"
                  placeholder="Enter the Google Drive link to your resume...."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
              <p className="text-base text-center text-gray-400" id="result">
                {result}
              </p>
            </form>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg">
            <p>Thank you! Your message has been sent successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersJoinForm;