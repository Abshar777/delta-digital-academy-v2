"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FAQS = [
  {
    q: "Who is this course ideal for?",
    a: "Anyone eager to build a digital career! Whether you're a student exploring new skills, a working professional upgrading your profile, a homemaker restarting your journey, or an entrepreneur looking to grow your business — this program fits all.",
  },
  {
    q: "Is prior knowledge required to start this course?",
    a: "Not at all. We begin from the basics and gradually level you up with hands-on projects, making it easy for beginners to learn and grow.",
  },
  {
    q: "Will the online classes be as effective as offline?",
    a: "Yes — our online sessions are fully interactive, mentor-driven, and packed with practical tasks. You get the same depth, guidance, and learning experience as our in-class students.",
  },
  {
    q: "What if I miss classes?",
    a: "We ensure that you'll be placed in an alternate batch covering the same topics, or we'll schedule extra sessions depending on the mentor's availability.",
  },
  {
    q: "What makes Delta Digital Academy stand out?",
    a: "We offer a 100% internship guarantee for selected students. Our training is built on real-world learning — live projects, practical assignments, agency-style workflows, and continuous mentor support.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(".faq-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".faq-list", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-28 md:py-36 relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <div className="faq-header">
            <span className="text-[#C6F83A] text-xs tracking-[0.3em] uppercase font-medium">
              Have Questions?
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#171717] mt-4 tracking-tight leading-[1.1]">
              Frequently
              <br />
              Asked
              <br />
              <span className="italic text-[#C6F83A]">Questions</span>
            </h2>
            <p className="text-[#171717]/90 text-sm mt-6 font-light">
              Got questions? We&rsquo;ve got answers for you.
            </p>
          </div>

          {/* Right */}
          <div className="faq-list space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={cn(
                    "w-full text-left p-5 rounded-xl border transition-all duration-300",
                    openIndex === i
                      ? "bg-[#C6F83A]/5 border-[#171717]/15"
                      : "bg-transparent border-[#171717]/10 hover:border-[#C6F83A]"
                  )}
                >
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[#171717] text-sm md:text-base font-medium">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "text-[#C6F83A] text-xl transition-transform duration-300 flex-shrink-0",
                        openIndex === i ? "rotate-45" : ""
                      )}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openIndex === i ? "max-h-60 mt-4" : "max-h-0"
                    )}
                  >
                    <p className="text-[#171717]/90 text-sm leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
