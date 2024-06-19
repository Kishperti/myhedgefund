import React from 'react';
import { Bebas_Neue, Manrope } from 'next/font/google';

const heading = Bebas_Neue({
  subsets: ["latin"],
  weight: '400'
});

const content = Manrope({
  subsets: ["latin"],
  weight: ['400', '500','700']
});

const Test = () => {
  return (
    <div className='flex flex-col lg:flex-row bg-black text-white justify-between text-center'>
      <div className='w-full lg:w-[33.33%] text-black bg-[#efefe9] pt-[20px] pb-[20px] px-[20px] border-[1px] border-white max-h-[500px]'>
        <h1 className={`font-bold text-[32px] lg:text-[42px] ${heading.className}`}>GROW WITH US</h1>
        <p className={`text-justify mt-3 text-[16px] text-black font-[500] lg:text-[17px] ${content.className}`}>hedgemyfunds invites you to embark on a transformative journey towards becoming an investment savant, achieving financial autonomy, and shaping your future on your terms. We operate under the core belief that financial mastery is attainable for all. Our mission is to equip aspiring investors with the requisite knowledge and tools to navigate the financial markets and achieve their long-term financial objectives.We champion a holistic approach that prioritizes both financial empowerment and realistic goal setting. Partner with us to embark on this enriching path towards financial independence.
</p>
      </div>
      <div className='w-full lg:w-[33.33%] text-black bg-[#ece8e8] pt-[20px] pb-[20px] px-[20px] border-[1px] border-white border-t-0 lg:border-t lg:border-l-0 max-h-[500px]'>
        <h1 className={`font-bold text-[32px] lg:text-[42px] ${heading.className}`}>INVEST WITH US</h1>
        <p className={`text-justify mt-3 text-[16px] lg:text-[17px] font-[500] ${content.className}`}>Leverage our expertise to cultivate your wealth potential at hedgemyfunds We possess a proven track and theoretical data analysis record in generating superior returns across a diversified portfolio encompassing Indian equities, commodities, and other meticulously selected financial instruments dealing in Class 3 and above investments. Our team of seasoned investment professionals who are trained in-house with our industrial training programmes meticulously analyzes market trends, identifies undervalued assets, and implements strategic investment approaches designed to achieve your financial goals.</p>
      </div>
      <div className='w-full lg:w-[33.33%] text-black bg-[#e7ecea] pt-[20px] pb-[20px] px-[20px] border-[1px] border-white border-t-0 lg:border-t lg:border-l-0 max-h-[500px]'>
        <h1 className={`font-bold text-[32px] lg:text-[42px] ${heading.className}`}>LEARN WITH US</h1>
        <p className={`text-justify mt-3 text-[16px] lg:text-[17px] font-[500] ${content.className}`}>Cultivate your financial expertise at hedgemyfunds Our immersive learning programme  offers a comprehensive curriculum designed to equip you with the theoretical knowledge and practical skills necessary to excel in the financial markets. Through a blend of interactive modules, industry case studies, and real-world experience, you'll gain a deep understanding of core financial concepts, investment strategies, and risk management techniques. Furthermore, we distinguish ourselves by providing unparalleled industry exposure.</p>
      </div>
    </div>
  );
}

export default Test;
