"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { LiaCertificateSolid } from "react-icons/lia";
import {
  FaGoogle,
  FaSearch,
  FaLink,
  FaChartLine,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPen,
  FaTools,
  FaDownload,
  FaBriefcase,
  FaLaptop,
  FaClock,
  FaCalendarAlt,
  FaCertificate,
  FaTasks,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { LuBot } from "react-icons/lu";
import { IoIosPaperPlane } from "react-icons/io";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadBrochure } from "@/const";
import { useRouter } from "next/navigation";
import Timer from "@/components/page-sections/timer";
import ApplyModal from "@/components/page-sections/applyModal";
import CTASection from "@/components/page-sections/cta";
import EnrollForm from "@/components/page-sections/enrollForm";
import TestimonialSection from "@/components/page-sections/testimonials";
import FAQSection from "@/components/page-sections/faq";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SEO_TOPICS = [
  { label: "Introduction to SEO", icon: <FaSearch className="w-5 h-5" /> },
  { label: "Keyword Research & Analysis", icon: <FaChartLine className="w-5 h-5" /> },
  { label: "On-Page SEO Optimization", icon: <FaFileAlt className="w-5 h-5" /> },
  { label: "Technical SEO", icon: <FaTools className="w-5 h-5" /> },
  { label: "Off-Page SEO & Link Building", icon: <FaLink className="w-5 h-5" /> },
  { label: "Local SEO Strategies", icon: <FaMapMarkerAlt className="w-5 h-5" /> },
  { label: "SEO Content Writing", icon: <FaPen className="w-5 h-5" /> },
  { label: "Google Analytics & Search Console", icon: <FaGoogle className="w-5 h-5" /> },
  { label: "Website Audits", icon: <FaTools className="w-5 h-5" /> },
  { label: "AI Tools for SEO", icon: <LuBot className="w-5 h-5" /> },
];

const FLEXIBLE_FEATURES = [
  {
    label: "Classroom Training in Dubai",
    desc: "Expert-led in-person sessions at our Dubai campus with hands-on practice.",
    icon: <FaChalkboardTeacher className="w-8 h-8" />,
    span: "col-span-2 md:col-span-2 row-span-1",
    theme: "lime",
  },
  {
    label: " Certification Support",
    
     desc: "Globally recognised certifications to accelerate your career.",
    icon: <LiaCertificateSolid className="w-8 h-8" />,
    span: "col-span-2 md:col-span-1 row-span-3",
    theme: "white",
    img:"/g2.png"
  },
  {
    label: "Weekend Batches",
    desc: "Designed for working professionals who need flexibility.",
    icon: <FaCalendarAlt className="w-7 h-7" />,
    span: "col-span-1 row-span-1",
    theme: "white",
  },
  {
    label: "Flexible Timings",
    desc: "Morning, evening, or weekend — your schedule, your choice.",
    icon: <FaClock className="w-7 h-7" />,
    span: "col-span-1 row-span-1",
    theme: "white",
  },
  {
    label: "Practical Assignments",
    desc: "Real-world projects that build your portfolio from day one.",
    icon: <FaTasks className="w-8 h-8" />,
    span: "col-span-2 md:col-span-1 row-span-1",
    theme: "lime",
  },
  {
    label: "Live Online Sessions",
   desc: "Join from anywhere — real-time interaction with mentors and peers.",
    icon: <FaLaptop className="w-8 h-8" />,
    span: "col-span-2 md:col-span-1 row-span-1",
    theme: "white",
  },
];

const SEO_BENEFITS = [
  "Improve website rankings",
  "Increase organic traffic",
  "Generate quality leads",
  "Optimize website performance",
  "Build long term digital growth strategies",
];

const CAREER_ROLES = [
  { title: "SEO Executive", icon: <FaSearch className="w-5 h-5" /> },
  { title: "SEO Analyst", icon: <FaChartLine className="w-5 h-5" /> },
  { title: "Digital Marketing Specialist", icon: <FaGoogle className="w-5 h-5" /> },
  { title: "Content Strategist", icon: <FaPen className="w-5 h-5" /> },
  { title: "SEO Freelancer", icon: <FaLaptop className="w-5 h-5" /> },
  { title: "Website Optimization Consultant", icon: <FaBriefcase className="w-5 h-5" /> },
];

