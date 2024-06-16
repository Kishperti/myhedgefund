import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import NavBar from "@/components/NavBar";
import NextTopLoader from 'nextjs-toploader';
const inter = Inter({ subsets: ["latin"] });

export const dynamic = 'auto';

export const metadata = {
  title: "Home | HedgeMyFunds",
  description: "HedgeMyFunds offers comprehensive consulting services to hedge funds, including tax, regulatory & finance consulting, ESG & risk consulting, deals consulting, assurance services, and global transaction services.",
  icons: {
    icon: "/Logo1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{inter.className}  scroll-smooth focus:scroll-auto`}>
        {/* <NavBar /> */}
        <NextTopLoader
  color="rgb(232, 233, 175)"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  showSpinner={false}
  easing="ease"
  speed={200}
  // shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false}
/>
        {children}
        <Analytics />

      </body>
    </html>
  );
}
