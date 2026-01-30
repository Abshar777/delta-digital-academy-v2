"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LOGOS = [
  { name: "Oracle", url: "/p1.png" },
  { name: "Google", url: "/p2.png" },
  { name: "Amazon", url: "/p3.png" },
  { name: "Meta", url: "/p4.png" },
  { name: "Accenture", url: "/p5.png" },
  { name: "Flipkart", url: "/p6.png" },
  { name: "Bosch", url: "/p7.png" },
  { name: "TCS", url: "/p8.png" },
];

const MentorsWorkWith: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".logo-item");
      if (!items.length) return;
      const totalWidth = items.reduce((acc, el) => acc + el.offsetWidth, 0);
      gsap.set(items, { x: (i) => i * items[0].offsetWidth });
      gsap.to(items, {
        x: `-=${totalWidth}`,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 relative border-y-2 border-[#171717]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#171717] tracking-tight mb-12">
          Where Our Mentors{" "}
          <span className="italic text-[#C6F83A]">Make an Impact</span>
        </h2>
        <div className="flex relative max-w-7xl overflow-hidden justify-center gap-16">
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="logo-item shrink-0 flex items-center justify-center w-24 md:w-32 h-12 opacity-70 hover:opacity-100 transition-opacity"
            >
              <img src={logo.url} alt={logo.name} className="w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsWorkWith;
