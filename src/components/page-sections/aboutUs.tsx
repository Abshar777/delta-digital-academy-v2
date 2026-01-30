"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: { trigger: ".about-content", start: "top 80%" },
      });

      gsap.from(".about-video", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: { trigger: ".about-video", start: "top 85%" },
      });

      gsap.from(".about-card", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-cards", start: "top 85%" },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="w-full py-24 md:py-32 relative">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 about-content">
          {/* Left */}
          <div className="flex flex-col justify-center gap-6">
            <span className="about-reveal text-[#C6F83A] text-xs tracking-[0.3em] uppercase font-medium">
              About the Academy
            </span>
            <h2 className="about-reveal text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1]">
              Dubai&rsquo;s Best Academy
              <br />
              <span className="italic text-[#C6F83A]">For Digital Marketing</span>
              <br />
            </h2>
            <p className="about-reveal text-[#171717]/90 text-sm md:text-base leading-relaxed max-w-lg font-light">
              Delta Digital Academy is a powerhouse of creative thinkers,
              marketers, and strategists dedicated to helping brands grow
              online. From smart ads to stunning websites and engaging content,
              we build everything your digital presence needs.
            </p>

            <div className="about-cards grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="about-card glass-panel rounded-2xl p-6">
                <h3 className="text-[#C6F83A] text-lg font-semibold mb-3">Vision</h3>
                <p className="text-[#171717]/90 text-xs leading-relaxed font-light">
                  Build a future where digital education is accessible to anyone — students,
                  professionals, homemakers, and entrepreneurs — regardless of time or
                  circumstance. Shaping confident future marketers through flexible,
                  high-quality education.
                </p>
              </div>
              <div className="about-card glass-panel rounded-2xl p-6">
                <h3 className="text-[#C6F83A] text-lg font-semibold mb-3">Mission</h3>
                <p className="text-[#171717]/90 text-xs leading-relaxed font-light">
                  Make digital marketing a skill everyone can learn, understand, and
                  confidently use. Offering flexible, practical, and affordable training
                  that empowers every individual to become digitally capable.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Video */}
          <div className="w-full flex lg:justify-end items-center">
            <div className="about-video w-full lg:w-[85%] aspect-[3/4] bg-[#FFFFFF] rounded-3xl overflow-hidden relative">
              <video
                src="/1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFF]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="editorial-line mb-4" />
                <p className="text-[#C6F83A] text-xs tracking-[0.2em] uppercase font-medium">
                  Life at Delta Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
