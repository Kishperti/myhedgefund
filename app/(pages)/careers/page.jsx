"use client"
import React from 'react'
import Image from 'next/image'
import styles from '@/css/Careers.module.css'
import { useState } from 'react'
import NavBar from '@/components/NavBar'
import CareersJoinForm from '@/components/CareersJoinForm'
import { useEffect } from 'react'
import gsap from 'gsap'
import Typewriter from "typewriter-effect";
import { Be_Vietnam_Pro } from 'next/font/google';
import Link from 'next/link'

const herolineText = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "600"
});

const Page = () => {
  return (
    <div>
      <div className={`h-[100px] flex items-center sticky top-0 z-50 bg-black`}>
        <NavBar />
      </div>
      <div className={`${styles.bg} ${styles.rounded} ${herolineText.className} relative`}>
        <div className={`${styles.hero} flex flex-col items-center justify-center`}>
          <p className={`${herolineText.className} ${styles.heroline} leading-[65px] text-center mb-10`}>
            Join Our Winning Team.
          </p>
          <p className={`m-auto text-[#DBDBDB] text-[24px] font-sans ${styles.quote} text-center`}>
            "Shape your future with us in finance and innovation."
          </p>
          <p className={`text-center mt-10 ${styles.animation}`}>
            <span className="">
              <Typewriter
                options={{
                  strings: ["Growth", "Opportunity", "Success"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <Link href="/careersjoinformPage">
            <button
              className={`${styles.btnhover} border-2 text-[14px] m-auto flex rounded-[1px] bg-transparent justify-center`}
            >
              <p className={`${styles['btn-text']} ${herolineText.className} text-center`}>
                Get Started
              </p>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-center text-4xl m-10">Join our</h1>
        <a href="https://community.hedgemyfunds.co.in/">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300">Professional Community</button>
        </a>
        <p className="text-center mt-4 text-lg">A platform for students and young professionals to network and get exclusive perks with HedgeMyFunds</p>
      </div>
    </div>
  )
}

export default Page
