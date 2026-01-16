
import React from 'react';
import { Button } from '../ui/button';

interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface ProgramCardProps {
  title: string;
  duration: string;
  mode: string;
  stats: Stat[];
  image: string;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, duration, mode, stats, image, index }) => {
  return (
    <div className="group relative bg-white rounded-2xl border-4 border-[#171717] neo-shadow flex flex-col lg:flex-row overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(23,23,23,1)]">
      {/* Content Side */}
      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-[#171717] rounded-full text-white px-4 py-1 text-xs font-black uppercase tracking-widest border-2 border-[#171717]">
              {duration}
            </span>
            <span className="bg-[#C1F42D] rounded-full text-[#171717] px-4 py-1 text-xs font-black uppercase tracking-widest border-2 border-[#171717]">
              {mode}
            </span>
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-black text-[#171717] uppercase tracking-tighter leading-none mb-10">
            {title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="text-[#171717] mb-2 opacity-100 transition-opacity">
                  {stat.icon}
                </div>
                <p className="text-xl font-black text-[#171717] leading-none mb-1">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#171717] opacity-60 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Button
            size={"xl"}
            className="rounded-full hover:bg-foreground  hover:text-background hover:shadow-[1px_1px_0_0_#000] transition-all text-md ease-in font-semibold font-poppins  text-foreground border-2 border-foreground  shadow-[3px_3px_0_0_#000]"
          >
            Apply Now
          </Button>
      </div>

      {/* Image Side */}
      <div className="lg:w-2/5 relative md:h-[78vh] h-[50vh] border-t-4 lg:border-t-0 lg:border-l-4 border-[#171717] overflow-hidden bg-[#F5F5F5]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-[#C1F42D] mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity"></div>
        {/* Floating Tag */}
        <div className="absolute bottom-6 right-6 bg-white border-4 border-[#171717] px-4 py-2 font-black uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_#171717]">
          Now Available In Offer
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
