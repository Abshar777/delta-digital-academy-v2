"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "/g1.png",
  "/g2.png",
  "/g3.png",
  "/g4.png",
  "/g5.png",
  "/g6.png",
  "/g7.png",
];

const LifeGallery: React.FC = () => {
  return (
    <div className="overflow-hidden -mt-1 bg-[#171717]">
      <div className="md:block w-full h-full hidden">
        <PinDesktopGallery />
      </div>
      <div className="md:hidden w-full pb-10 h-full block">
        <MobileGallery />
      </div>
    </div>
  );
};

export default LifeGallery;

export const PinDesktopGallery = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return; // 🚫 disable GSAP horizontal scroll on mobile

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

    return () => {
      pin.kill();
    };
  }, [isMobile]);
  return (
    <div ref={isMobile ? null : triggerRef}>
      <div
        ref={isMobile ? null : sectionRef}
        className="
             md:h-screen
            w-full md:w-[300vw]
            flex flex-col md:flex-row
            items-center
            relative
            px-4 md:px-20
            gap-6 md:gap-8
  ̰         "
      >
        {/* TEXT */}
        <div
          className="
              static md:absolute
              mt-16 md:mt-0
              md:top-20 md:left-20
              z-10
              text-center md:text-left
            "
        >
          <h2 className="text-white text-4xl sm:text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none">
            INSIDE THE <br />
            <span className="text-[#C1F42D]">ARCHIVE</span>
          </h2>

          <p className="text-gray-400 font-bold uppercase tracking-widest mt-4 text-xs sm:text-sm">
            Student life is far from ordinary — It's extraordinary!
          </p>
        </div>

        {/* GALLERY */}
        <div
          className="
              flex flex-col md:flex-row
              gap-6 md:gap-8
              items-center
              mt-10 md:mt-32
              w-full
            "
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              whileHover={
                !isMobile ? { scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 } : {}
              }
              className="
                  flex-shrink-0
                  border-4 sm:border-6 md:border-8
                  border-white neo-shadow
                  h-[260px] sm:h-[320px] md:h-[60vh]
                  w-[90%] sm:w-[380px] md:w-[450px]
                  bg-gray-800 overflow-hidden relative
                "
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-3 right-3 bg-[#C1F42D] border-2 border-[#171717] px-3 py-1 font-black text-xs text-[#171717]">
                MOMENTS
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const MobileGallery = () => {
  return (
    <div>
      <div
        className="
             md:h-screen
            w-full md:w-[300vw]
            flex flex-col md:flex-row
            items-center
            relative
            px-4 md:px-20
            gap-6 md:gap-8
          "
      >
        {/* TEXT */}
        <div
          className="
              static md:absolute
              mt-16 md:mt-0
              md:top-20 md:left-20
              z-10
              text-center md:text-left
            "
        >
          <h2 className="text-white text-4xl sm:text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none">
            INSIDE THE <br />
            <span className="text-[#C1F42D]">ARCHIVE</span>
          </h2>

          <p className="text-gray-400 font-bold uppercase tracking-widest mt-4 text-xs sm:text-sm">
            Student life is far from ordinary — It's extraordinary!
          </p>
        </div>

        {/* GALLERY */}
        <div
          className="
              flex flex-col md:flex-row
              gap-6 md:gap-8
              items-center
              mt-10 md:mt-32
              w-full
            "
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              className="
                  flex-shrink-0
                  border-4 sm:border-6 md:border-8
                  border-white neo-shadow
                  h-[260px] sm:h-[320px] md:h-[60vh]
                  w-[90%] sm:w-[380px] md:w-[450px]
                  bg-gray-800 overflow-hidden relative
                "
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-3 right-3 bg-[#C1F42D] border-2 border-[#171717] px-3 py-1 font-black text-xs text-[#171717]">
                MOMENTS
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
