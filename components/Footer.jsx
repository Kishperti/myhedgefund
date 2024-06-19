'use client';
import React from 'react';
import styles from '@/css/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Lato } from 'next/font/google'
import Link from 'next/link';
const footerCategory = Lato({
    subsets: ["latin"],
    weight:['900']
  });
const footerCLinktegoryContent = Lato({
    subsets: ["latin"],
    weight:["700"]
  });
  function openPrivacyPDF() {
    // Open the PDF file in a new tab
    window.open('/PrivacyNew.pdf', '_blank');
  }
  function openPolicyPDF() {
    // Open the PDF file in a new tab
    window.open('/PolicyNew.pdf', '_blank');
  }
  function openTCPDF() {
    // Open the PDF file in a new tab
    window.open('/T&CNew.pdf', '_blank');
  }
  function openSecurityPDF() {
    // Open the PDF file in a new tab
    window.open('/Security.pdf', '_blank');
  }


function Footer() {
    return (
      <footer class="text-[rgb(151,151,151)] body-font bg-black">
      <div class="container px-10 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span class="text-xl text-white">Empower Yourself, Your Investments, Your Skills & Career.</span>
          </a>
          <br />
          <p class="mt-2 text-[20px] text-white">Bringing Financial Freedom For India, By India</p>
        </div>
        
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="text-white tracking-widest text-sm mb-3 font-normal">Company</h2>
            <nav class="list-none mb-10">
              <li>
                <Link href="/about-us" class="text-[rgb(151,151,151)]">About Us</Link>
              </li>
              <li>
                <a href="#" onClick={openPolicyPDF} class="text-[rgb(151,151,151)]">Policy</a>
              </li>
              <li>
                <Link href="/careers" class="text-[rgb(151,151,151)]">Career</Link>
              </li>
              <li>
                <a href="/blog" class="text-[rgb(151,151,151)]">Blog</a>
              </li>
              <li>
                <a href="/contact-us" class="text-[rgb(151,151,151)]">Contact Us</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="text-white tracking-widest text-sm mb-3 font-normal">Services</h2>
            <nav class="list-none mb-10">
              <li>
                <Link href="/services" class="text-[rgb(151,151,151)]">Consulting</Link>
              </li>
              <li>
                <Link href="/services" class="text-[rgb(151,151,151)]">Investment Banking</Link>
              </li>
              <li>
                <Link href="/services" class="text-[rgb(151,151,151)]">Audit</Link>
              </li>
             
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="text-white tracking-widest text-sm mb-3 font-normal">Contact Us</h2>
            <nav class="list-none mb-10">
              <li>
                <a href="javascript:void(0)" class="text-[rgb(151,151,151)]">HedgeMyFunds</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-[rgb(151,151,151)]">TDS Tower, Phase 8, Industrial Area, Mohali</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-[rgb(151,151,151)]">Sahibzada Ajit Singh Nagar, Punjab</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-[rgb(151,151,151)]">160055</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-[rgb(151,151,151)]">+91-9888334677</a>
              </li>
              <li>
                <a href="mailto:contact@hedgemyfunds.co.in" class="text-[rgb(151,151,151)]">contact@hedgemyfunds.co.in</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="text-white tracking-widest text-sm mb-3 font-normal">Legal</h2>
            <nav class="list-none mb-10">
              <li>
                <a href="#" onClick={openPrivacyPDF} class="text-[rgb(151,151,151)]">Privacy</a>
              </li>
              <li>
                <a href="#" onClick={openTCPDF} class="text-[rgb(151,151,151)]">Terms and Conditions</a>
              </li>
              <li>
                <a href="#" onClick={openSecurityPDF} class="text-[rgb(151,151,151)]">Security</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-black">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            <a href="https://twitter.com/knyttneve" target="_blank" rel="noopener noreferrer" class="text-[rgb(151,151,151)] ml-1" >Hedgemyfunds.co.in - A sub venture of Luxury Hotel Concierge Pvt. ltd.</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-500" target='_blank' href='https://www.facebook.com/profile.php?id=61560092323936&mibextid=ZbWKwL'>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500" target='_blank' href='https://x.com/hedgemyfunds?t=hzX21Sx1kbjE00t8NdRv0Q&s=08' >
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500" target="_blank" href='https://www.instagram.com/hedgemyfunds?igsh=dnJ6ZjRkZ2lmbGxw' >
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500" target="_blank" href='https://www.linkedin.com/in/iampranavdhingra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
    
    );
}

export default Footer;
