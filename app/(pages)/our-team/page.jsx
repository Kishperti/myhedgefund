'use client'
import React from 'react'
import Image from 'next/image'
import styles from '@/css/Testimonials.module.css'
import gsap from 'gsap'
import { useEffect } from 'react'
import NavBar from '@/components/NavBar'
import Typewriter from "typewriter-effect";
import TeamSection from '@/components/TeamSection'
import { Be_Vietnam_Pro } from 'next/font/google';
import Link from 'next/link'
const herolineText = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "600"
});
const page = () => {


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
      smoothScroll('#team'); // Scroll to the section with the ID "blog"
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
    
        
    <div className={` h-[100px] flex items-center sticky top-0 z-50  bg-[black]`}>
        <NavBar />
      </div>
      <div className={`${styles.bg} ${styles.rounded} ${herolineText.className} relative`}>
      <div className={`${styles.hero} flex flex-col items-center justify-center`}>
    
    <p className={`${herolineText.className}  ${styles.heroline} leading-[65px] text-center mb-10`}>
      <p>Meet Our Experts.</p>
     
    </p>

    <p className={`m-auto  text-[#DBDBDB] text-[24px] font-sans ${styles.quote} text-center`}>
      "Dedicated professionals committed to your financial success."
    </p>

    <p className={`text-center mt-10 ${styles.animation}`}>
      <span className="">
        <Typewriter
          options={{
            strings: ["Expert team", "Financial Success","Dedicated Professionals"],
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

<div id="team"><TeamSection /></div>
      
    </div>
  )
}

export default page
