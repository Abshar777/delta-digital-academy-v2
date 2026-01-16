import React from "react";

interface MarqueeProps {
  text1: string;
  text2: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text1, text2 }) => {
  return (
    <div className="relative md:h-[30vh] h-[35vh] grid-bg  w-screen overflow-hidden md:py-20 py-20  md:mt-30 mt-10">
      <div className="absolute md:rotate-5 rotate-16 md:w-[110vw] w-[115vw] md:translate-x-[-1%] translate-x-[-5%]  flex overflow-x-hidden bg-[#171717] text-[#C1F42D] py-5 border-y-4 border-[#171717]">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl font-black uppercase mx-8 italic">
              {text1} <span className="mx-4">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="md:-rotate-5 -rotate-16 md:w-[110vw] w-[115vw] absolute md:translate-x-[-1%] translate-x-[-5%] flex overflow-x-hidden bg-[#171717] text-[#C1F42D] py-5 border-y-4 border-[#171717]">
        <div className="animate-marquee-reverse whitespace-nowrap flex  items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl font-black uppercase mx-8 italic">
              {text2} <span className="mx-4">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
