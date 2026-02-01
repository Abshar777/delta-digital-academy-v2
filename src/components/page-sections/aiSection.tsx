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
import {
  LuBot,
  LuBrainCircuit,
  LuChartBar,
  LuTarget,
  LuShare2,
} from "react-icons/lu";
import { SiMarketo } from "react-icons/si";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MODULES = [
  {
    label: "Search Engine Optimization",
    icon: <FaSearchengin className="w-5 h-5" />,
  },
  { label: "Google Ads", icon: <FaGoogle className="w-5 h-5" /> },
  { label: "Meta Ads", icon: <FaMeta className="w-5 h-5" /> },
  { label: "WordPress", icon: <FaWordpress className="w-5 h-5" /> },
  {
    label: "Social Media Marketing",
    icon: <IoShareSocialSharp className="w-5 h-5" />,
  },
  {
    label: "Email & Influencer Marketing",
    icon: <IoMailSharp className="w-5 h-5" />,
  },
  { label: "LinkedIn Ads", icon: <FaLinkedin className="w-5 h-5" /> },
  {
    label: "Content Creation & Strategy",
    icon: <FaEdit className="w-5 h-5" />,
  },
  {
    label: "Internship Opportunity",
    icon: <FaUserGraduate className="w-5 h-5" />,
  },
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

const AISection = () => {
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
    <section id="courses" ref={sectionRef} className="py-6 grid-bg relative">
      {/* <div className="absolute inset-0 dot-grid opacity-20" /> */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}

        {/* ── AI-Integrated Curriculum ── */}
        <div className="ai-curriculum mt-28 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center flex flex-col justify-center items-center gap-6 mb-14">
            <p className=" w-fit bg-primary px-6 text-center  rounded-full text-foreground bg md:text-md text-sm py-2 font-semibold font-poppins">
              AI-Integrated Curriculum
            </p>
            <h2 className="md:text-6xl text-5xl font-black text-[#171717] uppercase tracking-tighter leading-none mb- italic">
              AI-Integrated Digital <br />
              <span className="text-primary bg-[#171717] md:px-4 px-2 py-1 inline-block transform -rotate-1 mt-2">
                Marketing Program
              </span>
            </h2>
            <p className="text-[#171717]/90 text-sm md:text-base max-w-xl mx-auto font-light ">
              Learn digital marketing with modern AI-powered tools used in real
              campaigns.
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
                        ? "bg-primary border-foreground shadow-[3px_3px_0_0_#000]"
                        : "bg-white border-[#171717]  hover:bg-[#FDFFF7] shadow-[3px_3px_0_0_#000]"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#171717]/10 text-[#171717]"
                          : "bg-primary text-foreground group-hover:bg-primary/20"
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
              <div className="bg-white shadow-[3px_3px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] transition-all duration-300 rounded-3xl p-8 md:p-10 h-full border-2 border-[#171717] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />

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
                      <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-[#171717]">
                        {activeData.icon}
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-[#171717] tracking-tight">
                          {activeData.title}
                        </h4>
                        <p className="text-[#171717]/60 text-xs tracking-wider font-medium uppercase mt-0.5">
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
                          <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-[#171717]/90 text-sm font-medium leading-snug">
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

          {/* Enroll in AI-Integrated Program */}
          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Button
              size={"xl"}
              className="rounded-full hover:bg-foreground  hover:text-background hover:shadow-[1px_1px_0_0_#000] transition-all text-md ease-in font-semibold font-poppins  text-foreground border-2 border-foreground  shadow-[3px_3px_0_0_#000]"
            >
              <a href="#enroll" className="w-full ">
                {" "}
                Enroll in AI-Integrated Program
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
