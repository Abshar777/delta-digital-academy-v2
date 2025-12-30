"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LOGOS = [
  { name: 'Oracle', url: '/p1.png' },
  { name: 'Google', url: '/p2.png' },
  { name: 'Amazon', url: '/p3.png' },
  { name: 'Meta', url: '/p4.png' },
  { name: 'Accenture', url: '/p5.png' },
  { name: 'Flipkart', url: '/p6.png' },
  { name: 'Bosch', url: '/p7.png' },
  { name: 'Bosch', url: '/p8.png' },
];

const MentorsWorkWith: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".logo-item");
  
      if (!items.length) return;
  
      const totalWidth = items.reduce(
        (acc, el) => acc + el.offsetWidth,
        0
      );
  
      gsap.set(items, {
        x: (i) => i * items[0].offsetWidth,
      });
  
      gsap.to(items, {
        x: `-=${totalWidth}`,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }, containerRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <section ref={containerRef} className="py-24 px-6 bg-background grid-bg border-b-4 border-[#171717]">
      <div className="max-w-7xl  mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#171717] uppercase tracking-tighter leading-none mb-16 italic">
        Where Our Mentors <br />
          <span className="text-[#C1F42D] bg-[#171717] px-4 py-1 inline-block transform -rotate-1 mt-2">Make an Impact</span>
        </h2>
        
        <div className="flex  relative max-w-7xl  overflow-hidden  justify-center gap-12 md:gap-20">
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div 
              key={i} 
              className="logo-item   shrink-0 transition-all duration-300 hover:scale-110 flex items-center justify-center w-24 md:w-32 h-12"
            >
              <img src={logo.url} alt={logo.name} className="w-full  object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsWorkWith;
