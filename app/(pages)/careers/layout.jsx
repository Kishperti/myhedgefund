// "use client"
import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '@/components/Footer'
import Head from 'next/head';
export const metadata = {
  title: "Careers | HedgeMyFunds",
  description: "Join the HedgeMyFunds team and help us provide top-tier consulting services to hedge funds. Explore our career opportunities and apply today.",
  icons: {
    icon: "/Logo1.png",
  },
};



const layout = ({ children }) => {
  return (
    <>
    <Head>
      <meta name="keywords" content="HedgeMyFunds careers, hedge fund consulting jobs, join HedgeMyFunds, hedge fund consulting careers" />
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
