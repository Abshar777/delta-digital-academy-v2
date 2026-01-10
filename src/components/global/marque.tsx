import React from "react";

interface MarqueeProps {
  text1: string;
  text2: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text1, text2 }) => {
  return (
    <div className="relative h-[30vh]  mt-30">
      <div className="absolute rotate-5 w-[110vw] translate-x-[-1%]  flex overflow-x-hidden bg-[#171717] text-[#C1F42D] py-5 border-y-4 border-[#171717]">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl font-black uppercase mx-8 italic">
              {text1} <span className="mx-4">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="-rotate-5  w-[110vw] absolute translate-x-[-1%] flex overflow-x-hidden bg-[#171717] text-[#C1F42D] py-5 border-y-4 border-[#171717]">
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
