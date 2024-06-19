// "use client"
import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '@/components/Footer'
import Head from 'next/head';

export const metadata = {
  title: "Contact Us | HedgeMyFunds",
  description: "Get in touch with HedgeMyFunds to learn more about our consulting services for hedge funds. Contact us today to discuss your needs.",
  icons: {
    icon: "/Logo1.png",
  },
};



const layout = ({ children }) => {
  return (
    <>
   <Head>
      <meta name="keywords" content="Contact HedgeMyFunds, hedge fund consulting contact, hedge fund consulting inquiries, hedge fund consulting services contact" />
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
