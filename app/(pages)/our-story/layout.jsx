// "use client"
import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '@/components/Footer'
import Head from 'next/head';

export const metadata = {
  title: "Our Story | HedgeMyFunds",
  description: "Explore our case studies to see how HedgeMyFunds has successfully assisted hedge funds with consulting services including tax, regulatory, ESG, and risk management.",
  icons: {
    icon: "/Logo1.png",
  },
};



const layout = ({ children }) => {
  return (
    <>
     <Head>
      <meta name="keywords" content="HedgeMyFunds case studies, hedge fund consulting success stories, hedge fund consulting examples, hedge fund consulting case studies" />
      <meta name="author" content="HedgeMyFunds" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    </Head>
    <body className='bg-white'>
    <div>
    <div className={` h-[100px] flex items-center sticky top-0 z-50  bg-black`}>
        <NavBar />
      </div>
      {children}
      <Footer />
    </div>
    </body>
  </>





    
  )
}

export default layout
