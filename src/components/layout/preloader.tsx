"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface IntroPreloaderProps {
//   onComplete?: () => void;
}

const IntroPreloader: React.FC<IntroPreloaderProps> = ({  }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [loaded,setLoaded]=useState(false)
  useEffect(() => {
   setLoaded(true)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(preloaderRef.current, {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
            // onComplete: onComplete
          });
        }
      });

      // 1. Initial State
      gsap.set(".intro-text", { opacity: 0, y: 20 });
      gsap.set(barRef.current, { scaleX: 0 });

      // 2. Counter animation
      const count = { value: 0 };
      gsap.to(count, {
        value: 100,
        duration: 2.5,
        ease: "power1.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerHTML = Math.round(count.value).toString() + "%";
          }
        }
      });

      // 3. Main Sequence
      tl.to(".intro-text-1", { opacity: 1, y: 0, duration: 0.6 })
        .to(".intro-text-1", { opacity: 0, y: -20, delay: 0.4 })
        .to(".intro-text-2", { opacity: 1, y: 0, duration: 0.6 })
        .to(barRef.current, { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, "-=0.6")
        .to(".intro-text-2", { opacity: 0, y: -20, delay: 0.4 })
        .to(".intro-text-3", { opacity: 1, y: 0, scale: 1.1, duration: 0.8, ease: "back.out(2)" })
        .to(preloaderRef.current, { background: "#C1F42D", duration: 0.4 }, "-=0.2")
        .to(".intro-text-3", { color: "#171717", duration: 0.2 }, "-=0.4")
        .to(".counter", { opacity: 0,  duration: 0.1, ease: "back.out(2)" , },"-=0.2")
        .to(".intro-text-3", { opacity: 0, scale: 2, duration: 0.5, ease: "power4.in" }, "+=0.2");
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={preloaderRef}
      className={cn("fixed inset-0 z-[1000]  flex flex-col items-center justify-center bg-[#171717] text-white overflow-hidden",)}
    >
      <div className={cn("relative w-full -translate-y-10 max-w-xl px-10",!loaded && "hidden")}>
        <div ref={textRef} className="text-center  space-grotesk font-black italic tracking-tighter">
          <div className="intro-text intro-text-1 text-3xl sm:text-5xl absolute w-full left-0 top-0">REDEFINING GROWTH.</div>
          <div className="intro-text intro-text-2 text-3xl sm:text-5xl absolute w-full left-0 top-0">ANALYZING TRENDS.</div>
          <div className="intro-text intro-text-3 text-3xl sm:text-7xl absolute w-full md:-left-35 left-0 uppercase -top-10">Delta&nbsp;Digital&nbsp;Academy</div>
        </div>
      </div>

      <div className="absolute bottom-20 left-10 right-10 max-w-4xl mx-auto flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <span className="text-[#C1F42D] font-mono text-sm tracking-widest uppercase">Initializing Academy Core</span>
          <div ref={counterRef} className="md:text-6xl counter text-4xl font-black italic leading-none">0%</div>
        </div>
        <div className="h-1 w-full bg-white/10 relative">
          <div ref={barRef} className="absolute top-0 left-0 h-full  bg-[#C1F42D] origin-left"></div>
        </div>
      </div>
      
      {/* Decorative Retro Grid Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 grid-bg opacity-30"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border border-white/20 grid-bg opacity-30"></div>
      <div className="absolute md:bottom-10 bottom-15 md:right-10 right-5 text-[10px] tracking-[1em] text-white/40 uppercase rotate-90 origin-right">
        delta digital academy
      </div>
    </div>
  );
};

export default IntroPreloader;
