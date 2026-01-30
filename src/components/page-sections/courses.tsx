"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGoogle,
  FaLinkedin,
  FaWordpress,
  FaSearchengin,
  FaEdit,
  FaUserGraduate,
  FaAd,
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { IoMailSharp, IoShareSocialSharp } from "react-icons/io5";
import { LuBot, LuBrainCircuit, LuChartBar, LuTarget, LuShare2 } from "react-icons/lu";
import { SiMarketo } from "react-icons/si";
import { Sparkles, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MODULES = [
  { label: "Search Engine Optimization", icon: <FaSearchengin className="w-5 h-5" /> },
  { label: "Google Ads", icon: <FaGoogle className="w-5 h-5" /> },
  { label: "Meta Ads", icon: <FaMeta className="w-5 h-5" /> },
  { label: "WordPress", icon: <FaWordpress className="w-5 h-5" /> },
  { label: "Social Media Marketing", icon: <IoShareSocialSharp className="w-5 h-5" /> },
  { label: "Email & Influencer Marketing", icon: <IoMailSharp className="w-5 h-5" /> },
  { label: "LinkedIn Ads", icon: <FaLinkedin className="w-5 h-5" /> },
  { label: "Content Creation & Strategy", icon: <FaEdit className="w-5 h-5" /> },
  { label: "Internship Opportunity", icon: <FaUserGraduate className="w-5 h-5" /> },
  { label: "Campaign Strategy", icon: <FaAd className="w-5 h-5" /> },
  { label: "AI Integrated Course", icon: <LuBot className="w-5 h-5" /> },
  { label: "Marketing Fundamentals", icon: <SiMarketo className="w-5 h-5" /> },
];

const AI_CURRICULUM = [
  {
    id: "advertising",
    icon: <LuTarget className="w-5 h-5" />,
    title: "AI-Enabled Advertising Platforms",
    topics: [
      "Google Smart Ads powered by automated bidding",
      "AI-driven bid optimization and keyword prioritization",
      "Data-driven campaign structuring and optimization",
      "Meta Advantage+ campaigns using automated audience targeting",
      "AI-assisted creative performance testing",
      "Continuous A/B testing supported by platform intelligence",
      "Smart budget allocation based on performance signals",
      "Advanced ad analytics and insight-based optimization",
    ],
  },
  {
    id: "seo",
    icon: <LuBrainCircuit className="w-5 h-5" />,
    title: "AI-Assisted Website & SEO Systems",
    topics: [
      "AI-assisted website design and layout optimization",
      "Intelligent website customization and configuration",
      "AI-assisted domain, hosting & deployment setup",
      "Search-engine-friendly site structuring",
      "AI-supported SEO content writing workflows",
      "On-page, off-page, and technical SEO optimization",
      "Advanced ranking methods guided by data trends",
      "SEO performance monitoring and improvement",
    ],
  },
  {
    id: "campaign",
    icon: <Sparkles className="w-5 h-5" />,
    title: "AI-Driven Campaign Strategy & Execution",
    topics: [
      "AI-informed campaign strategy planning",
      "Full-funnel campaign architecture",
      "Data-guided campaign execution",
      "Scalable growth strategy planning",
    ],
  },
  {
    id: "analytics",
    icon: <LuChartBar className="w-5 h-5" />,
    title: "Data Intelligence, Analytics & Growth",
    topics: [
      "Advanced analytics dashboards and reporting systems",
      "AI-assisted audience behavior analysis",
      "Analytics-driven audience growth strategies",
      "Performance tracking and optimization loops",
      "Competitor and market analysis using data intelligence",
      "Insight-based decision making for campaign scaling",
    ],
  },
  {
    id: "social",
    icon: <LuShare2 className="w-5 h-5" />,
    title: "AI-Optimized Social Media Marketing",
    topics: [
      "Algorithm-aware social media strategies",
      "AI-assisted content planning and scheduling",
      "Content calendar planning backed by performance data",
      "Analytics-based content evaluation",
      "Data-driven audience growth techniques",
    ],
  },
];

const Courses = () => {
  const sectionRef = useRef(null);
  const [activeModule, setActiveModule] = useState<string>("advertising");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".course-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(".course-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".course-card", start: "top 85%" },
      });

      gsap.from(".module-item", {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: ".modules-grid", start: "top 85%" },
      });

      gsap.from(".ai-curriculum", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ai-curriculum", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeData = AI_CURRICULUM.find((m) => m.id === activeModule)!;

  return (
    <section id="courses" ref={sectionRef} className="py-28 md:py-36 relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="course-header text-center mb-16">
          <span className="text-[#C6F83A] text-xs tracking-[0.3em] uppercase font-medium">
            Our Program
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#171717] mt-4 tracking-tight">
            Digital Marketing
            <br /> 
            <span className="italic text-[#C6F83A]">Certification</span>
          </h2>
        </div>

        {/* Course Card */}
        <div className="course-card max-w-5xl mx-auto">
          <div className="glass-panel rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
                <img
                  src="/c1.png"
                  alt="Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FFFFF] hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 bg-[#C6F83A] text-[#FDFFF7] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                  Now Enrolling
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex gap-3 mb-6">
                    <span className="border border-[#C6F83A]/30 text-[#C6F83A] px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                      3.5 Months
                    </span>
                    <span className="border border-[#171717]/30 text-[#171717]/90 px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                      Classroom
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#171717] tracking-tight mb-8">
                    Delta <span className="italic text-[#C6F83A]">Dominate</span>
                  </h3>

                  <div className="modules-grid grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {MODULES.map((mod, i) => (
                      <div
                        key={i}
                        className="module-item flex items-center gap-3 py-2"
                      >
                        <span className="text-[#171717]">{mod.icon}</span>
                        <span className="text-[#171717] text-[10px] font-medium tracking-wide uppercase">{mod.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#enroll"
                    className="btn-luxury inline-block px-10 py-4 rounded-full text-sm tracking-widest cursor-pointer"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── AI-Integrated Curriculum ── */}
        <div className="ai-curriculum mt-28 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#C6F83A]/10 border border-[#171717]/30 rounded-full px-5 py-2 mb-6">
              <LuBot className="w-4 h-4 text-[#C6F83A]" />
              <span className="text-[#171717] text-xs font-semibold tracking-wider uppercase">
                AI-Integrated Curriculum
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-[#171717] tracking-tight">
              AI-Integrated Digital
              <br />
              <span className="italic text-[#C6F83A]">Marketing</span> Program
            </h3>
            <p className="text-[#171717]/90 text-sm md:text-base mt-4 max-w-xl mx-auto font-light leading-relaxed">
              Learn digital marketing with modern AI-powered tools used in real campaigns.
            </p>
          </div>

          {/* Tabs + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {AI_CURRICULUM.map((module) => {
                const isActive = activeModule === module.id;
                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`group flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 cursor-pointer border-2 border-[#171717] ${
                      isActive
                        ? "bg-[#C6F83A] border-[#C6F83A] shadow-lg shadow-[#C6F83A]/20"
                        : "bg-white border-[#171717]/10 hover:border-[#C6F83A] hover:bg-[#FDFFF7]"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#171717]/10 text-[#171717]"
                          : "bg-[#C6F83A]/10 text-[#C6F83A] group-hover:bg-[#C6F83A]/20"
                      }`}
                    >
                      {module.icon}
                    </div>
                    <span
                      className={`text-sm font-semibold leading-tight transition-colors ${
                        isActive ? "text-[#171717]" : "text-[#171717]/90"
                      }`}
                    >
                      {module.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Content Panel */}
            <div className="lg:col-span-8">
              <div className="glass-panel rounded-3xl p-8 md:p-10 h-full border-2 border-[#171717] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C6F83A]/5 rounded-full blur-[80px]" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeModule}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-11 h-11 rounded-xl bg-[#C6F83A] flex items-center justify-center text-[#171717]">
                        {activeData.icon}
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-[#171717] tracking-tight">
                          {activeData.title}
                        </h4>
                        <p className="text-[#171717]/60 text-xs tracking-wider uppercase mt-0.5">
                          {activeData.topics.length} topics covered
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                      {activeData.topics.map((topic, i) => (
                        <motion.div
                          key={topic}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.3 }}
                          className="flex items-start gap-3 py-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C6F83A] mt-0.5 flex-shrink-0" />
                          <span className="text-[#171717]/90 text-sm font-light leading-snug">
                            {topic}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <a
              href="#enroll"
              className="btn-luxury inline-block px-12 py-5 rounded-full text-sm tracking-widest cursor-pointer"
            >
              Enroll in AI-Integrated Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
