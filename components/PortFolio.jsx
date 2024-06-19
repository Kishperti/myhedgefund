import React from 'react'
import styles from '@/css/PortFolio.module.css'
import Link from 'next/link'
const PortFolio = () => {
  return (
    <div className={` ${styles.portfoliosection} bg-white pl-[150px] pr-[150px]`}>
        <br />
        <br />
        <br />
    <div>
      <p className={`border-l-4 border-l-black pl-10`}>
       <h1 className='font-bold'>At Hedgemyfunds.co.in, we’re passionate about empowering our clients to achieve their financial goals.</h1> 
       <br />
       <p className={`text-[14px]`}>We have onboarded and helped many young entrepreneurs in understanding investments and management, to build a diversified investment portfolio that generated an average of at least 20-25% return on investment within a year, through our personalized investment strategies and access to alternative assets, business & brand re- modelling and restructuring capabilities enabling our young minds to achieve their financial goals faster than ever imagined and helping businesses sustain.</p>

        </p>
        <br />
      <p className={`border-l-4 border-l-black pl-10`}>
       <h1 className='font-bold'>At After years of extensive research and data analysis, We recently developed a proprietary <span className={`${styles.textred}`}>AI-powered risk management tool</span> that helps clients identify and mitigate potential risks in their portfolios. This innovative tool has helped our clients reduce their portfolio risk by an average of 15%, giving them greater peace of mind about their investments.</h1> 
       <br />
       <p className={`text-[14px]`}>with our proprietary software’s and services, we plan and intend to disrupt the economic downfall and make economic sustainability of businesses with low profit margin’s and highly variable expenses a reality. Our B2B investors have seen a drawdown of between 50-65% on their annual expenses on their balance sheets while having sustainable YoY growth during early pre-IPO stages.</p>

        </p>
        <br />
     
        <button className={`${styles.portfoliobtn} flex text-[16px] font-bold`}>
          <Link href="/services/#title"><p>
            View All Services</p></Link>
            
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="#1F0052"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
        </button>
        <br />
        <br />
        <br />
    </div>
    </div>
  )
}

export default PortFolio
