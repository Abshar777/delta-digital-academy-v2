"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaChartLine,
  FaDownload,
  FaBriefcase,
  FaLaptop,
  FaCertificate,
  FaTasks,
  FaChalkboardTeacher,
  FaRocket,
  FaBullseye,
  FaUsers,
  FaTag,
  FaClipboardList,
  FaCode,
  FaRegChartBar,
  FaUserTie,
  FaCogs,
} from "react-icons/fa";
import { LuBot } from "react-icons/lu";
import { IoIosPaperPlane } from "react-icons/io";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadBrochure } from "@/const";
import { useRouter } from "next/navigation";
import Timer from "@/components/page-sections/timer";
import EnrollForm from "@/components/page-sections/enrollForm";
import TestimonialSection from "@/components/page-sections/testimonials";
import FAQSection from "@/components/page-sections/faq";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHY_FEATURES = [
  { label: "Industry Expert Trainers", icon: <FaChalkboardTeacher className="w-5 h-5" /> },
  { label: "Hands-on Practical Sessions", icon: <FaTasks className="w-5 h-5" /> },
  { label: "Live Campaign Creation & Optimization", icon: <FaRocket className="w-5 h-5" /> },
  { label: "AI-Powered Marketing Tools", icon: <LuBot className="w-5 h-5" /> },
  { label: "Small Batch Learning", icon: <FaUsers className="w-5 h-5" /> },
  { label: "Real Business Case Studies", icon: <FaBriefcase className="w-5 h-5" /> },
  { label: "Internship Opportunities", icon: <FaUserTie className="w-5 h-5" /> },
  { label: "Career Guidance & Job Assistance", icon: <FaClipboardList className="w-5 h-5" /> },
  { label: "Flexible Online & Classroom Learning", icon: <FaLaptop className="w-5 h-5" /> },
  { label: "Course Completion Certification", icon: <FaCertificate className="w-5 h-5" /> },
];

const COURSE_MODULES = [
  {
    num: "01",
    title: "Introduction to Performance Marketing",
    icon: <FaBullseye className="w-6 h-6" />,
    topics: [
      "Fundamentals of Performance Marketing",
      "Marketing Funnel",
      "Customer Journey",
      "Lead Generation Strategies",
      "Digital Marketing Ecosystem",
      "Understanding KPIs",
    ],
  },
  {
    num: "02",
    title: "Google Ads",
    icon: <FaGoogle className="w-6 h-6" />,
    topics: [
      "Google Ads Interface",
      "Search Campaigns",
      "Display Campaigns",
      "Performance Max Campaigns",
      "Shopping Ads",
      "YouTube Ads",
      "Keyword Research & Match Types",
      "Ad Extensions & Bidding Strategies",
      "Conversion Tracking & Optimization",
    ],
  },
  {
    num: "03",
    title: "Meta Ads",
    icon: <FaFacebook className="w-6 h-6" />,
    topics: [
      "Facebook Ads Manager",
      "Instagram Advertising",
      "Campaign Objectives",
      "Audience & Lookalike Targeting",
      "Lead Generation & Sales Campaigns",
      "Dynamic Ads",
      "Retargeting Strategies",
      "Creative Testing",
    ],
  },
  {
    num: "04",
    title: "LinkedIn Ads",
    icon: <FaLinkedin className="w-6 h-6" />,
    topics: [
      "LinkedIn Campaign Manager",
      "B2B Lead Generation",
      "Sponsored Content",
      "Message Ads",
      "Audience Targeting",
      "Campaign Optimization",
    ],
  },
  {
    num: "05",
    title: "Conversion Tracking",
    icon: <FaCode className="w-6 h-6" />,
    topics: [
      "Google Tag Manager",
      "Google Analytics 4 (GA4)",
      "Meta Pixel",
      "Conversion API (CAPI)",
      "Event Tracking",
      "UTM Parameters",
      "Goal Tracking",
    ],
  },
  {
    num: "06",
    title: "Landing Page Optimization",
    icon: <FaRegChartBar className="w-6 h-6" />,
    topics: [
      "Landing Page Best Practices",
      "Conversion Rate Optimization (CRO)",
      "User Experience",
      "A/B Testing",
      "Lead Capture Forms",
      "Call-to-Action Optimization",
    ],
  },
  {
    num: "07",
    title: "AI for Performance Marketing",
    icon: <LuBot className="w-6 h-6" />,
    topics: [
      "AI Content Creation",
      "AI Ad Copywriting",
      "AI Image Generation",
      "AI Video Creation",
      "AI Campaign Optimization",
      "Prompt Engineering for Marketing",
    ],
  },
  {
    num: "08",
    title: "Campaign Reporting",
    icon: <FaChartLine className="w-6 h-6" />,
    topics: [
      "Performance Reports",
      "ROI Analysis",
      "Cost Per Click (CPC)",
      "Cost Per Lead (CPL)",
      "Cost Per Acquisition (CPA)",
      "Return on Ad Spend (ROAS)",
      "Dashboard Reporting",
    ],
  },
];

