'use client'
import React, { useState, useEffect } from "react";
import styles from "@/css/JoinUs.module.css";
import emailjs from '@emailjs/browser';
import NavBar from '@/components/NavBar';
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { Be_Vietnam_Pro } from 'next/font/google';
import { CSSTransition } from 'react-transition-group';
import './JoinUsTransition.css'; 
import Joinn from "@/components/Joinn";
const herolineText = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "600"
});

const Page = () => {

  useEffect(() => {
    const smoothScroll = (target) => {
      const targetElement = document.querySelector(target);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop + 500,
          behavior: 'smooth',
        });
      }
    };

    const handleGetStartedClick = () => {
      smoothScroll('#join'); 
    };

    const getStartedButton = document.getElementById('getStartedButton');
    if (getStartedButton) {
      getStartedButton.addEventListener('click', handleGetStartedClick);
    }

    return () => {
      if (getStartedButton) {
        getStartedButton.removeEventListener('click', handleGetStartedClick);
      }
    };
  }, []);

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [service, setService] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const firstnameHandler = (e) => setFirstName(e.target.value);
  const lastnameHandler = (e) => setLastName(e.target.value);
  const numberHandler = (e) => setNumber(e.target.value);
  const emailHandler = (e) => setEmail(e.target.value);
  const typeHandler = (e) => setType(e.target.value);
  const serviceHandler = (e) => setService(e.target.value);
  const amountHandler = (e) => setAmount(e.target.value);
  const messageHandler = (e) => setMessage(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    const serviceId = 'service_kxu7ujb';
    const templateId = 'template_8pzxrov';
    const publicKey = 'Y_qFz207rJ84i86Mq';

    const templateParams = {
      first_name,
      last_name,
      number,
      email,
      type,
      service,
      amount,
      message,
      to_name: 'HedgeMyFund',
      reply_to: 'consumer@hedgemyfunds.co.in',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Success Sent", response);
        setFirstName('');
        setLastName('');
        setNumber('');
        setEmail('');
        setType('');
        setService('');
        setAmount('');
        setMessage('');
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  return (
    <div>
      <div className={`h-[100px] flex items-center sticky top-0 z-50 bg-black`}>
        <NavBar />
      </div>
      <div className={`${styles.bg} ${styles.rounded} ${herolineText.className} relative`}>
        <div className={`${styles.hero} flex flex-col items-center justify-center`}>
          <p className={`${herolineText.className} ${styles.heroline} leading-[65px] text-center mb-10`}>
            Empowering Investors, Building Futures.
          </p>
          <p className={`m-auto text-[#DBDBDB] text-[24px] font-sans ${styles.quote} text-center`}>
            "Secure Your Future."
          </p>
          <p className={`text-center mt-10 ${styles.animation}`}>
            <span className="">
              <Typewriter
                options={{
                  strings: ["Community", "Growth", "Knowledge"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <button id="getStartedButton" className={`${styles.btnhover} border-2 text-[14px] m-auto flex mt-8 justify-center`}>
            <p className={`${styles['btn-text']} ${herolineText.className} text-center`}>
              Get Started
            </p>
          </button>
        </div>
      </div>

      {/* <form action="" className={`${styles.form}`} onSubmit={submitHandler}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div id="join" className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 font-semibold">
                Join Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-[24px]">
                Join the HedgeMyFunds Community Today and Empower Your Financial Future with Us
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="first-name" className="leading-7 text-sm text-gray-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={first_name}
                      onChange={firstnameHandler}
                      id="first-name"
                      name="f-name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="last-name" className="leading-7 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={last_name}
                      onChange={lastnameHandler}
                      id="last-name"
                      name="l-name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="contact" className="leading-7 text-sm text-gray-600">
                      Contact
                    </label>
                    <input
                      type="number"
                      value={number}
                      onChange={numberHandler}
                      id="contact"
                      name="contact"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={emailHandler}
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="type" className="leading-7 text-sm text-gray-600">
                      Type of Investment
                    </label>
                    <select
                      value={type}
                      onChange={typeHandler}
                      id="type"
                      name="type"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    >
                      <option value="" disabled>Select</option>
                      <option value="Stocks">Stocks</option>
                      <option value="Bonds">Bonds</option>
                      <option value="Real Estate">Real Estate</option>
                    </select>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="service" className="leading-7 text-sm text-gray-600">
                      Service Type
                    </label>
                    <select
                      value={service}
                      onChange={serviceHandler}
                      id="service"
                      name="service"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    >
                      <option value="" disabled>Select</option>
                      <option value="Business Consulting">Business Consulting</option>
                      <option value="Tag Regulatory and Finance Consulting">Tag Regulatory and Finance Consulting</option>
                      <option value="ESG and Risk Consulting">ESG and Risk Consulting</option>
                      <option value="Asset Evaluation & Portfolio Assessment">Asset Evaluation & Portfolio Assessment</option>
                      <option value="Investment Management Services">Investment Management Services</option>
                      <option value="Contractual Fund Management Services">Contractual Fund Management Services</option>
                      <option value="Medium & Long Term Investment Plans">Medium & Long Term Investment Plans</option>
                      <option value="B2B & B2C software, algorithm & portals">B2B & B2C software, algorithm & portals</option>
                      <option value="Tactical Investment Plans for HNIs & UHNIs">Tactical Investment Plans for HNIs & UHNIs</option>
                      <option value="Accounting Services">Accounting Services</option>
                      <option value="Process Outsourcing">Process Outsourcing</option>
                    </select>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="amount" className="leading-7 text-sm text-gray-600">
                      Amount of Investment
                    </label>
                    <input type="number"
                    id="amount"
                    value={amount}
                    name="amount"
                    onChange={amountHandler}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"

                  />
                     
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="query" className="leading-7 text-sm text-gray-600">
                      Query
                    </label>
                    <textarea
                      id="query"
                      value={message}
                      name="query"
                      onChange={messageHandler}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-[grey] rounded text-lg">
                    Submit
                  </button>
                </div>
                <CSSTransition
                  in={formSubmitted}
                  timeout={300}
                  classNames="popup"
                  unmountOnExit
                  onEntered={() => setTimeout(() => setFormSubmitted(false), 3000)}
                >
                  <div className="popup">
                    <p className="text-center text-black font-bold pt-[20px] text-30px">
                      Thank you for your submission! We will get back to you soon.
                    </p>
                  </div>
                </CSSTransition>
              </div>
            </div>
          </div>
        </section>
      </form> */}


      <Joinn />
    </div>
    
  );
};

export default Page;
