// "use client"
import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '@/components/Footer'
import Head from 'next/head'
export const metadata = {
  title: "Blog | HedgeMyFunds",
  description: "Stay updated with the latest insights, news, and trends in hedge fund consulting from the experts at HedgeMyFunds.",
  icons: {
    icon: "/Logo1.png",
  },
};


const layout = ({ children }) => {
  return (
    <>
      <Head>
      <meta name="keywords" content="HedgeMyFunds blog, hedge fund insights, hedge fund news, hedge fund trends, hedge fund consulting blog" />
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
