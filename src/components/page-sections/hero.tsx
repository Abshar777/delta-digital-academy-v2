"use client";
import React, { useEffect, useRef } from "react";
import Timer from "./timer";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { downloadBrochure } from "@/const";

const Hero = () => {
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.4 } });

      gsap.set(".hero-text", { y: 80, opacity: 0 });
      gsap.set(".hero-btn", { y: 30, opacity: 0 });
      gsap.set(".hero-line", { scaleX: 0 });

      tl.to(".hero-text", { y: 0, opacity: 1, stagger: 0.15, delay: 0.3 })
        .to(".hero-line", { scaleX: 1, duration: 1, ease: "expo.inOut" }, "-=0.8")
        .to(".hero-btn", { y: 0, opacity: 1, stagger: 0.1 }, "-=0.6");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col min-h-screen relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFFF7]" />

      {/* Ambient gold glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C6F83A]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C6F83A]/3 rounded-full blur-[100px]" />

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 px-6 pt-24 pb-16">
        {/* Eyebrow */}
        <motion.div className="hero-text mb-6">
          <span className="text-[#C6F83A] text-xs md:text-sm font-medium tracking-[0.35em] uppercase">
            School of Digital Marketing &mdash; Dubai
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden">
          <h1 className="hero-text md:text-[5.5rem] text-[2.8rem] leading-[0.95] text-center font-bold italic text-[#171717] tracking-tight">
            Building the Future
          </h1>
        </div>
        <div className="overflow-hidden mt-1">
          <h1 className="hero-text md:text-[5.5rem] text-[2.8rem] leading-[0.95] text-center font-bold italic tracking-tight">
            Marketing{" "}
            <span className="gold-shimmer">Leaders</span>
          </h1>
        </div>

        {/* Divider */}
        <div className="hero-line w-24 h-px bg-[#C6F83A]/40 mt-8 mb-6 origin-center" />

        {/* Sub text */}
        <div className="overflow-hidden">
          <p className="hero-text text-center text-[#171717]/90 md:text-lg text-sm max-w-xl font-light leading-relaxed">
            Built in collaboration with top digital marketing professionals.
            <br className="hidden md:block" />
            Your journey to excellence starts here.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex md:flex-row flex-col mt-10 gap-4 justify-center items-center">
          <button
            onClick={() => router.push("#enroll")}
            className="hero-btn btn-luxury px-10 py-4 rounded-full text-sm tracking-widest cursor-pointer"
          >
            Apply Now
          </button>
          <button
            onClick={downloadBrochure}
            className="hero-btn btn-outline-gold px-10 py-4 rounded-full text-sm tracking-wider cursor-pointer"
          >
            Download Brochure
          </button>
        </div>
      </div>

      {/* Bottom bar with timer */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:px-20 px-6 py-8 flex md:flex-row flex-col md:gap-10 gap-4 justify-between items-center border-t-2 border-[#171717] relative z-10"
      >
        <div>
          <p className="text-[#171717]/90 text-xs uppercase tracking-[0.2em] mb-1">
            Begin your transformation
          </p>
          <h2 className="text-[#171717] md:text-2xl text-xl font-semibold">
            Learn Today.{" "}
            <span className="text-[#C6F83A] italic">Lead Tomorrow.</span>
          </h2>
        </div>
        <Timer />
      </motion.div>
    </div>
  );
};

export default Hero;
