"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { downloadBrochure } from "@/const";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CTASection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="px-4 md:px-8 py-8">
      <section
        ref={containerRef}
        className="py-20 md:py-28 px-6 relative overflow-hidden rounded-3xl border-2 border-[#171717]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(198,248,58,0.08) 0%, rgba(253,255,247,1) 70%)",
        }}
      >
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="cta-content max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#C6F83A] text-xs tracking-[0.4em] uppercase font-medium block mb-8">
            Delta Digital Academy
          </span>

          <h2 className="text-5xl md:text-8xl font-bold text-[#171717] tracking-tight leading-[0.95] mb-12">
            Ready to
            <br />
            <span className="italic text-[#C6F83A]">Level Up?</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/+971521240237"
              className="btn-luxury px-10 py-5 rounded-full text-sm tracking-widest w-full sm:w-auto text-center"
            >
              Book a Strategy Call
            </a>
            <button
              onClick={downloadBrochure}
              className="btn-outline-gold px-10 py-5 rounded-full text-sm tracking-wider w-full sm:w-auto cursor-pointer"
            >
              Download Brochure
            </button>
          </div>

          <div className="mt-20 editorial-line" />
          <p className="text-[#171717]/90 text-sm mt-6 italic font-light">
            &ldquo;Your digital legacy starts with a single click.&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
