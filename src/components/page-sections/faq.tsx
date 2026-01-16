"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

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
    a: "We ensure that you’ll be placed in an alternate batch covering the same topics, or we’ll schedule extra sessions depending on the mentor’s availability.",
  },
  {
    q: "What makes Delta Digital Academy stand out?",
    a: "We offer a 100% internship guarantee for selected students, setting us apart from traditional institutes. Along with this, our training is built on real-world learning — live projects, practical assignments, agency-style workflows, and continuous mentor support. Our industry-aligned curriculum ensures students develop job-ready skills from day one.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-foreground">
      <section
        ref={sectionRef}
        className="
          py-16 px-4
          md:py-32 md:px-20
          bg-background rounded-b-[4rem] grid-bg
        "
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2  md:gap-10 mx-auto">
          {/* LEFT */}
          <div className="mb-12 md:mb-20">
            <div className="bg-primary text-black rounded-full p-3 font-poppins inline-block font-black uppercase tracking-widest text-xs mb-2">
              JOIN THE ELITE
            </div>

            <h2
              className="
                text-4xl sm:text-5xl md:text-7xl
                font-black text-[#171717]
                capitalize tracking-tighter leading-none
              "
            >
              frequently <br /> asked questions
            </h2>

            <p className="text-sm mt-3 font-semibold font-poppins">
              Got questions? We've got answers for you.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 md:space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item group">
                <div
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className={`
                    w-full relative cursor-pointer overflow-hidden
                    transition-all duration-300 ease-in
                    flex flex-col text-left p-3
                    shadow-[4px_4px_0px_0px_#171717]
                    rounded-2xl border-2 border-[#171717]
                    ${
                      openIndex === i
                        ? "bg-[#C1F42D]"
                        : "bg-white hover:bg-[#C1F42D]/30"
                    }
                  `}
                >
                  <div className="w-full flex justify-between items-center gap-4">
                    <span
                      className="
                        text-base sm:text-lg
                        font-poppins font-black
                      "
                    >
                      {faq.q}
                    </span>

                    <span
                      className={`
                        text-2xl sm:text-3xl md:text-4xl
                        transition-transform duration-300
                        ${openIndex === i ? "rotate-45" : ""}
                      `}
                    >
                      +
                    </span>
                  </div>

                  <span
                    className={cn(
                      `
                        mt-3 bg-white rounded-2xl
                        border-2 border-[#171717]
                        transition-all duration-300
                        p-3 sm:p-4
                        text-sm sm:text-base md:text-lg
                        font-medium leading-relaxed
                      `,
                      openIndex === i
                        ? "scale-y-100 opacity-100"
                        : "absolute scale-y-0 opacity-0"
                    )}
                  >
                    {faq.a}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
