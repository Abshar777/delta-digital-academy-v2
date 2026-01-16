import React from "react";
import ServiceCard from "../global/serviceCard";
import { FaGoogle, FaLinkedin, FaWordpress } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";

export const SERVICES = [
  {
    id: "web-dev",
    title: "Website Development",
    description:
      "We build high-octane digital experiences. From rapid prototypes to enterprise-grade web applications, our code is as sharp as our design.",
    tags: ["React", "Next.js", "Performance"],
    icon: (
     <FaWordpress className="w-8 h-8"/>
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
        className="w-8 h-8"
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
      <FaGoogle className="w-8 h-8"/>
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
        className="w-8 h-8"
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
      <FaMeta className="w-8 h-8"/>
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
        className="w-8 h-8"
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
     <FaLinkedin className="w-8 h-8"/>
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
        className="w-8 h-8"
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
  return (
    <section className=" md:px-6  px-4 lg:mt-0 mt-10  grid-bg  ">
      <div className="md:max-w-7xl  md:mx-auto ">
        <div className="flex flex-col md:flex-row justify-center  md:items-end mb-20  gap-8">
          <div className="flex flex-col justify-between items-center gap-3">
            <p className=" w-fit bg-primary px-6 text-center  rounded-full text-foreground bg md:text-md  text-sm py-2 font-semibold font-poppins">
              what we offer
            </p>
            <h2 className="md:text-5xl text-5xl font-black text-[#171717] capitalize tracking-tighter leading-none">
              Our Services
            </h2>
          </div>

          {/* <div className="bg-[#171717] text-white p-6 border-4 border-[#171717] shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <p className="font-bold uppercase tracking-widest text-sm italic">
              Scroll to explore our toolkit
            </p>
          </div> */}
        </div>

        <div className="grid grid-cols-2 -mt-10 md:ml-0   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center  md:gap-8 gap-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="h-5"></div>
      </div>
    </section>
  );
};

export default Services;
