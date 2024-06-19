"use client"
import React, { useEffect } from 'react';
import styles from '@/css/Blogs.module.css';
import { Be_Vietnam_Pro } from 'next/font/google';
import NavBar from '@/components/NavBar';
import Typewriter from 'typewriter-effect';
import Carousel from '@/components/Carousel';
import Link from 'next/link';

const herolineText = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: '600',
});

const Page = () => {
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
      smoothScroll('#blog'); // Scroll to the section with the ID "blog"
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

  return (
    <div>
      <div className="h-[100px] flex items-center sticky top-0 z-50 bg-black">
        <NavBar />
      </div>
      <div
        className={`${styles.bg} ${styles.rounded} ${herolineText.className} relative`}
        style={{
          background: 'linear-gradient(0deg, rgb(32, 31, 31) 0%, rgb(232, 233, 175) 100%)',
        }}
      >
        <div className={`${styles.hero} flex flex-col items-center justify-center`}>
          <p className={`${herolineText.className} ${styles.heroline} leading-[65px] text-center mb-10`}>
            Stay Informed, Stay Ahead.
          </p>
          <p className={`m-auto text-[#DBDBDB] text-[24px] font-sans ${styles.quote} text-center`}>
            "Insights and trends for savvy investors and market watchers."
          </p>
          <p className={`text-center mt-10 ${styles.animation}`}>
            <span className="">
              <Typewriter
                options={{
                  strings: ['Market Insights', 'Investment Trends', 'Financial News'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <Link href="/join-us">
            <button
              className={`${styles.btnhover} mt-6 border-2 text-[14px] m-auto flex justify-center`}
              id="getStartedButton"
            >
              <p className={`${styles['btn-text']} ${herolineText.className} text-center`}>
                Get Started
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div className={`${styles.intro}`}>
        <h1 className="font-bold text-[40px]">What is HedgeMyFunds?</h1>
        <br />
        HedgeMyFunds is an India-based private equity management firm that provides Contracted Investment Management Services and Cash Management Services for Corporate Clients and Consumer Clients.
        <br />
        <br />
        <br />
        We combine technical skills, process rigour, tools, methodologies, overall structure, and strategies to seamlessly deliver services across time zones through our local talent pool.
      </div>
      <div id="blog">
        <Carousel />
      </div>
    </div>
  );
};

export default Page;