const TOOLS = [
  "Google Ads", "Google Analytics 4 (GA4)", "Google Tag Manager",
  "Meta Ads Manager", "Meta Pixel", "LinkedIn Campaign Manager",
  "Google Keyword Planner", "Looker Studio", "Microsoft Clarity",
  "ChatGPT", "Canva AI", "AI Marketing Tools",
];

const WHO_SHOULD_JOIN = [
  "Students", "Fresh Graduates", "Marketing Professionals",
  "Business Owners", "Entrepreneurs", "Freelancers",
  "Sales Professionals", "Career Changers", "Startup Founders",
];

const CAREER_ROLES = [
  { title: "Performance Marketing Executive", icon: <FaRocket className="w-5 h-5" /> },
  { title: "Google Ads Specialist", icon: <FaGoogle className="w-5 h-5" /> },
  { title: "PPC Specialist", icon: <FaBullseye className="w-5 h-5" /> },
  { title: "Paid Media Specialist", icon: <FaRegChartBar className="w-5 h-5" /> },
  { title: "Media Buyer", icon: <FaTag className="w-5 h-5" /> },
  { title: "Campaign Manager", icon: <FaCogs className="w-5 h-5" /> },
  { title: "Growth Marketing Executive", icon: <FaChartLine className="w-5 h-5" /> },
  { title: "Digital Marketing Consultant", icon: <FaUserTie className="w-5 h-5" /> },
];

const FAQ_ITEMS = [
  {
    q: "What is Performance Marketing?",
    a: "Performance marketing is a digital marketing strategy where advertisers pay based on measurable outcomes such as clicks, leads, conversions, or sales.",
  },
  {
    q: "What is the duration of the performance marketing training in UAE?",
    a: "The course duration varies depending on the selected batch (weekday, weekend, online, or classroom). Contact Delta Digital Academy for the latest schedule.",
  },
  {
    q: "Will I receive a Performance Marketing Certification?",
    a: "Yes. Students who successfully complete the course receive a Performance Marketing Course Completion Certificate from Delta Digital Academy.",
  },
  {
    q: "Is this course suitable for beginners?",
    a: "Yes. The course is designed for beginners as well as professionals looking to enhance their digital marketing skills. No prior experience required.",
  },
  {
    q: "Will I work on live projects?",
    a: "Yes. Students gain hands-on experience through live campaign creation, optimization, analytics, and real-world case studies.",
  },
  {
    q: "Which advertising platforms will I learn?",
    a: "You will learn Google Ads, Meta Ads (Facebook & Instagram), YouTube Ads, LinkedIn Ads, Google Analytics 4, Google Tag Manager, Meta Pixel, and AI Marketing Tools.",
  },
  {
    q: "Can business owners join this course?",
    a: "Absolutely. Business owners can learn how to generate leads, increase sales and optimize their advertising budgets using performance marketing strategies.",
  },
  {
    q: "Why choose Delta Digital Academy?",
    a: "Delta Digital Academy provides industry-relevant training, experienced mentors, practical learning, live projects, AI-integrated modules, career guidance, internship opportunities and a recognized certification.",
  },
];

