"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Timer from "./timer";
import { IoIosPaperPlane } from "react-icons/io";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });

      // 1. Initial State: Hide text content
      gsap.set(".animate-text", { y: 100, opacity: 0 });
      gsap.set(".animate-btn", { scale: 0.9, opacity: 0 });
      
      // 2. The Sequence
      tl.to(".animate-text", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.2,
      })
      .to(".animate-btn", {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
      }, "-=1") // Overlap with text animation
      .from(".grid-bg", {
        scale: 1.2,
        opacity: 0,
        duration: 2,
      }, 0); // Start at the very beginning
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const router=useRouter();

  return (
    <div ref={containerRef} className="w-full flex flex-col min-h-screen bg-foreground overflow-hidden">
      {/* Immersive Background Wrapper */}
      <div className="w-full bg-background rounded-b-[4rem] grid-bg flex flex-col justify-center items-center md:h-[90vh] h-[100vh] relative">
        
        {/* Subtitle with Framer Motion for a subtle float */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:text-lg text-sm font-bold font-poppins animate-text"
        >
          School of <span className="text-primary">Digital </span>Marketing
        </motion.p>

        {/* Desktop Headings - Masked Reveal Effect */}
        <div className="overflow-hidden py-1">
          <h1 className="md:text-7xl text-4xl italic relative text-center md:flex hidden items-center uppercase font-bold expanded-one animate-text">
            Building &nbsp;<img src="/peace.gif" className="w-20 h-20" alt="" /> the Future
          </h1>
        </div>

        <div className="overflow-hidden py-1">
          <h1 className="md:text-7xl text-4xl italic relative text-center md:flex hidden items-center uppercase font-bold expanded-one animate-text">
            Marketing{" "}
            <span className="text-primary color-flicker-text ps-2">
              Leaders.
            </span>
          </h1>
        </div>

        {/* Mobile Heading */}
        <div className="overflow-hidden">
          <h1 className="md:text-7xl md:mt-0 mt-2 text-[2.7rem] leading-[2.7rem] italic relative text-center md:hidden flex items-center uppercase font-bold expanded-one animate-text">
            Building the &nbsp;Marketing Leaders
          </h1>
        </div>

        <div className="overflow-hidden">
          <p className="text-center font-semibold md:text-lg text-sm font-poppins md:mt-2 mt-4 animate-text">
            Built in Collaboration with Top Digital Marketing Professionals With Delta Digital Academy
          </p>
        </div>

        {/* Buttons with Staggered Scale-In */}
        <div className="flex md:flex-row flex-col mt-8 gap-4 justify-center items-center">
          <div className="animate-btn">
            <Button
              size={"xl"}
              onClick={() => {
                router.push("#enroll");
              }}
              className="rounded-full hover:bg-foreground w-full hover:text-background hover:shadow-[1px_1px_0_0_#000] transition-all text-md ease-in font-semibold font-poppins text-foreground border-2 border-foreground shadow-[3px_3px_0_0_#000]"
            >
              Apply Now
              <IoIosPaperPlane />
            </Button>
          </div>
          <div className="animate-btn">
            <Button
              size={"xl"}
              onClick={() => {
                // download brochure
                const link = document.createElement("a");
                link.href = "/1.pdf";
                link.download = "brochure.pdf";
                link.click();
               if(typeof window !== "undefined") window.open("/1.pdf", "_blank");
              }}
              className="rounded-full hover:bg-foreground hover:text-background hover:shadow-[1px_1px_0_0_#000] transition-all text-md bg-white ease-in font-semibold font-poppins text-foreground border-2 border-foreground shadow-[3px_3px_0_0_#000]"
            >
              Download Brochure <FaDownload />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Section with Slide-up Animation */}
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
    </div>
  );
};

export default Hero;