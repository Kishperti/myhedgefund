// "use client"

import React from 'react'

import Head from 'next/head';

export const metadata = {
  title: "Maintenance | HedgeMyFunds",
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
   
    </div>
    </body>
  </>





    
  )
}

export default layout
