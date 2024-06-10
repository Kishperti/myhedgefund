import React from 'react'
import styles from '@/css/HomeBanner.module.css'
import Link from 'next/link'
import {  Be_Vietnam_Pro } from 'next/font/google';
import Image from 'next/image';
const herolineText = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "600"
});
const HomeBanner = () => {
  return (
    <div className={`h-[250px] ${styles.banner} overflow-hidden relative flex flex-col gap-[10px] items-center justify-center`}>
      <p>Invest your <span className='text-white'>money</span> with us.</p>
      
      <Link href='/join-us'>
              <button className={`${styles.btnhover} text-[14px] m-auto flex rounded-[1px] bg-transparent relative z-20`}>
                <p className={`${styles['btn-text']} ${herolineText.className} `}>Get Started</p>
              </button>
            </Link>

           
      <Image    
                  src="/Plates.avif" 
                  alt="alt" 
                  height={286}
                  width={286}
                 
                  className='opacity-[0.9] absolute bottom-[-145px]  '
                />
      
    </div>
  )
}

export default HomeBanner
