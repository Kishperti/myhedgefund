import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from '@/css/Carousel.module.css';

const Carousel = () => {
  const [currentDiv, setCurrentDiv] = useState(1);
  const [isSliding, setIsSliding] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State for popup visibility
  const timeoutRef = useRef(null);

  const handleForwardClick = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentDiv((prevDiv) => (prevDiv % 5) + 1);
  };

  const handleBackwardClick = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentDiv((prevDiv) => (prevDiv === 1 ? 5 : prevDiv - 1));
  };

  const handleReadMoreClick = () => {
    setIsPopupVisible(true); // Show the popup
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };

  useEffect(() => {
    if (isSliding) {
      timeoutRef.current = setTimeout(() => {
        setIsSliding(false);
      }, 500); // Duration of the slide transition
    }
    return () => clearTimeout(timeoutRef.current);
  }, [isSliding]);

  const content = [
    {
      backgroundColor: 'rgb(186, 186, 185)',
      text: (
        <>
          <h2 className='font-semibold text-[30px] font-mono'>Why Business Risk Analysis is the Cornerstone of Business Success</h2>
          <br />
          <hr />
          <br />
          <p className='font-sans'>
            India's dynamic economy presents a wealth of opportunities for entrepreneurs and investors. However, navigating this landscape also comes with inherent risks. This is where <b className='text-black'>risk analysis</b> emerges as a critical tool for building strong business models and achieving sustainable growth.
            <br /><br />
            <h2 className='font-semibold text-[30px] font-mono'>Understanding the Risk-scape of India</h2>
            <br />
            The Indian market is subject to various internal and external factors that can impact businesses. Here's a glimpse into some key areas to consider:
            <br /><br />
            <ul className='pl-10 list-disc'>
              <li>
                <b>Economic Fluctuations :</b> India's GDP growth can be susceptible to global economic trends and interest rate changes. Risk analysis helps businesses anticipate these shifts and develop contingency plans.
              </li>
              <br />
              <li>
                <b>Regulatory Landscape :</b> The Indian regulatory environment is constantly evolving. Proactive risk analysis ensures businesses stay compliant and avoid potential disruptions. India's regulatory landscape is characterized by frequent updates and changes, reflecting the country's dynamic economic, social, and technological developments.These changes encompass various sectors including finance, healthcare, technology, environmental protection, and more. Staying compliant with these regulations is crucial for businesses operating in India to maintain their legitimacy and operational continuity.
              </li>
              <br />
              <li>
                <b>Competition :</b> India's business environment is fiercely competitive. Understanding competitor strategies and market trends allows businesses to identify and mitigate competitive risks.
              </li>
              <br />
              <li>
                <b>Operational Challenges :</b> Supply chain disruptions, infrastructure limitations, and talent acquisition can pose operational challenges. Risk analysis helps businesses develop strategies to minimize their impact.
              </li>
            </ul>
            <br />
            <br />
            <button className='border p-4' onClick={handleReadMoreClick}>Read More</button>
          </p>
        </>
      ),
    },
    {
      backgroundColor: 'rgb(186, 186, 185)',
      text: (
        <>
          <h2 className='font-semibold text-[30px] font-mono'>Building a Fortress: Why Corporate Structuring Matters for Your Business</h2>
          <br />
          <hr />
          <br />
          <p className='font-sans'>
            Imagine starting a business. You have a brilliant idea, a burning passion, and the drive to succeed. But before you dive headfirst, consider the foundation upon which you'll build your dream. This is where <b className='text-black'>corporate structuring</b> comes in.
            <br /><br />
            <h2 className='font-semibold text-[30px] font-mono'>What is Corporate Structuring?</h2>
            <br />
            Simply put, corporate structuring is the legal framework that defines how your business operates. It dictates ownership, liability, and tax implications. Common structures include sole proprietorships, partnerships, and corporations (including LLCs).
            <br /><br />
            <h2 className='font-semibold text-[30px] font-mono'>Why Does Corporate Structuring Matter?</h2>
            <br />
            Think of it like building a house. A strong foundation ensures stability and protects your assets from unforeseen storms. Here's why corporate structuring is crucial:
            <br /><br />
            <ul className='list-disc pl-10'>
              <li><b>Limited Liability :</b> A key advantage of corporations and LLCs is limited liability. This means your personal assets (like your house or car) are shielded from business debts and lawsuits. In a sole proprietorship, your personal assets are on the line, a significant risk.</li>
              <br />
              <li><b>Business Continuity :</b> Proper corporate structuring ensures that your business can continue to operate smoothly even if ownership changes or unforeseen events occur.</li>
              <br />
              <li><b>Tax Advantages :</b> Different structures come with various tax benefits. For instance, corporations might enjoy lower tax rates on retained earnings.</li>
              <br />
              <li><b>Scalability and Credibility :</b> A well-structured corporation can attract investors more easily and is often seen as more credible and stable in the marketplace.</li>
            </ul>
          </p>
          <br />
          <br />
          <button className='border p-4' onClick={handleReadMoreClick}>Read More</button>
        </>
      ),
    },
    {
      backgroundColor: 'rgb(186, 186, 185)',
      text: (
        <>
          <h2 className='font-semibold text-[30px] font-mono'>Navigating the Maze: Why Global Compliance is Key for Safe Investments</h2>
          <br />
          <hr />
          <br />
          <p className='font-sans'>
            The world of investment offers exciting opportunities, but venturing into unfamiliar territory can be daunting. This is where <b className='text-black'>global legal compliance</b> emerges as your compass, ensuring a safe and secure journey for both investors and businesses.
            <br /><br />
            <h2 className='font-semibold text-[30px] font-mono'>Why Global Legal Compliance Matters</h2>
            <br />
            In today's interconnected world, investment opportunities often transcend borders. However, each country has its own unique legal framework governing investments. Here's why compliance is crucial:
            <br /><br />
            <ul className='list-disc pl-10'>
              <li><b>Investor Protection :</b> Legal frameworks safeguard investors by setting standards for transparency, disclosure, and fair dealing. Compliance ensures you're investing in a legitimate entity with a clear track record.</li>
              <br />
              <li><b>Reduced Risk :</b> Navigating a complex legal landscape without proper guidance can expose you to unforeseen risks. Compliance helps mitigate these risks, protecting your assets and minimizing potential losses.</li>
              <br />
              <li><b>Market Stability :</b> A robust legal framework fosters trust and confidence within the investment community. Compliance by businesses promotes a healthy and stable financial ecosystem for all stakeholders.</li>
              <br />
              <li><b>Access to Opportunities :</b> Meeting specific legal requirements can unlock access to new investment avenues across geographical borders. Compliance opens doors to a wider range of investment options.</li>
            </ul>
          </p>
          <br />
          <br />
          <button className='border p-4' onClick={handleReadMoreClick}>Read More</button>
        </>
      ),
    },
    {
      backgroundColor: 'rgb(186, 186, 185)',
      text: (
        <>
          <h2 className='font-semibold text-[30px] font-mono'>The Importance of Diversification in Indian Investments</h2>
          <br />
          <hr />
          <br />
          <p className='font-sans'>
            The Indian market, while offering immense potential, also presents unique challenges for investors. Economic fluctuations, sectoral vulnerabilities, and unpredictable regulatory changes can significantly impact investment returns.
            <br /><br />
            <h2 className='font-semibold text-[30px] font-mono'>Why Diversification Matters</h2>
            <br />
            In this context, diversification emerges as a crucial strategy for mitigating risk and enhancing portfolio resilience. This brief explores the importance of diversifying investments and business revenue streams in the Indian market.
            <br /><br />
            <ul className='list-disc pl-10'>
              <li><b>Understanding Diversification :</b> Diversification involves spreading investments across various asset classes, sectors, and geographic locations. This reduces the overall risk of the portfolio by minimizing the impact of negative performance in any single asset or sector.</li>
              <br />
              <li><b>Risk Mitigation :</b> India's market can be volatile, influenced by various economic, political, and social factors. Diversification helps spread risk across different asset classes, sectors, and geographies, ensuring that the underperformance of one investment does not significantly impact the overall portfolio.</li>
              <br />
              <li><b>Capitalizing on Growth Sectors :</b> India is home to several rapidly growing sectors such as technology, pharmaceuticals, and renewable energy. By diversifying investments across these high-growth industries, investors can tap into multiple streams of potential returns, rather than relying on a single sector's performance.</li>
              <br />
              <li><b>Currency Risk Management :</b> For international investors, fluctuations in the Indian rupee can affect investment returns. Diversifying into assets denominated in different currencies or those that are less susceptible to currency volatility can help manage this risk effectively.</li>
            </ul>
          </p>
          <br />
          <br />
          <button className='border p-4' onClick={handleReadMoreClick}>Read More</button>
        </>
      ),
    },
    {
      backgroundColor: 'rgb(186, 186, 185)',
      text: (
        <>
          <h2 className='font-semibold text-[30px] font-mono'>Investing in Indian Equities: Opportunities and Considerations for Cat3 and Above Business Models
</h2>
          <br />
          <hr />
          <br />
          <p className='font-sans'>
          The Indian equity market offers significant potential for investors, particularly those seeking higher returns through Category 3 and above business models. <b className='text-black'>global legal compliance</b> emerges as your compass, ensuring a safe and secure journey for both investors and businesses.
            <br /><br />
            <h2 className='font-semibold text-[30px] font-mono'>Why Global Legal Compliance Matters</h2>
            <br />
            In today's interconnected world, investment opportunities often transcend borders. However, each country has its own unique legal framework governing investments. Here's why compliance is crucial:
            <br /><br />
            <ul className='list-disc pl-10'>
              <li><b>Investor Protection :</b> Legal frameworks safeguard investors by setting standards for transparency, disclosure, and fair dealing. Compliance ensures you're investing in a legitimate entity with a clear track record.</li>
              <br />
              <li><b>Reduced Risk :</b> Navigating a complex legal landscape without proper guidance can expose you to unforeseen risks. Compliance helps mitigate these risks, protecting your assets and minimizing potential losses.</li>
              <br />
              <li><b>Market Stability :</b> A robust legal framework fosters trust and confidence within the investment community. Compliance by businesses promotes a healthy and stable financial ecosystem for all stakeholders.</li>
              <br />
              <li><b>Access to Opportunities :</b> Meeting specific legal requirements can unlock access to new investment avenues across geographical borders. Compliance opens doors to a wider range of investment options.</li>
            </ul>
          </p>
          <br />
          <br />
          <button className='border p-4' onClick={handleReadMoreClick}>Read More</button>
        </>
      ),
    },
  ];

  const { backgroundColor, text } = content[currentDiv - 1];

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div
          className={styles.carouselContent}
          style={{
            transform: `translateX(-${(currentDiv - 1) * 100}%)`,
            transition: isSliding ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {content.map((item, index) => (
            <div key={index} className={styles.carouselItem} style={{ background: item.backgroundColor }}>
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.navigation}>
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackwardClick} className={`text-white text-[25px] border p-4 ${styles.fontawesome}`} />
        <FontAwesomeIcon icon={faArrowRight} onClick={handleForwardClick} className={`text-white text-[25px] border p-4 ${styles.fontawesome}`} />
      </div>
      {isPopupVisible && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <h2>Access Restricted</h2>
            <br />
            <p>Only Authorized Person Can Access The Full Blog</p>
            <FontAwesomeIcon icon={faXmark} onClick={handleClosePopup} className={` p-4 w-10 h-10 hover:cursor-pointer ${styles.fontawesome}`} />
            <br />
            <Link href="/join-us" className='font-bold text-[20px] border border-black p-2'>Join Us</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
