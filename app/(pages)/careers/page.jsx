'use client'
import React from 'react'
import Image from 'next/image'
import styles from '@/css/Careers.module.css'
import { useState } from 'react'
import NavBar from '@/components/NavBar'
import { useEffect } from 'react'
import gsap from 'gsap'
import Typewriter from "typewriter-effect";
import { Be_Vietnam_Pro } from 'next/font/google';
import Link from 'next/link'
const herolineText = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "600"
});
const page = () => {
  

  
  return (
    <div>
      <div className={` h-[100px] flex items-center sticky top-0 z-50  bg-black`}>
        <NavBar />
      </div>
      <div className={`${styles.bg} ${styles.rounded} ${herolineText.className} relative`}>
      <div className={`${styles.hero} flex flex-col items-center justify-center`}>
    
    <p className={`${herolineText.className}  ${styles.heroline} leading-[65px] text-center mb-10`}>
      <p>Join Our Winning Team.</p>
     
    </p>

    <p className={`m-auto  text-[#DBDBDB] text-[24px] font-sans ${styles.quote} text-center`}>
      "Shape your future with us in finance and innovation."
    </p>

    <p className={`text-center mt-10 ${styles.animation}`}>
      <span className="">
        <Typewriter
          options={{
            strings: ["Growth", "Opportunity","Success"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </p>

    <a href="mailto:Careers@hedgemyfunds.co.in" className="">
      <button
        className={`${styles.btnhover} border-2 text-[14px] m-auto flex rounded-[1px] bg-transparent justify-center`}
      >
        <p className={`${styles['btn-text']} ${herolineText.className} text-center`}>
          Get Started
        </p>
      </button>
    </a>
  </div>

        
      </div>
      <a href="mailto:Careers@hedgemyfunds.co.in"><div className='bg-gray-300 font-semibold  text-black p-10 sm:p-5 md:p-8 lg:p-12 xl:p-20 sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]'>
  Send your resume at Careers@hedgemyfunds.co.in
</div></a>
      



    </div>
  )
}

export default page
