"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/use-mobile";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const IMAGES = ["/g1.png", "/g2.png", "/g3.png", "/g4.png", "/g5.png", "/g6.png", "/g7.png"];

const LifeGallery: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="md:block hidden">
        <PinDesktopGallery />
      </div>
      <div className="md:hidden block">
        <MobileGallery />
      </div>
    </div>
  );
};

export default LifeGallery;

const GalleryHeader = ({ isDark = false }: { isDark?: boolean }) => (
  <div className="static md:absolute md:top-20 md:left-20 z-10 text-center md:text-left mt-16 md:mt-0">
    <span className="text-[#C6F83A] text-xs tracking-[0.3em] uppercase font-medium block mb-4">
      Life at Delta
    </span>
    <h2 className={`${isDark ? 'text-white' : 'text-[#171717]'} text-4xl md:text-8xl font-bold tracking-tight leading-[0.95]`}>
      Inside the
      <br />
      <span className="italic text-[#C6F83A]">Archive</span>
    </h2>
    <p className={`${isDark ? 'text-white/80' : 'text-[#171717]/90'} tracking-wider mt-4 text-xs uppercase font-medium`}>
      Student life is far from ordinary — It&rsquo;s extraordinary!
    </p>
  </div>
);

const GalleryImage = ({ img, i }: { img: string; i: number }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="flex-shrink-0 rounded-2xl overflow-hidden h-[260px] sm:h-[320px] md:h-[60vh] w-[85%] sm:w-[380px] md:w-[420px] bg-[#171717] relative group border-2 border-[#171717]"
  >
    <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    <div className="absolute bottom-4 right-4 bg-[#C6F83A] text-[#171717] px-3 py-1 rounded text-[10px] tracking-widest uppercase font-bold">
      Moments
    </div>
  </motion.div>
);

export const PinDesktopGallery = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-175vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => { pin.kill(); };
  }, [isMobile]);

  return (
    <div ref={isMobile ? null : triggerRef} className="bg-[#171717]">
      <div
        ref={isMobile ? null : sectionRef}
        className="md:h-screen w-full md:w-[300vw] flex flex-col md:flex-row items-center relative px-6 md:px-20 gap-6"
      >
        <GalleryHeader isDark />
        <div className="flex flex-col md:flex-row gap-6 items-center mt-10 md:mt-32 w-full">
          {IMAGES.map((img, i) => (
            <GalleryImage key={i} img={img} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const MobileGallery = () => (
  <div className="bg-[#171717] py-16 px-4">
    <GalleryHeader isDark />
    <div className="flex flex-col gap-4 items-center mt-10">
      {IMAGES.slice(0, 4).map((img, i) => (
        <GalleryImage key={i} img={img} i={i} />
      ))}
    </div>
  </div>
);
