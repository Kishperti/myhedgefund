"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Murecho } from 'next/font/google';
import styles from "@/css/NavBar.module.css";

const navFont = Murecho({
  subsets: ['latin'],
  display: 'swap',
  
});

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const barSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
    </svg>
  );

  const closeSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <nav className={`${styles.bg} `}>
      <div>
        <Image src="/Logo1.png" alt="alt" width={110} height={80} />
      </div>
      <div className={`${styles.menus} ${menuOpen ? styles.menuOpen : ''}`}>
        <div className='flex  gap-[30px]  '>
        <div className={`${styles.options} flex justify-between gap-5   `}>
          <Link onClick={toggleMenu} href="/" className={`${styles.a} ${navFont.className}`}>Home</Link>
          <Link onClick={toggleMenu} href="/about-us" className={`${styles.a} ${navFont.className}`}>About Us</Link>
          <Link onClick={toggleMenu} href="/blog" className={`${styles.a} ${navFont.className}`}>Blog</Link>
          <Link onClick={toggleMenu} href="/careers" className={`${styles.a} ${navFont.className}`}>Careers</Link>
        </div>
        <div className={`${styles.options} flex justify-between gap-5  text-center `}>
          <Link onClick={toggleMenu} href="/our-story" className={`${styles.a} ${navFont.className} ${styles.speca}`}>Our Story</Link>
          <Link onClick={toggleMenu} href="/contact-us" className={`${styles.a} ${navFont.className}`}>Contact Us</Link>
          <Link onClick={toggleMenu} href="/services" className={`${styles.a} ${navFont.className}`}>Services</Link>
          {/* <Link onClick={toggleMenu} href="/our-team" className={`${styles.a} ${navFont.className}`}>Our Team</Link> */}
          <FontAwesomeIcon onClick={toggleMenu} className={`${styles.cross}  ${styles.a}`} icon={faXmark} />
        </div>
        </div>
        <Link href='/join-us'>
        <div onClick={toggleMenu} className={`${styles.joinus1}`}>Join Us</div></Link>
        
      </div>
      <Link href='/join-us'>
        <div className={`font-bold ${styles.joinus} text-white`}>Join Us</div>
      </Link>
      <div className={`${styles.bar} font-bold text-white`} onClick={toggleMenu}>
        <div className={`${styles.iconWrapper}`}>
          {barSvg}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
