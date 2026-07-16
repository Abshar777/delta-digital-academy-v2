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
  specilisation: string;
  image: string;
}

const PROFESSIONALS: Professional[] = [
  {
    name: "Minhath ",
    role: "Academic Head",
    specilisation: "Specialized in Performance Marketing",
    // description:
    //   "Guides the academy’s vision by upholding high curriculum standards and delivering training that bridges theory with real world industry execution.",
    description:
      "Handled and scaled 5.2 Crore+ ad  budgets across Meta & Google platforms, driving measurable growth for brands across multiple industries. Brings a strategic leadership mindset to mentoring teams and turning ad spend into predictable, sustainable business growth.",
    image: "/m1-1.png",
  },
  {
    name: "A R S Ashik",
    role: "Chief Mentor",
    specilisation: "Specialized in SEO and Digital Advertising ",
    description:
      "A multi-certified digital marketing expert with certifications from Google, LinkedIn, NIDM, SEMrush, HubSpot Academy, and NSDC. Managed 3.5 Crore+ ad spend, with hands on expertise in Google Ads, SEO, analytics, and conversion optimisation, blending certified knowledge with real world execution.",
    image: "/m11.png",
  },
  {
    name: "Mohammed Fuad",
    role: "Mentor",
    specilisation:"Specialized in web design and digital marketing solutions",
    description:
      "Experienced digital marketing professional specializing in SEO, PPC, social media marketing, web design, and AI tools. Expert in delivering result driven strategies for businesses and guiding 2000+ students through industry focused digital marketing courses and online marketing courses, helping them build real world skills in SEO, web design, and performance marketing.",
    image:
      "/m4.jpeg",

  },
  {
    name: "Surabhi Thekkuveettil",
    role: "Mentor",
    specilisation:"Specialized in Google Ads and Performance Marketing",
    description:
      "A Google Ads specialist experienced in SEM, SEO, and paid advertising, managing large search, display, and video campaigns for international clients with monthly budgets of $50,000–$70,000+. Skilled in improving CTR, conversions, and campaign performance.",
    image:
      "/m6.png",

  },
  {
    name: "Aaliya Parveen",
    role: "Mentor",
    specilisation:"Specialist in Meta’s Advertising Ecosystem and Performance Marketing. Backed by a strong teaching and mentorship background.",
    description:
      "A performance marketing specialist with expertise in Meta Ads, Social Media Marketing , Search Engine Optimization , and data driven advertising strategies. Skilled in building and scaling high performing campaigns focused on growth, engagement, and conversions. With over 3+ years of experience, has trained 4000+ students through practical digital marketing courses and online marketing courses, delivering hands on industry focused mentorship and real time learning experiences",
    image: "/aaliya-parveen.jpg",

  },
  {
    name: "Mary Mruthula Roy",
    role: "Mentor",
    specilisation:"Specialized in Google, Meta Advertising Platforms and Performance Marketing",
    description:
      "Experienced in Google Ads, Meta Ads, and SEO, delivering data driven strategies to improve conversions and campaign performance. Skilled in performance marketing, remarketing, audience targeting, and managing enterprise level ad budgets up to 90,000 AUD per month. Passionate about mentoring students through digital marketing courses and online marketing courses with practical industry expertise",
    image: "/mary-roy.jpg",

  },
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
          Meet Our Leading <br />
          <span className="text-[#C1F42D]">
            Digital Marketing Professionals
          </span>
        </h2>
      </div>

      <div className="grid md:px-10 px-2 grid-cols-1 sm:grid-cols-2   md:grid-cols-2 md:gap-8 gap-8 lg:grid-cols-2 md:w-3/4 mx-auto">
        {PROFESSIONALS.map((pro, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="flex flex-col md:mb-6 items-center text-center group"
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
                className="relative w-50 h-58 bg-white rounded-3xl overflow-hidden border-4 border-[#171717] z-10"
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
              <p className="text-[#C1F42D] mb-2 text-xs font-bold uppercase tracking-widest leading-snug min-h-[30px]">
                {pro.specilisation}
              </p>
              <p className="text-gray-400 w-[98%] text-center text-sm leading-relaxed font-medium">
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
