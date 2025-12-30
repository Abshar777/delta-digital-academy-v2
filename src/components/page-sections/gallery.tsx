"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
];

const LifeGallery: React.FC = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden bg-[#171717]">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[300vw] flex items-center relative px-20 gap-8">
          <div className="absolute top-20 left-20 z-10">
            <h2 className="text-white text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              INSIDE THE <br />
              <span className="text-[#C1F42D]">ARCHIVE</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest mt-4">Student life is far from ordinary — It's extraordinary!</p>
          </div>

          <div className="flex gap-8 items-center mt-32">
            {IMAGES.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className={`flex-shrink-0 border-8 border-white neo-shadow h-[60vh] w-[450px] bg-gray-800 overflow-hidden relative`}
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 right-4 bg-[#C1F42D] border-2 border-[#171717] px-3 py-1 font-black text-xs text-[#171717]">
                  SHOT {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeGallery;
