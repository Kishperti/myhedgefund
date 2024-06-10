'use client'
import styles from '@/css/Services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap'
import NavBar from '@/components/NavBar'
import Typewriter from "typewriter-effect";
import { useEffect } from 'react'

import { Be_Vietnam_Pro } from 'next/font/google';

const herolineText = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "600"
});
export default function service() {

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
      smoothScroll('#services'); // Scroll to the section with the ID "blog"
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
       
       <div className={` h-[100px] flex items-center sticky top-0 z-50  bg-black`}>
        <NavBar />
      </div>
      <div className={`${styles.bg} ${styles.rounded} ${herolineText.className} relative`}>
      <div className={`${styles.hero} flex flex-col items-center justify-center`}>
    
    <p className={`${herolineText.className}  ${styles.heroline} leading-[65px] text-center mb-10`}>
      <p>Inclusive Financial Services.</p>
     
    </p>

    <p className={`m-auto  text-[#DBDBDB] text-[24px] font-sans ${styles.quote} text-center`}>
      "Tailored services to meet your unique investment objectives."
    </p>

    <p className={`text-center mt-10 ${styles.animation}`}>
      <span className="">
        <Typewriter
          options={{
            strings: ["Tailored Services", "Investment Goals", "Financial Solutions"],
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
        <div className={styles.container}>
            
            <main className={styles.main}>
                <div>
                    <h1 className={styles.title}>How Hedgemyfunds can help ?</h1>
                    <p className={styles.description}>
                        Changing face of Indian businesses, government led reforms have brought new challenges and new opportunities in the market. This constant evolution requires regular shaping of new strategies and new business solutions. Our extensive network of our member firms and offices in the country can help mitigate the challenges arising on account of the unique legal system, regulatory bottlenecks and tax requirements.
                    </p>
                    <p className={styles.description}>
                        We can help you in your financial growth by overcoming these barriers of growth. This involves doing business in India advisory, corporate finance, management of your business risks, strategic planning of your investments and solving your taxation related queries.
                    </p>
                    <p className={styles.description}>
                        Whatever business you are in, we can offer you the following services:
                    </p>
                </div>
                <br/>
                <div id="services">
                    <h1 className={styles.title} id="title">Our Services</h1>
                </div>
                <div className={styles.services}>
                    <div className={styles.serviceCard}>
                      <Link href="/join-us">
                        <h2>Consulting</h2>
                        <ul className={styles.serviceList}>
                          <li>1. Business Consulting</li>
                          <li>2. Tag Regulatory and Finance Consulting</li>
                          <li>3. ESG and Risk Consulting</li>
                          <li>4. Deals Consulting</li>
                        </ul>
                        </Link>
                    </div>
                    <div className={styles.serviceCard}>
                      <Link href="/join-us">
                        <h2>Investment Banking</h2>
                        <ul className={styles.serviceList}>
                          <li>1. Asset Evaluation & Portfolio Assessment</li>
                          <li>2. Investment Management Services</li>
                          <li>3. Contractual Fund Management services</li>
                          <li>4. Medium & Long term Investment Plans</li>
                          <li>5. B2B & B2C software, algorithm & portals</li>
                          <li>6. Tactical Investment Plans for HNIs & UHNIs</li>
                        </ul>
                        </Link>
                    </div>
                    <div className={styles.serviceCard}>
                      <Link href="/join-us/#join">
                        <h2>Audit</h2>
                        <ul className={styles.serviceList}>
                          <li>1. Accounting Services</li>
                          <li>2. Process Outsourcing</li>
                          
                          
                        </ul>
                        </Link>
                        {/* <a href="/services/esg">See our 4 risk advisory services</a> */}
                    </div>
                   
                </div>
                
            </main>
        </div>
        </div>
    );
}