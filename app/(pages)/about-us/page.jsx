"use client"
import React from 'react'
import styles from '@/css/About.module.css'
import Image from 'next/image'
import { useEffect } from 'react';
import gsap from 'gsap';
import Blog3 from '@/components/Blog3'
import NavBar from '@/components/NavBar'
import Typewriter from "typewriter-effect";
import Link from 'next/link';
import { Be_Vietnam_Pro } from 'next/font/google';

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
          top: targetElement.offsetTop-90,
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
      <div className={` h-[100px] flex items-center sticky top-0 z-50  bg-black`}>
        <NavBar />
      </div>
      <div className={`${styles.bg} ${styles.rounded} ${herolineText.className} relative`}>
      <div className={`${styles.hero} flex flex-col items-center justify-center`}>
    
    <p className={`${herolineText.className}  ${styles.heroline} leading-[65px] text-center mb-10`}>
      <p>Largest Investment Landscape.</p>
     
    </p>

    <p className={`m-auto  text-[#DBDBDB] text-[24px] font-sans ${styles.quote} text-center`}>
      "One smart decision at a time."
    </p>

    <p className={`text-center mt-10 ${styles.animation}`}>
      <span className="">
        <Typewriter
          options={{
            strings: ["Transparency", "Experience","Expertise","Innovation","Security"],
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
   

      <div className={styles['executive-section']}>
        <h2>Executive Summary</h2>
        <ul>
          <li>HedgeMyFunds is poised to become the premier online platform connecting Indian investors with sophisticated investment opportunities.</li>
          <li>We leverage a robust technology infrastructure and a team of experienced professionals to deliver exceptional value to both investors and fund managers.</li>
          <li>Through our people-over-profit focus, client-centricity and impact-oriented approach, we act as trusted advisors and partners.</li>
        </ul>
      </div>
      
      <div className={`${styles['investment-strategy']} relative`}>
        <h2 className={`${styles.heading}`}>Investment Strategy</h2>
        <p className={styles.text}>
          Our focus lies on providing innovative alternative investment solutions through a carefully curated selection of hedge funds. We employ a blend of quantitative and qualitative analysis, encompassing diverse asset classes like land assets, high-quality equities, commodities and strategic restructuring opportunities.
          <br /><br />
          Now that geography has become history, our interconnectedness with member firms will help with all the expertise and capabilities your business needs, along with the quality it deserves.
        </p>
      </div>

      <div className={`${styles['investment-strategy']}`}>
        <h3 className={styles.heading}>Investor Focus</h3>
        <p className={styles.text}>
          Hedgemyfunds.co.in caters to accredited Indian investors seeking to diversify their portfolios and achieve superior risk-adjusted returns.
          <br /><br />
          Our platform offers a user-friendly interface for browsing, comparing, and investing in a variety of hedge funds.
        </p>
      </div>

      <div className={styles['executive-section']}>
        <h2>Compliance & Risk Management</h2>
        <ul>
          <li>Maintaining the highest ethical standards and adhering to all regulatory frameworks are paramount.</li>
          <li>We are committed to rigorous compliance with SEBI, RBI, and other relevant governing bodies.</li>
          <li>Our internal audit and legal teams meticulously assess potential investments to mitigate risk and ensure investor protection.</li>
        </ul>
      </div>

      <div className={styles['investment-strategy']}>
        <h2 className={styles.heading}>Technology & Innovation</h2>
        <p className={styles.text}>
          Our proprietary algorithms and investment models are continuously refined by our in-house development team in association with AllAlgos IT Solutions which is a family run web development firm active for the past 8 years.
          <br /><br />
          Hedgemyfunds.co.in leverages cutting-edge technology to deliver an exceptional user experience.
        </p>
      </div>

      <div className={`${styles['investment-strategy']}`}>
        <h2 className={styles.heading}>Competitive Advantage</h2>
        <p className={styles.text}>
          Our comprehensive approach sets us apart.
          <br /><br />
          We combine a sophisticated online platform with a team of seasoned investment professionals training our in-house portfolio managers, wealth managers, business analysts and risk & compliance analysts; our robust risk management practices, and a commitment to investor & team education.
        </p>
      </div>

      <div className={styles['executive-section']}>
        <h2>Future Outlook</h2>
        <ul>
          <li>We are actively on-boarding a select group of qualified investors to participate in our pre-launch phase.</li>
          <li>The official platform launch is targeted for June 3rd, 2025, upon completion of all legal requirements and regulatory approvals.</li>
          <li>Post launch of the platform, our platform aims to become public in a phased manner as our IT infrastructure is re developed and expanded to sustain the ecosystem and analyse all data real-time.</li>
        </ul>
      </div>

     

      <div className={styles['investment-strategy']}>
        <h2 className={styles.heading}>Sustainability</h2>
        <p className={styles.text}>
          We believe in fostering long-term financial stability and growth for our investors.
          <br /><br />
          Our platform empowers individuals to access sophisticated financial tools typically reserved for high-net-worth individuals.
        </p>
      </div>

      <div className={`${styles['investment-strategy']}`}>
        <h2 className={styles.heading}>Business Conduct</h2>
        <p className={styles.text}>
          We operate with the utmost integrity and transparency. Our founders and leadership team have established a stringent code of ethics that adheres to the highest legal and moral standards.
          <br /><br />
          We maintain an open-door policy to foster trust and open communication with our investors and business partners.
        </p>
      </div>
    </>
  );
}

export default page;
