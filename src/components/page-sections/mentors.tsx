"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Professional {
  name: string;
  role: string;
  specilisation: string;
  description: string;
  image: string;
}

const PROFESSIONALS: Professional[] = [
  {
    name: "Minhath",
    role: "Academic Head",
    specilisation: "Performance Marketing",
    description:
      "Handled and scaled ₹5.2 Crore+ ad budgets across Meta & Google platforms, driving measurable growth for brands across multiple industries.",
    image: "/m1-1.png",
  },
  {
    name: "A R S Ashik",
    role: "Chief Mentor",
    specilisation: "SEO & Digital Advertising",
    description:
      "Multi-certified digital marketing expert with certifications from Google, LinkedIn, NIDM, SEMrush, HubSpot Academy, and NSDC. Managed ₹10 Lakhs+ ad spend with hands-on expertise.",
    image: "/m2.png",
  },
];

const AIProfessionalSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mentor-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(".mentor-card", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".mentor-grid", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mentors" ref={sectionRef} className="py-28 md:py-36 relative">
      <div className="absolute inset-0 line-grid opacity-30" />
      {/* Gold ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C6F83A]/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mentor-header text-center mb-20">
          <span className="text-[#C6F83A] text-xs tracking-[0.3em] uppercase font-medium">
            Our Mentors
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#171717] mt-4 tracking-tight">
            Meet Our Leading
            <br />
            <span className="italic text-[#C6F83A]">Digital Marketing</span> Professionals
          </h2>
        </div>

        {/* Cards */}
        <div className="mentor-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PROFESSIONALS.map((pro, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="mentor-card glass-panel rounded-3xl overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <img
                  src={pro.image}
                  alt={pro.name}
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFF]/80 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-[#00b359] text-xs tracking-[0.2em] uppercase font-medium mb-1">
                  {pro.role}
                </p>
                <h3 className="text-[#171717] text-2xl font-bold mb-1">{pro.name}</h3>
                <p className="text-[#2db300] text-xs tracking-wider mb-4">
                  {pro.specilisation}
                </p>
                <div className="editorial-line mb-4" />
                <p className="text-[#171717]/90 text-sm leading-relaxed font-light">
                  {pro.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProfessionalSection;