const PerformanceMarketingContent = () => {
  const heroRef = useRef(null);
  const router = useRouter();
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-text", { y: 80, opacity: 0 });
      gsap.set(".hero-btn", { scale: 0.9, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(".hero-text", { y: 0, opacity: 1, stagger: 0.12, duration: 1.2, delay: 0.3 })
        .to(".hero-btn", { scale: 1, opacity: 1, stagger: 0.1, duration: 1 }, "-=0.8");

      gsap.utils.toArray<HTMLElement>(".section-title").forEach((el) => {
        gsap.from(el, {
          y: 60, opacity: 0, duration: 1, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.from(".why-card", {
        y: 50, opacity: 0, scale: 0.95, duration: 0.7,
        stagger: { amount: 0.6 }, ease: "expo.out",
        scrollTrigger: { trigger: ".why-grid", start: "top 85%" },
      });

      gsap.from(".module-card", {
        y: 40, opacity: 0, duration: 0.7,
        stagger: { amount: 0.5 }, ease: "power3.out",
        scrollTrigger: { trigger: ".modules-grid", start: "top 85%" },
      });

      gsap.from(".role-card", {
        y: 40, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".roles-grid", start: "top 85%" },
      });

      gsap.from(".tool-tag", {
        scale: 0.8, opacity: 0, duration: 0.5,
        stagger: { amount: 0.4 }, ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".tools-grid", start: "top 85%" },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={heroRef} className="w-full bg-foreground">

        {/* ── HERO ── */}
        <div className="w-full bg-background grid-bg md:rounded-b-[4rem] rounded-b-[3rem] flex flex-col justify-center items-center min-h-screen px-6 py-32 text-center relative overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-text bg-primary mb-5 py-2 px-6 rounded-full text-sm font-semibold font-poppins"
          >
            Performance Marketing Course in Dubai
          </motion.p>

          <div className="overflow-hidden pb-2">
            <h1 className="hero-text md:text-7xl text-4xl italic font-bold uppercase expanded-one leading-tight md:leading-none tracking-tighter text-center max-w-5xl">
              Performance{" "}
              <span className="text-primary color-flicker-text">Marketing</span>
              <br />Course in Dubai
            </h1>
          </div>

          <div className="overflow-hidden mt-5">
            <h2 className="hero-text font-semibold md:text-xl text-base font-poppins max-w-2xl mx-auto text-[#171717]/80">
              Master Performance Marketing and Drive Real Business Results
            </h2>
          </div>

          <div className="overflow-hidden mt-3">
            <p className="hero-text text-[#171717]/60 max-w-2xl mx-auto font-poppins text-sm md:text-base leading-relaxed">
              Comprehensive, industry-focused training in Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, GA4, GTM and AI-powered marketing tools — online &amp; offline.
            </p>
          </div>

          <div className="flex flex-row mt-10 gap-4 justify-center items-center flex-wrap">
            <div className="hero-btn">
              <Button
                size="xl"
                onClick={() => router.push("/#enroll")}
                className="rounded-full hover:bg-foreground hover:text-background hover:shadow-[1px_1px_0_0_#000] transition-all ease-in font-semibold font-poppins text-foreground border-2 border-foreground shadow-[3px_3px_0_0_#000]"
              >
                Apply Now <IoIosPaperPlane />
              </Button>
            </div>
            <div className="hero-btn">
              <Button
                size="xl"
                onClick={downloadBrochure}
                className="rounded-full hover:bg-foreground hover:text-background hover:shadow-[1px_1px_0_0_#000] transition-all bg-white ease-in font-semibold font-poppins text-foreground border-2 border-foreground shadow-[3px_3px_0_0_#000]"
              >
                Download Brochure <FaDownload />
              </Button>
            </div>
          </div>
        </div>

        {/* ── COUNTDOWN BANNER ── */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:px-20 px-4 md:py-20 py-10 flex md:flex-row flex-col md:gap-10 gap-2 justify-between items-center bg-foreground"
        >
          <h2 className="text-white md:text-4xl text-2xl font-semibold font-poppins">
            Be A Skilled Professional <br />
            <span className="text-primary font-bold">Learn Today. Lead Tomorrow</span>
          </h2>
          <div className="flex items-center gap-10">
            <Timer />
          </div>
        </motion.div>

        {/* ── WHY CHOOSE ── */}
        <div className="bg-foreground pt-4">
          <section className="bg-background grid-bg md:rounded-t-[4rem] rounded-t-[3rem] md:px-20 px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="section-title flex flex-col items-center text-center gap-3 mb-12">
                <p className="w-fit bg-primary px-6 rounded-full text-foreground text-sm py-2 font-semibold font-poppins">
                  Why Choose Us
                </p>
                <h2 className="md:text-5xl text-3xl font-black text-[#171717] tracking-tighter leading-tight capitalize">
                  What Makes Our Course Different?
                </h2>
                <p className="text-[#171717]/70 max-w-2xl font-poppins text-sm md:text-base">
                  At Delta Digital Academy, we focus on practical, job-oriented training that prepares students for real-world marketing challenges.
                </p>
              </div>

              <div className="why-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {WHY_FEATURES.map((f, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="why-card bg-white border-2 border-[#171717] shadow-[3px_3px_0_0_#000] rounded-xl p-4 flex flex-col gap-2 items-start"
                  >
                    <div className="bg-primary p-2 rounded-lg border border-[#171717] flex-shrink-0">
                      {f.icon}
                    </div>
                    <p className="text-xs font-bold font-poppins text-[#171717] leading-snug">
                      {f.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ── WHAT IS PM + WHY LEARN ── */}
        <div className="bg-foreground pt-4">
          <section className="border-y-4 border-[#171717] md:px-20 px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              <div className="section-title">
                <p className="w-fit bg-[#171717] text-primary rounded-full text-sm py-2 px-6 font-semibold font-poppins mb-5">
                  What is Performance Marketing?
                </p>
                <h2 className="md:text-4xl text-3xl font-black text-white tracking-tighter leading-tight capitalize mb-5">
                  Data-Driven Marketing That Delivers Measurable Results
                </h2>
                <p className="text-white/70 font-poppins text-sm md:text-base leading-relaxed mb-6">
                  Performance marketing is a digital marketing strategy where businesses pay for measurable outcomes such as website visits, leads, sales, app installs, or conversions. Every campaign is tracked and optimized using real-time data to maximize Return on Investment (ROI).
                </p>
                <p className="text-white/70 font-poppins text-sm md:text-base leading-relaxed">
                  Today, businesses across Dubai and around the world rely on skilled performance marketers to generate leads, increase online sales, and grow their digital presence.
                </p>
              </div>

              <div className="section-title">
                <p className="w-fit bg-[#171717] text-primary rounded-full text-sm py-2 px-6 font-semibold font-poppins mb-5">
                  Why Learn Performance Marketing?
                </p>
                <h2 className="md:text-3xl text-2xl font-black text-white tracking-tighter leading-tight capitalize mb-6">
                  By completing our course, you will learn how to:
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    "Generate quality leads",
                    "Increase online sales",
                    "Create profitable advertising campaigns",
                    "Optimize advertising budgets",
                    "Improve Return on Ad Spend (ROAS)",
                    "Analyze campaign performance",
                    "Track conversions accurately",
                    "Build data-driven marketing strategies",
                  ].map((b, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                      className="flex items-center gap-4 bg-white border-2 border-[#171717] shadow-[3px_3px_0_0_#C1F42D] rounded-xl px-5 py-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#171717] flex-shrink-0" />
                      <span className="font-bold font-poppins text-[#171717] text-sm">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ── COURSE MODULES ── */}
        <div className="bg-foreground pt-4">
          <section className="bg-background grid-bg md:rounded-t-[4rem] rounded-t-[3rem] md:px-20 px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="section-title flex flex-col items-center text-center gap-3 mb-12">
                <p className="w-fit bg-primary px-6 rounded-full text-foreground text-sm py-2 font-semibold font-poppins">
                  Curriculum
                </p>
                <h2 className="md:text-5xl text-3xl font-black text-[#171717] tracking-tighter leading-tight capitalize">
                  Course Modules
                </h2>
                <p className="text-[#171717]/70 max-w-2xl font-poppins text-sm md:text-base">
                  8 comprehensive modules covering everything from Google Ads to AI-powered marketing.
                </p>
              </div>

              <div className="modules-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                {COURSE_MODULES.map((mod, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="module-card bg-white border-2 border-[#171717] shadow-[4px_4px_0_0_#000] rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenModule(openModule === i ? null : i)}
                      className="w-full p-5 flex items-center gap-4 text-left"
                    >
                      <span className="text-3xl font-black text-primary/30 expanded-one leading-none select-none min-w-[3rem]">
                        {mod.num}
                      </span>
                      <div className="bg-primary p-2.5 rounded-lg border border-[#171717] flex-shrink-0">
                        {mod.icon}
                      </div>
                      <p className="font-black font-poppins text-[#171717] text-sm md:text-base flex-1 leading-snug">
                        {mod.title}
                      </p>
                      <ChevronDown
                        className={`w-5 h-5 text-[#171717] flex-shrink-0 transition-transform duration-300 ${openModule === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openModule === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t-2 border-[#171717] pt-4">
                            {mod.topics.map((t, j) => (
                              <div key={j} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span className="text-xs font-semibold font-poppins text-[#171717]/80">{t}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ── PRACTICAL TRAINING + TOOLS ── */}
        <div className="bg-foreground pt-4">
          <section className="bg-background grid-bg md:rounded-b-[4rem] rounded-b-[3rem] md:px-20 px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">

              {/* Practical Training */}
              <div className="section-title">
                <p className="w-fit bg-primary px-6 rounded-full text-foreground text-sm py-2 font-semibold font-poppins mb-4">
                  Practical Training
                </p>
                <h2 className="md:text-4xl text-3xl font-black text-[#171717] tracking-tighter leading-tight capitalize mb-6">
                  Learn by Doing — Every Session
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    "Live Google Ads campaigns",
                    "Meta Ads campaign creation",
                    "Audience & keyword research",
                    "Budget allocation & optimization",
                    "Conversion tracking setup",
                    "Analytics reporting",
                    "Competitor analysis",
                    "Live business case studies",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white border-2 border-[#171717] shadow-[3px_3px_0_0_#000] rounded-xl px-4 py-3">
                      <CheckCircle2 className="w-4 h-4 text-[#171717] flex-shrink-0" />
                      <span className="font-bold font-poppins text-[#171717] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="section-title">
                <p className="w-fit bg-primary px-6 rounded-full text-foreground text-sm py-2 font-semibold font-poppins mb-4">
                  Tools You&apos;ll Master
                </p>
                <h2 className="md:text-4xl text-3xl font-black text-[#171717] tracking-tighter leading-tight capitalize mb-6">
                  Industry-Standard Platforms
                </h2>
                <div className="tools-grid flex flex-wrap gap-3">
                  {TOOLS.map((tool, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="tool-tag bg-[#171717] text-white border-2 border-[#171717] shadow-[3px_3px_0_0_#C1F42D] rounded-full px-4 py-2 text-xs font-bold font-poppins"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ── WHO SHOULD JOIN + CAREER ROLES ── */}
        <div className="bg-foreground pt-4">
          <section className="bg-[#C1F42D] border-y-4 border-[#171717] md:px-20 px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">

              {/* Who Should Join */}
              <div className="section-title">
                <p className="w-fit bg-[#171717] text-primary px-6 rounded-full text-sm py-2 font-semibold font-poppins mb-4">
                  Who Should Join?
                </p>
                <h2 className="md:text-4xl text-3xl font-black text-[#171717] tracking-tighter leading-tight capitalize mb-6">
                  This Course is Ideal For
                </h2>
                <div className="flex flex-wrap gap-3">
                  {WHO_SHOULD_JOIN.map((who, i) => (
                    <span key={i} className="bg-[#171717] text-white rounded-full px-5 py-2 text-sm font-bold font-poppins border-2 border-[#171717]">
                      {who}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-[#171717]/70 font-poppins text-sm leading-relaxed">
                  No prior experience is required. We start from the basics and gradually progress to advanced performance marketing strategies.
                </p>
              </div>

              {/* Career Roles */}
              <div className="section-title">
                <p className="w-fit bg-[#171717] text-primary px-6 rounded-full text-sm py-2 font-semibold font-poppins mb-4">
                  Career Growth
                </p>
                <h2 className="md:text-4xl text-3xl font-black text-[#171717] tracking-tighter leading-tight capitalize mb-6">
                  Career Opportunities After Training
                </h2>
                <div className="roles-grid grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CAREER_ROLES.map((role, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="role-card bg-white border-2 border-[#171717] shadow-[3px_3px_0_0_#000] rounded-xl p-4 flex items-center gap-3"
                    >
                      <div className="bg-primary p-2 rounded-lg border border-[#171717] flex-shrink-0">
                        {role.icon}
                      </div>
                      <p className="font-bold font-poppins text-[#171717] text-xs leading-snug">
                        {role.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ── CERTIFICATION ── */}
        <div className="bg-foreground pt-4">
          <section className="bg-background grid-bg md:rounded-t-[4rem] rounded-t-[3rem] md:px-20 px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="section-title">
                <p className="w-fit bg-primary px-6 rounded-full text-foreground text-sm py-2 font-semibold font-poppins mb-4">
                  Certification
                </p>
                <h2 className="md:text-5xl text-3xl font-black text-[#171717] tracking-tighter leading-tight capitalize mb-5">
                  Performance Marketing Certification
                </h2>
                <p className="text-[#171717]/70 font-poppins text-sm md:text-base leading-relaxed mb-6">
                  Upon successful completion, students receive a Performance Marketing Course Completion Certificate from Delta Digital Academy. The skills gained also help prepare learners for platform-specific certifications offered by Google and Meta.
                </p>
                <p className="text-[#171717]/70 font-poppins text-sm md:text-base leading-relaxed">
                  Course duration may vary depending on the batch schedule and learning mode (weekday, weekend, online, or classroom). Contact our admissions team for the latest schedule.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Google Ads", "Meta Ads", "LinkedIn Ads", "Campaign Optimization", "Google Analytics 4", "Google Tag Manager", "Conversion Tracking", "Performance Reporting"].map((item, i) => (
                  <div key={i} className="bg-white border-2 border-[#171717] shadow-[3px_3px_0_0_#C1F42D] rounded-xl p-4 flex items-center gap-3">
                    <FaCertificate className="w-4 h-4 text-[#171717] flex-shrink-0" />
                    <span className="font-bold font-poppins text-[#171717] text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ── FAQ ── */}
        <div className="bg-foreground pt-4">
          <section className="bg-background grid-bg md:px-20 px-6 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="section-title flex flex-col items-center text-center gap-3 mb-12">
                <p className="w-fit bg-primary px-6 rounded-full text-foreground text-sm py-2 font-semibold font-poppins">
                  FAQ
                </p>
                <h2 className="md:text-5xl text-3xl font-black text-[#171717] tracking-tighter leading-tight capitalize">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i} className="bg-white border-2 border-[#171717] shadow-[3px_3px_0_0_#000] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-5 flex items-center justify-between text-left gap-4"
                    >
                      <span className="font-black font-poppins text-[#171717] text-sm md:text-base">{item.q}</span>
                      <ChevronDown className={`w-5 h-5 text-[#171717] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t-2 border-[#171717] pt-4">
                            <p className="text-[#171717]/70 font-poppins text-sm leading-relaxed">{item.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

      </div>

      {/* ── TESTIMONIALS ── */}
      <TestimonialSection />

      {/* ── ENROLL FORM ── */}
      <EnrollForm />
    </>
  );
};

export default PerformanceMarketingContent;
