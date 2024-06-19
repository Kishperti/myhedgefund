// "use client"
import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '@/components/Footer'
import Head from 'next/head';

export const metadata = {
  title: "Join Us | HedgeMyFunds",
  description: "Become a part of the HedgeMyFunds team. Explore our career opportunities and learn how you can contribute to our consulting services for hedge funds.",
  icons: {
    icon: "/Logo1.png",
  },
};


const layout = ({ children }) => {
  return (
    <>
     <Head>
      <meta name="keywords" content="Join HedgeMyFunds, hedge fund consulting careers, hedge fund consulting opportunities, hedge fund consulting jobs" />
      <meta name="author" content="HedgeMyFunds" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <body>
    <div>
      {children}
      <Footer />
    </div>
    </body>
  </>





    
  )
}

export default layout
