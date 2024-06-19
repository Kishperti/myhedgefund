// "use client"
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '@/components/Footer'
export const metadata = {
  title: "About Us | HedgeMyFunds",
  description: "Learn more about HedgeMyFunds, our mission, vision, and the expert team behind our comprehensive consulting services for hedge funds.",
  icons: {
    icon: "/Logo1.png",
  },
};



const layout = ({ children }) => {
  return (
    <>
    <Head>
      <meta name="keywords" content="About HedgeMyFunds, hedge fund consulting team, hedge fund consulting mission, hedge fund consulting vision" />
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
