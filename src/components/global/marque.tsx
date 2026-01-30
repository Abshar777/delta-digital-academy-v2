import React from "react";

interface MarqueeProps {
  text1: string;
  text2: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text1, text2 }) => {
  return (
    <div className="relative py-12 overflow-hidden border-y-2 border-[#171717]">
      <div className="flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-3xl md:text-5xl font-bold italic text-[#171717]/30 mx-6 tracking-tight">
              {text1} <span className="text-[#C6F83A]/60 mx-4">&bull;</span>
            </span>
          ))}
        </div>
        <div className="animate-marquee whitespace-nowrap flex items-center" aria-hidden>
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-3xl md:text-5xl font-bold italic text-[#171717]/30 mx-6 tracking-tight">
              {text2} <span className="text-[#C6F83A]/60 mx-4">&bull;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
