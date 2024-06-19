// "use client"
import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '@/components/Footer'
import Head from 'next/head';

export const metadata = {
  title: "Services | HedgeMyFunds",
  description: "Discover the range of consulting services offered by HedgeMyFunds, including tax, regulatory & finance consulting, ESG & risk consulting, deals consulting, assurance services, and global transaction services.",
  icons: {
    icon: "/Logo1.png",
  },
};




const layout = ({ children }) => {
  return (
    <>
   <Head>
      <meta name="keywords" content="HedgeMyFunds services, hedge fund consulting services, tax consulting, regulatory consulting, finance consulting, ESG consulting, risk consulting, deals consulting, assurance services, global transaction services" />
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
