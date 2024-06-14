import React from 'react';
import styles from '@/css/Blog3.module.css'; // Ensure to create this file for custom styles
import Image from 'next/image';
import { Bebas_Neue,Manrope } from 'next/font/google';
import Link from 'next/link';
const anekLatin = Bebas_Neue({
  subsets: ["latin"],
  weight: '400'
});
const content = Manrope({
  subsets: ["latin"],
  weight: ['400', '700']
});

const Blog3 = () => {
  return (
    <div className='bg-black' id="blog">
      <div className='flex flex-col md:flex-row'>
        <div className={`bg-white w-full md:w-[50%] h-[300px] md:h-[600px] relative ${styles['hover-effect-wrapper']}`}>
          <div className={styles['hover-effect']}>
            <Image
              src="/riskAnalysis.png"
              alt="alt"
              layout="fill"
              objectFit="cover"
              className='opacity-[0.9]'
            />
          </div>
          <div className={styles['hover-overlay']}></div>
          <div className={styles['heading']}>
            <Link href="/blog"><h2 className={` ${styles['short-heading']}`}>Risk Analysis<svg className='inline text-white pl-[5px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></h2></Link>
            
          
            <p className={`${styles['full-content']} ${content.className}`}>India's <b>burgeoning</b>  economy presents a compelling landscape for entrepreneurs and investors.
 </p>
            
          </div>
          
         
        </div>
        <div className='md:w-[50%] flex flex-col'>
          <div className='flex'>
            <div className={`bg-pink-800 w-[50%] h-[300px] relative ${styles['hover-effect-wrapper']}`}>
              <div className={styles['hover-effect']}>
                <Image
                  src="/Structuring.jpg"
                  alt="alt"
                  layout="fill"
                  objectFit="cover"
                  className='opacity-[0.9]'
                />
              </div>
              <div className={styles['hover-overlay']}></div>
              <div className={styles['heading']}>
                <Link href="/blog">
                <h2 className={styles['short-heading']}>Structuring<svg className='inline text-white pl-[5px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></h2>
                </Link>
                
                
                <p className={`${styles['full-content']} ${content.className}`}>The financial world thrives on crafting <b>solutions specific</b>  to each situation. Structuring acts as the architect,  transactions, and business models. </p>
              </div>
            
            </div>
            <div className={`bg-pink-600 w-[50%] h-[300px] relative ${styles['hover-effect-wrapper']}`}>
              <div className={styles['hover-effect']}>
                <Image
                  src="/compilance.png"
                  alt="alt"
                  layout="fill"
                  objectFit="cover"
                  className='opacity-[0.9]'
                />
              </div>
              <div className={styles['hover-overlay']}></div>
              <div className={styles['heading']}>
                <Link href='/blog'>
                <h2 className={styles['short-heading']}>Compliances<svg className='inline text-white pl-[5px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></h2></Link>
               
               
                <p className={`${styles['full-content']} ${content.className}`}>
                The ever-expanding global marketplace presents a <b>double-edged sword</b>  for businesses: a wealth of opportunities.
                </p>
              </div>
              
            </div>
          </div>
          <div className='flex'>
            <div className={`bg-violet-400 w-[50%] h-[300px] relative ${styles['hover-effect-wrapper']}`}>
              <div className={styles['hover-effect']}>
                <Image
                  src="/diversification.png"
                  alt="alt"
                  layout="fill"
                  objectFit="cover"
                  className='opacity-[0.9]'
                />
              </div>
              <div className={styles['hover-overlay']}></div>
              <div className={styles['heading']}>
                <Link href="/blog">
                <h2 className={styles['short-heading']}>Diversification<svg className='inline text-white pl-[5px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></h2>
                </Link>
               
               
                <p className={`${styles['full-content']} ${content.className}`}>In the investment world, diversification reigns supreme. It's the art of <b>not putting all your eggs in one basket.</b> </p>
              </div>
             
            </div>
            <div className={`bg-violet-800 w-[50%] h-[300px] relative ${styles['hover-effect-wrapper']}`}>
              <div className={styles['hover-effect']}>
                <Image
                  src="/investing.png"
                  alt="alt"
                  layout="fill"
                  objectFit="cover"
                  className='opacity-[0.9]'
                />
              </div>
              <div className={styles['hover-overlay']}></div>
              <div className={styles['heading']}>
                <Link href="/blog">
                <h2 className={styles['short-heading']}>Investing<svg className='inline text-white pl-[5px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></h2></Link>
                
                
                <p className={`${styles['full-content']} ${content.className}`}>The financial landscape has undergone a seismic shift with the relentless march of technology.</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Blog3;
