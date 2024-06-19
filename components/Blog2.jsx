import React from 'react'
import styles from '@/css/Blog2.module.css'
import Image from 'next/image'
const Blog = () => {
  return (
    <div>
       <h4 className="ml-[150px] font-bold text-[48px] pb-5">Blog</h4>
      {/* <br /> */}
      {/* <br /> */}
      <div className={`${styles['blogs-container']} pl-[150px]  pr-[150px]  pb-[100px] flex`}>
        <div className='flex flex-col'>
           <div className={`${styles['blogs']} p-5 font-bold `}>
            <h1>Why Business Risk Analysis is the Cornerstone of Business Success in India</h1>
            <br />
            <hr />
            <br />
            <Image src="/blogs1.jpg" alt="alt" width={1400} height={100} className={`${styles.blogsimage} w-[100%]`} />
            <br />
            <p className='font-normal'>India's dynamic economy presents a wealth of opportunities for entrepreneurs and investors. However,</p>
            <br />
           <br />
           <button className={styles.button}>Read More</button>
           </div>
           

           
        </div>
        <div>
           <div className={`${styles['blogs']} p-5 font-bold `}>
            <h1>Building a Fortress: Why Corporate Structuring Matters for Your Business</h1>
            <br />
            <hr />
            <br />
            <Image src="/blogs4.jpg" alt="alt" width={1400} height={100} className={`${styles.blogsimage} w-[100%]`} />
            <br />
            <p className='font-normal'>Imagine starting a business. You have a brilliant idea, a burning passion, and the drive to succeed. But before you </p>
            {/* <br /> */}
           <br />
           <br />
          
           <button className={styles.button}>Read More</button>
           </div>
           </div>
           <div>
           <div className={`${styles['blogs']} p-5 font-bold `}>
            <h1>Navigating the Maze: Why Global Legal Compliance is Key for Safe Investments</h1>
            <br />
            <hr />
            <br />
            <Image src="/blogs6.jpg" alt="alt" width={1400} height={100} className={`${styles.blogsimage} w-[100%]`} />
            <br />
            <p className='font-normal'>The world of investment offers exciting opportunities, but venturing into unfamiliar territory can be daunting. This is where </p>
            <br />
           <br />
           <button className={styles.button}>Read More</button>

           </div>
           
           </div>
           
          
           
   
     
         

        
      </div>
    </div>
  )
}

export default Blog
