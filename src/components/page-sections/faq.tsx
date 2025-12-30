"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How fast can you ship a prototype?",
    a: "Our standard sprint is 7 days. We don't believe in long-winded discovery phases. We build, we test, we iterate.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Absolutely. We offer 'High-Octane Support' packages that ensure your site stays sharp and your conversions stay high.",
  },
  {
    q: "Can you help with rebranding?",
    a: "Rebranding is our specialty. We help legacy brands shed their old skin and emerge as digital-first powerhouses.",
  },
  {
    q: "What is your primary tech stack?",
    a: "We are experts in the T3 stack, Next.js, and high-performance GSAP animations for the frontend. We build for scale.",
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
    <div className="bg-foreground ">
      <section
        ref={sectionRef}
        className="py-32 bg-background  rounded-b-[4rem] grid-bg px-20  "
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
          <div className="mb-20">
            <div className="bg-primary text-black rounded-full p-3 font-poppins inline-block font-black uppercase tracking-widest text-xs  mb-2 transform">
              JOIN THE ELITE
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-[#171717] capitalize tracking-tighter leading-none">
              frequently <br /> asked questions
            </h2>
            <p className="text-sm mt-2 font-semibold font-poppins">
              Got questions? We've got answers for you.
            </p>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item group">
                <div
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full relative cursor-pointer overflow-hidden transition-all duration-300 flex-col text-left p-3 shadow-[4px_4px_0px_0px_#171717] rounded-2xl border-2 border-[#171717]  ease-in flex justify-between items-center ${
                    openIndex === i
                      ? "bg-[#C1F42D] shadow-[4px_4px_0px_0px_#171717]"
                      : "bg-white hover:bg-[#C1F42D]/30"
                  }`}
                >
                  <div className=" w-full flex justify-between items-center">
                    <span className="text-lg font-poppins   font-black ">
                      {faq.q}
                    </span>
                    <span
                      className={`text-4xl  transition-transform duration-300 ${
                        openIndex === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>

                  <span
                    className={cn(
                      "p-4  transition-all duration-300   bg-white rounded-2xl border-2 border-[#171717] mt-3 text-lg font-medium leading-relaxed",
                      openIndex === i
                        ? "scale-y-100 opacity-100"
                        : " absolute opacity-0 scale-y-0"
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
