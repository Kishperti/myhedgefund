// "use client"
import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '@/components/Footer'
import Head from 'next/head';

export const metadata = {
  title: "Our Team | HedgeMyFunds",
  description: "Meet the expert team at HedgeMyFunds dedicated to providing top-tier consulting services to hedge funds.",
  icons: {
    icon: "/Logo1.png",
  },
};



const layout = ({ children }) => {
  return (
    <>
    <Head>
      <meta name="keywords" content="HedgeMyFunds team, hedge fund consulting team, hedge fund consulting experts, hedge fund consulting professionals" />
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
