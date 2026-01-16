"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutUs = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Reveal Animation
      gsap.from(".about-content > *", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
      });

      // 2. Video Scale & Parallax
      gsap.from('.video', {
        scale: 1.3,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: '.video',
          start: "top 90%",
          end: "bottom center",
          scrub: 1, // Smooth parallax as you scroll
        },
      });

      // 3. Vision & Mission Cards - Staggered Pop
      gsap.from(".info-card", {
        x: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 1.2,
        ease: "elastic.out(1, 0.8)", // Clean spring effect
        scrollTrigger: {
          trigger: ".info-card-container",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" ref={containerRef} className="w-full min-h-screen bg-foreground">
      <div className="bg-background grid-bg md:px-20 px-6 py-10 md:rounded-t-[4rem] rounded-t-[3rem] md:h-screen h-full translate-y-1 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4 mt-5 w-full">
          
          <div className="flex flex-col justify-center gap-2 about-content">
            <p className="w-fit bg-primary px-6 text-center rounded-full text-foreground md:text-md text-sm py-2 font-semibold font-poppins">
              About Us
            </p>
            <h1 className="md:text-5xl text-4xl capitalize font-bold font-poppins leading-tight">
              Dubai's{" "}
              <span className="text-primary color-flicker-text">Best</span>{" "}
              Academy <br />
              for Digital Marketing
            </h1>
            <p className="md:text-sm text-xs mt-2 font-semibold font-poppins max-w-lg">
              Delta Digital Academy is a powerhouse of creative thinkers,
              marketers, and strategists dedicated to helping brands grow
              online. From smart ads to stunning websites and engaging content, we
              build everything your digital presence needs.
            </p>

            <div className="mt-5 w-full grid grid-cols-1 md:grid-cols-2 gap-4 info-card-container">
              {/* Vision Card */}
              <div className="info-card w-full h-full bg-primary border-2 border-foreground p-6 shadow-[4px_4px_0_0_#000] rounded-2xl">
                <h3 className="text-2xl font-bold font-poppins">Vision</h3>
                <p className="text-xs mt-2 font-semibold font-poppins leading-relaxed">
                  To make digital education accessible to everyone—students, 
                  professionals, homemakers, and entrepreneurs. We aim to 
                  build confident future marketers by offering flexible, 
                  high-quality digital marketing education in Dubai.
                </p>
              </div>
              {/* Mission Card */}
              <div className="info-card w-full h-full bg-primary border-2 border-foreground p-6 shadow-[4px_4px_0_0_#000] rounded-2xl">
                <h3 className="text-2xl font-bold font-poppins">Mission</h3>
                <p className="text-xs mt-2 font-semibold font-poppins leading-relaxed">
                  To make digital marketing a skill that everyone can learn and 
                  confidently use. Our mission is to offer practical and 
                  affordable training that empowers every individual to 
                  become digitally capable.
                </p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full h-full flex md:justify-end md:px-10 items-center">
            <div className="md:w-3/4 video w-full md:aspect-[1/1.3] bg-black rounded-3xl overflow-hidden shadow-2xl">
              <video
               
                src="/1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full opacity-70 h-full object-cover"
              ></video>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;