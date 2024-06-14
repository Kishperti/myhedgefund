"use client";
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import styles from "@/css/HomePage.module.css";
import Typewriter from "typewriter-effect";
import Footer from "@/components/Footer";
import Blog3 from "@/components/Blog3";
import Head from 'next/head';
import { Be_Vietnam_Pro } from 'next/font/google';
import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import Test from "@/components/Test";

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
          top: targetElement.offsetTop - 90,
          behavior: 'smooth',
        });
      }
    };

    const handleGetStartedClick = () => {
      smoothScroll('#blog'); // Scroll to the section with the ID "join"
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
    <>
      <Head>
        <meta name="keywords" content="HedgeMyFunds, hedge fund consulting, tax consulting, regulatory consulting, finance consulting, ESG consulting, risk consulting, deals consulting, assurance services, global transaction services" />
        <meta name="author" content="HedgeMyFunds" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="h-[100px] flex items-center sticky top-0 z-50 bg-black">
        <NavBar />
      </div>
      <div className={`${styles.bg} ${styles.rounded} ${herolineText.className} relative`}
        style={{
          background: 'linear-gradient(0deg, rgb(32, 31, 31) 0%, rgb(232, 233, 175) 100%)',
        }}
      >
        <div className={`${styles.hero} flex flex-col items-center justify-center`}>
          <p className={`${herolineText.className} ${styles.heroline} leading-[65px] text-center mb-10`}>
            Redefining Investment Banking.
          </p>
          <p className={`m-auto text-[#DBDBDB] text-[24px] font-sans ${styles.quote} text-center`}>
            "Maximizing returns with Indian Insight and Strategic Global Partnerships."
          </p>
          <p className={`text-center mt-10 ${styles.animation}`}>
            <span className="">
              <Typewriter
                options={{
                  strings: ["Guidance", "Ambitions", "Excellence", "Perfection"],
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
      <div id="blog">
        <Blog3 />
      </div>
      <Test />
      <HomeBanner />
      <Footer />
    </>
  );
};

export default Page;