const SeoCourseContent = () => {
  const heroRef = useRef(null);
  const router = useRouter();

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

      gsap.from(".topic-card", {
        y: 60, opacity: 0, scale: 0.94, duration: 0.8,
        stagger: { amount: 0.6, grid: "auto", from: "start" },
        ease: "expo.out",
        scrollTrigger: { trigger: ".topics-grid", start: "top 85%" },
      });

      gsap.from(".feature-card", {
        y: 50, opacity: 0, scale: 0.96, duration: 0.8,
        stagger: { amount: 0.5 }, ease: "expo.out",
        scrollTrigger: { trigger: ".features-grid", start: "top 85%" },
      });

      gsap.from(".role-card", {
        y: 50, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".roles-grid", start: "top 85%" },
      });

      gsap.from(".benefit-item", {
        x: -30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".benefits-list", start: "top 85%" },
      });

      gsap.from(".cta-text", {
        y: 80, opacity: 0, skewY: 4, duration: 1.2, ease: "expo.out",
        scrollTrigger: { trigger: ".cta-section", start: "top 75%" },
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
          SEO Course in Dubai
        </motion.p>

        <div className="overflow-hidden pb-2">
          <h1 className="hero-text md:text-7xl text-4xl italic font-bold uppercase expanded-one leading-tight md:leading-none tracking-tighter text-center max-w-5xl">
            Search Engine{" "}
            <span className="text-primary color-flicker-text">Optimization</span>
            <br />Course in Dubai
          </h1>
        </div>

        <div className="overflow-hidden mt-5">
          <p className="hero-text font-semibold md:text-lg text-sm font-poppins max-w-2xl mx-auto text-[#171717]/80">
            Learn directly from industry experts through hands-on projects, live training sessions,
            and updated digital marketing strategies — online &amp; offline.
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
         <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:px-20 px-4 md:py-20 py-10 flex md:flex-row flex-col md:gap-10 gap-2 justify-between items-center md:h-[10vh] bg-foreground"
      >
        <h2 className="text-white md:text-4xl text-2xl font-semibold font-poppins">
          Be A Skilled Professional <br />
          <span className="text-primary font-bold ">
            Learn Today. Lead Tomorrow
          </span>
        </h2>
        <div className="flex items-center gap-10">
          <Timer />
        </div>
      </motion.div>

      {/* ── WHY CHOOSE / CURRICULUM ── */}
      <div className="bg-foreground pt-4">
        <section className="bg-background grid-bg md:rounded-t-[4rem] rounded-t-[3rem] md:px-20 px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="section-title flex flex-col items-center text-center gap-3 mb-12">
              <p className="w-fit bg-primary px-6 rounded-full text-foreground text-sm py-2 font-semibold font-poppins">
                Why Choose Us
              </p>
              <h2 className="md:text-5xl text-3xl font-black text-[#171717] tracking-tighter leading-tight capitalize">
                Why Choose Delta Digital Academy for SEO Training?
              </h2>
              <p className="text-[#171717]/70 max-w-2xl font-poppins text-sm md:text-base">
                Delta Digital Academy stands out among the leading online marketing courses in Dubai
                because of its practical learning approach and career-focused training methods.
              </p>
            </div>

            {/* 5 cols desktop, 3 tablet, 2 mobile */}
            <div className="topics-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {SEO_TOPICS.map((topic, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="topic-card bg-white border-2 border-[#171717] shadow-[3px_3px_0_0_#000] rounded-xl p-4 flex flex-col gap-2 items-start"
                >
                  <div className="bg-primary p-2 rounded-lg border border-[#171717] flex-shrink-0">
                    {topic.icon}
                  </div>
                  <p className="text-xs font-bold font-poppins text-[#171717] leading-snug">
                    {topic.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
           <section className="bg-white grid-bg md:rounded-b-[4rem] rounded-b-[3rem] md:px-20 px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">

            {/* heading row */}
            <div className="section-title flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="w-fit bg-primary px-6 rounded-full text-foreground text-sm py-2 font-semibold font-poppins mb-4">
                  Flexible Learning
                </p>
                <h2 className="md:text-6xl text-4xl font-black text-black tracking-tighter leading-none capitalize">
                  Best SEO Course for<br />
                  <span className="text-primary color-flicker-text">Beginners</span>{" "}
                  &amp; Pros
                </h2>
              </div>
              <p className="text-white/50 max-w-xs font-poppins text-sm md:text-base leading-relaxed md:text-right">
                Whether you want to start a career, grow your business, or freelance — learn your way.
              </p>
            </div>

            {/* bento grid */}
            <div className="features-grid grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4">
              {FLEXIBLE_FEATURES.map((f, i) => {
                const isLime = f.theme === "lime";
                const isDark = f.theme === "dark";
                const bg = isLime ? "bg-primary " : isDark ? "bg-white border-[#171717] shadow-[4px_4px_0_0_#000]" : "bg-white border-[#171717] shadow-[4px_4px_0_0_#000]";
                const textColor = isLime ? "text-[#171717]" : isDark ? "text-white" : "text-[#171717]";
                const subColor = isLime ? "text-[#171717]/60" : isDark ? "text-white/50" : "text-[#171717]/60";
                const iconBg = isLime ? "bg-[#171717]" : isDark ? "bg-primary" : "bg-primary";
                const iconColor = isLime ? "text-primary" : isDark ? "text-[#171717]" : "text-[#171717]";
                const border = isDark ? "border border-white/10" : "border-2 border-[#171717]";
                const shadow = isDark ? "" : isLime ? "shadow-[4px_4px_0_0_#000]" : "shadow-[4px_4px_0_0_#000]";
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
                    className={`feature-card relative ${f.span} ${bg} ${border} ${shadow} rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative`}
                  >
                    {
                      f.img && (
              <div className="bg-black absolute  w-full h-full top-0 left-0 z-[0]">
                        <img
                  src={f.img}
                  alt="Student"
                  className="w-full opacity-40 h-full object-cover"
                />
              </div>
                      )
                    }
                    {/* large faded number */}
                    <span className={`absolute z-[10] top-2 right-4 text-7xl font-black opacity-[0.06] select-none ${f.img ? "text-white" : textColor} leading-none`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className={` z-[10] relative w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0 ${border}`}>
                      <span className={iconColor}>{f.icon}</span>
                    </div>

                    <div className="relative z-[10]">
                      <p className={`font-black font-poppins text-base md:text-lg leading-tight mb-1 ${f.img?"text-white":textColor} `}>
                        {f.label}
                      </p>
                      <p className={`font-poppins text-xs leading-snug ${f.img?"text-white/50":subColor} hidden md:block`}>
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

   


      {/* ── WHY SEO MATTERS ── */}
      <div className="bg-foreground pt-4">
        <section className=" border-y-4 border-[#171717] md:px-20 px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="section-title">
              <p className="w-fit bg-[#171717] text-primary rounded-full text-sm py-2 font-semibold font-poppins mb-5">
                Why SEO Matters
              </p>
              <h2 className="md:text-4xl text-3xl font-black text-[white] tracking-tighter leading-tight capitalize mb-5">
                Why SEO Courses in Dubai Is Important in Digital Marketing
              </h2>
              <p className="text-[white] font-poppins text-sm md:text-base leading-relaxed">
                Search Engine Optimization is one of the most important skills in modern digital
                marketing. Businesses today depend on Google visibility to attract customers and
                increase sales. By learning SEO from Delta Digital Academy, students understand how to grow organically.
              </p>
            </div>

            <div className="benefits-list flex flex-col gap-3">
              {SEO_BENEFITS.map((b, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="benefit-item flex items-center gap-4  bg-[white] border-2 border-[#171717] shadow-[3px_3px_0_0_#C1F42D] rounded-xl px-5 py-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#171717] flex-shrink-0" />
                  <span className="font-bold font-poppins text-[#171717] text-sm md:text-base">
                    {b}
                  </span>
                </motion.div>
              ))}
              <p className="text-xs font-semibold font-poppins text-[#171717]/70 mt-1 pl-1">
                This makes SEO one of the most valuable skills through professional digital marketing courses in Dubai.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ── CAREER OPPORTUNITIES ── */}
      {/* <div className="bg-foreground pt-4">
        <section className="bg-background grid-bg md:rounded-t-[4rem] rounded-t-[3rem] md:px-20 px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="section-title flex flex-col items-center text-center gap-3 mb-12">
              <p className="w-fit bg-primary px-6 rounded-full text-foreground text-sm py-2 font-semibold font-poppins">
                Career Growth
              </p>
              <h2 className="md:text-5xl text-3xl font-black text-[#171717] tracking-tighter leading-tight capitalize">
                Career Opportunities After SEO Courses Training
              </h2>
              <p className="text-[#171717]/70 max-w-2xl font-poppins text-sm md:text-base">
                After completing the SEO course at Delta Digital Academy, students can apply for
                high-demand roles across businesses, agencies and eCommerce industries.
              </p>
            </div>

            <div className="roles-grid grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {CAREER_ROLES.map((role, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="role-card bg-white border-2 border-[#171717] shadow-[3px_3px_0_0_#000] rounded-xl p-5 flex flex-row items-center gap-4"
                >
                  <div className="bg-primary p-2.5 rounded-lg border border-[#171717] flex-shrink-0">
                    {role.icon}
                  </div>
                  <p className="font-black font-poppins text-[#171717] text-sm md:text-base leading-snug">
                    {role.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div> */}

      

    </div> 
<EnrollForm />
      <TestimonialSection />
    <CTASection />
      <ApplyModal />
        <FAQSection />
</>
  );
};

export default SeoCourseContent;
