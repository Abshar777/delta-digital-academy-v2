"use client";
import React, { useEffect, useRef } from "react";
import ServiceCard from "../global/serviceCard";
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
    description:
      "We build high-octane digital experiences. From rapid prototypes to enterprise-grade web applications, our code is as sharp as our design.",
    tags: ["React", "Next.js", "Performance"],
    icon: (
     <FaWordpress className="md:w-8 md:h-8 h-6 w-6"/>
    ),
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    description:
      "Stop being invisible. We use surgical SEO strategies to ensure your brand dominates the first page and captures high-intent organic traffic.",
    tags: ["Growth", "Keywords", "Analytics"],
    icon: (
      <svg
        className="md:w-8 md:h-8 h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    id: "google-ads",
    title: "Google Ads",
    description:
      "Precision targeting that turns searches into sales. Our PPC campaigns are data-backed and ROI-driven to maximize every dollar spent.",
    tags: ["PPC", "Conversions", "Bidding"],
    icon: (
      <FaGoogle className="md:w-8 md:h-8 h-6 w-6"/>
    ),
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    description:
      "Build a cult-like following. We create engagement-heavy social strategies that turn casual scrollers into brand evangelists.",
    tags: ["Community", "Engagement", "Viral"],
    icon: (
      <svg
        className="md:w-8 md:h-8 h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    description:
      "Stop the scroll on Facebook & Instagram. We leverage Meta's powerful algorithm to scale your sales with surgical precision.",
    tags: ["Scaling", "FB/IG", "Retargeting"],
    icon: (
      <FaMeta className="md:w-8 md:h-8 h-6 w-6"/>
    ),
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Content that actually converts. High-fidelity visual storytelling and copy that resonates deeply with your target audience.",
    tags: ["Video", "Design", "Copywriting"],
    icon: (
      <svg
        className="md:w-8 md:h-8 h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    id: "linkedin ads",
    title: "LinkedIn ads",
    description:
      "We help founders and executives build an unshakeable digital presence that commands respect.",
    tags: ["Authority", "LinkedIn", "Strategy"],
    icon: (
     <FaLinkedin className="md:w-8 md:h-8 h-6 w-6"/>
    ),
  },
  {
    id: "soft-skill",
    title: "Campaign Strategy",
    description:
      "The future is human. We train teams in high-level communication, leadership, and emotional intelligence to drive collective success.",
    tags: ["Leadership", "EQ", "Coaching"],
    icon: (
      <svg
        className="md:w-8 md:h-8 h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];
const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title & Badge Animation
      gsap.from(".service-title-part", {
        y: 80,
        opacity: 0,
        rotateX: -20,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
      });

      // 2. Grid Cards Staggered Animation
      // We animate them with a slight 3D rotation and scale
      gsap.from(".service-card-wrapper", {
        y: 100,
        opacity: 0,
        scale: 0.9,
        rotateX: -15,
        duration: 1,
        stagger: {
          amount: 0.8, // Total time spread across all elements
          grid: "auto",
          from: "start",
        },
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
    id="services"
      ref={sectionRef} 
      className="md:px-6 px-4 lg:mt-0 mt-10 grid-bg perspective-1000"
    >
      <div className="md:max-w-7xl md:mx-auto">
        {/* Header Section */}
        <div ref={titleRef} className="flex flex-col justify-center items-center mb-20 gap-3">
          <div className="service-title-part">
            <p className="w-fit bg-primary px-6 text-center rounded-full text-foreground md:text-md text-sm py-2 font-semibold font-poppins">
              what we offer
            </p>
          </div>
          <div className="overflow-hidden">
            <h2 className="service-title-part md:text-5xl text-4xl font-black text-[#171717] capitalize tracking-tighter leading-none">
              Our Services
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-2 -mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center md:gap-8 gap-3">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              className="service-card-wrapper w-full"
              whileHover={{ y: -10, transition: { duration: 0.3 } }} // Interactive lift
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
        
        <div className="h-10"></div>
      </div>
    </section>
  );
};

export default Services;