'use client'
import React, { useEffect, useState } from 'react';
import styles from '@/css/ContactUs.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import NavBar from '@/components/NavBar';
import Typewriter from "typewriter-effect";
import { Be_Vietnam_Pro } from 'next/font/google';
import emailjs from '@emailjs/browser';

const herolineText = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "600"
});

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const smoothScroll = (target) => {
      const targetElement = document.querySelector(target);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 90, // Adjusted scroll position
          behavior: 'smooth',
        });
      }
    };

    const handleGetStartedClick = () => {
      smoothScroll('#contact');
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

  const emailHandler = (e) => setEmail(e.target.value);
  const messageHandler = (e) => setMessage(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    const serviceId = 'service_kxu7ujb';
    const templateId = 'template_8pzxrov';
    const publicKey = 'Y_qFz207rJ84i86Mq';

    const templateParams = {
      email,
      message,
      to_name: 'HedgeMyFund',
      reply_to: 'consumer@hedgemyfunds.co.in',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Success Sent", response);
        setEmail('');
        setMessage('');
        setFormSubmitted(true);
        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
        }, 3000); // Hide popup after 3 seconds
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
            <p>We are Here for You.</p>
          </p>

          <p className={`m-auto text-[#DBDBDB] text-[24px] font-sans ${styles.quote} text-center`}>
            "Reach out for personalized assistance with your financial needs."
          </p>

          <p className={`text-center mt-10 ${styles.animation}`}>
            <span className="">
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
              className={`${styles.btnhover} mt-6 border-2 text-[14px] m-auto flex rounded-[1px] bg-transparent justify-center`}
              id="getStartedButton"
            >
              <p className={`${styles['btn-text']} ${herolineText.className} text-center`}>
                Get Started
              </p>
            </button>
          </Link>
        </div>
      </div>

      <form action="" onSubmit={submitHandler}>
        <section className="text-gray-600 body-font relative">
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
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact us</h2>
              <p className="leading-relaxed mb-5 text-gray-600">Contact us for any queries or support. We will reach you shortly.</p>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={emailHandler} className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" value={message} onChange={messageHandler} className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Submit</button>
            </div>
          </div>
        </section>
      </form>

      {showPopup && (
        <div className={`${styles.popup} ${showPopup ? styles.show : ''}`}>
          <p>Thank you! Your message has been sent successfully.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
