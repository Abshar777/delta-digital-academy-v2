"use client";
import React, { useEffect, useRef } from "react";
import { FaGoogle, FaLinkedin, FaWordpress } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const SERVICES = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "High-octane digital experiences from prototypes to enterprise-grade web applications.",
    icon: <FaWordpress className="w-5 h-5" />,
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Surgical SEO strategies to dominate the first page and capture organic traffic.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: "google-ads",
    title: "Google Ads",
    description: "Precision targeting that turns searches into sales with data-backed campaigns.",
    icon: <FaGoogle className="w-5 h-5" />,
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    description: "Engagement-heavy strategies that turn scrollers into brand evangelists.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    description: "Stop the scroll on Facebook & Instagram with surgical precision.",
    icon: <FaMeta className="w-5 h-5" />,
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "High-fidelity visual storytelling and copy that resonates with your audience.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    id: "linkedin-ads",
    title: "LinkedIn Ads",
    description: "Build an unshakeable digital presence that commands respect.",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    id: "campaign",
    title: "Campaign Strategy",
    description: "High-level strategy, leadership, and emotional intelligence for collective success.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      gsap.from(".service-item", {
        y: 60,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-28 md:py-36 relative">
      <div className="absolute inset-0 line-grid opacity-40" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="service-header text-center mb-20">
          <span className="text-[#C6F83A] text-xs tracking-[0.3em] uppercase font-medium">
            What We Teach
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#171717] mt-4 tracking-tight">
            Our <span className="italic text-[#C6F83A]">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="service-item"
            >
              <div className="glass-panel rounded-2xl p-6 h-full flex flex-col gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#C6F83A]/10 border border-[#171717]/20 flex items-center justify-center text-[#C6F83A] group-hover:bg-[#C6F83A]/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-[#171717] text-sm md:text-base font-semibold leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#171717]/90 text-xs leading-relaxed font-light hidden md:block">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
