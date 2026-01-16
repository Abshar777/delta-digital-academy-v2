"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Professional {
  name: string;
  role: string;
  description: string;
  image: string;
}

const PROFESSIONALS: Professional[] = [
  {
    name: "Minhath ",
    role: "Academic Head",
    description:
      "Guides the academy’s vision by upholding high curriculum standards and delivering training that bridges theory with real world industry execution.",
    image:
      "/m1-1.png",
  },
  {
    name: "A R S Ashik",
    role: "Chief Mentor",
    description:
      "Leads a network of mentors, aligning strong theoretical foundations with hands on industry execution. Builds industry ready professionals through practical, performance driven learning.",
    image:
      "/m2.png",
  },
  // {
  //   name: "AARIA",
  //   role: "Chief Evangelist & Strategy Officer",
  //   description:
  //     "Drives SaaS strategy, product roadmap, and go-to-market for no-code AI agents.",
  //   image:
  //     "/m3.png",

  // },

];

const AIProfessionalSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ai-title", {
        scrollTrigger: {
          trigger: ".ai-title",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    id="mentors"
      ref={sectionRef}
      className="bg-[#171717] -mt-1 w-full py-32 md:px-6 px-3 overflow-hidden"
    >
      <div className="flex  mb-20 ai-title flex-col justify-center w-full items-center gap-3">
        <p className=" w-fit  bg-primary px-6 text-center  rounded-full text-foreground bg md:text-md text-sm py-2 font-semibold font-poppins">
          our mentors
        </p>
        <h2 className="md:text-5xl text-4xl  text-center font-black text-background capitalize tracking-tighter leading-none">
          Meet Our Leading{" "} <br />
          <span className="text-[#C1F42D]">
            Digital Marketing Professionals
          </span>
        </h2>
      </div>

      <div className="grid md:px-10 px-2 grid-cols-1 sm:grid-cols-2 md:gap-0 gap-8 lg:grid-cols-2 md:w-3/4 mx-auto">
        {PROFESSIONALS.map((pro, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="flex flex-col items-center text-center group"
          >
            {/* Image Container with Offset Shape */}
            <div className="relative mb-10">
              {/* Background Offset Shape */}
              <motion.div
                className="absolute -top-3 -right-3 w-48 h-56 bg-[#C1F42D] rounded-3xl z-0"
                animate={{
                  rotate: [2, -2, 2],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Image Frame */}
              <motion.div
                className="relative w-48 h-56 bg-white rounded-3xl overflow-hidden border-4 border-[#171717] z-10"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={pro.image}
                  alt={pro.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>

            {/* Info */}
            <div className="space-y- flex flex-col items-center justify-center">
              <h3 className="text-xl font-black text-white uppercase tracking-tight">
                {pro.name}
              </h3>
              <p className="text-[#C1F42D] text-xs font-bold uppercase tracking-widest leading-snug min-h-[30px]">
                {pro.role}
              </p>
              <p className="text-gray-400 w-3/4 text-center text-sm leading-relaxed font-medium">
                {pro.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIProfessionalSection;
