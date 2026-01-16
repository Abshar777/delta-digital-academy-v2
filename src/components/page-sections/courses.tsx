import React from "react";
import ProgramCard from "../global/programCard";
import {
  FaAd,
  FaEdit,
  FaGoogle,
  FaLinkedin,
  FaSearchengin,
  FaUserGraduate,
  FaWordpress,
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { IoMailSharp, IoShareSocialSharp } from "react-icons/io5";
import { LuBot } from "react-icons/lu";
import { SiMarketo } from "react-icons/si";

const Courses = () => {
  const PROGRAMS = [
    {
      title: "Delta Dominate",
      duration: "3.5 Months",
      mode: "Classroom",
      image: "/c1.png",
      stats: [
        {
          label: "Search Engine Optimization",
          value: "",
          icon: <FaSearchengin className="w-6 h-6 " />,
        },

        //         Search Engine Optimization
        // ✔ Google Ads
        // ✔ Meta Ads
        // ✔ Website Design/ WordPress
        // ✔ Social Media Marketing
        // ✔ Email & influencer Marketing
        // ✔ Linkedin ads
        // ✔ Content Creation & Strategy
        // ✔ Internship Opportunity
        // Campaign Strategy
        // AI Integrated Course
        // Fundamentals of Marketing
        {
          label: "Google Ads",
          value: "",
          icon: <FaGoogle className="w-6 h-6 " />,
        },
        {
          label: "Meta Ads",
          value: "",
          icon: <FaMeta className="w-6 h-6 " />,
        },
        {
          label: "Website Design/ WordPress",
          value: "",
          icon: <FaWordpress className="w-6 h-6 " />,
        },
        {
          label: "Social Media Marketing",
          value: "",
          icon: <IoShareSocialSharp className="w-6 h-6 " />,
        },
        {
          label: "Email & influencer Marketing",
          value: "",
          icon: <IoMailSharp className="w-6 h-6 " />,
        },
        {
          label: "Linkedin ads",
          value: "",
          icon: <FaLinkedin className="w-6 h-6 " />,
        },
        {
          label: "Content Creation & Strategy",
          value: "",
          icon: <FaEdit className="w-6 h-6 " />,
        },
        {
          label: "Internship Opportunity",
          value: "",
          icon: <FaUserGraduate className="w-6 h-6 " />,
        },
        {
          label: "Campaign Strategy",
          value: "",
          icon: <FaAd className="w-6 h-6 " />,
        },
        {
          label: "AI Integrated Course",
          value: "",
          icon: <LuBot className="w-6 h-6 " />,
        },
        {
          label: "Fundamentals of Marketing",
          value: "",
          icon: <SiMarketo className="w-6 h-6 " />,
        },
      ],
    },
  ];
  return (
    <div id="courses" className="md:mt-20 mt-20">
      <section className="w-full bg-background grid-bg md:px-20 px-4 flex flex-col justify-start items-center ">
        <div className="flex flex-col  justify-center  items-center mb-20  gap-8">
          <div className="flex flex-col justify-between items-center gap-3">
            <p className=" w-fit bg-primary px-6 text-center  rounded-full text-foreground bg text-md py-2 font-semibold font-poppins">
              our courses
            </p>
            <h2 className="md:text-5xl text-4xl text-center font-black text-[#171717] capitalize tracking-tighter leading-none">
              Digital Marketing Certification Courses
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {PROGRAMS.map((program, idx) => (
              <div
                key={idx}
                //   className="reveal-scroll"
                //   style={{
                //     animation: `fadeInUp 0.6s ease forwards ${idx * 0.2}s`,
                //     opacity: 0,
                //     transform: "translateY(30px)",
                //   }}
              >
                <ProgramCard {...program} index={idx} />
              </div>
            ))}
          </div>

          {/* <div className="bg-[#171717] text-white p-6 border-4 border-[#171717] shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <p className="font-bold uppercase tracking-widest text-sm italic">
              Scroll to explore our toolkit
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Courses;
