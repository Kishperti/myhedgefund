import React from 'react';
import styles from '@/css/OurMission.module.css';
import { Bebas_Neue, Manrope } from 'next/font/google';
import Image from 'next/image';
const anekLatin = Bebas_Neue({ 
  subsets: ["latin"],
  weight: '400' 
});

const hel = Manrope({ 
  subsets: ["latin"],
  weight: '400' 
});

const OurMission = () => {
  return (
    <div className={` ${styles.container} pl-[150px] pr-[150px]`}>
    <br />
      
      <h4 className={`font-bold text-[48px] text-center ${anekLatin.className} border-8 border-black border-r-0 pl-5  `}>
        Grow Wth Us
      </h4>
  
      
    
      <p className={` ${styles.text} ${hel.className} text-[18px] text-justify`}>
        Join us at hedgemyfunds and take on the challenge of becoming a master of trading while living life on your own terms. The future belongs to those who are willing to learn and grow. At Hedgemyfunds.co.in, we strongly believe that everyone has the potential to become a successful investor. We are on a mission to provide the necessary tools and knowledge for our aspirants to reach their financial goals.
      </p>
      <br />
      <p className={` ${styles.text} ${hel.className} text-[20px] text-justify`}>
        Our start-up was born out of a passion for trading and corporate wealth. As traders ourselves, we understand the challenges one faces in the market and have developed a unique challenge to test your skills and groom you into becoming the next brilliant minds in investment banking.
      </p>
      <br />
      <p className={`${styles.text} ${hel.className} text-[20px] text-justify`}>
        We believe in living with freedom and setting realistic expectations. With our expertise including but not limited to trading Indian equities, commodities, and all other financial instruments, we aim to ensure higher returns on your investment. Join us on this journey towards financial success!
      </p>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default OurMission;
