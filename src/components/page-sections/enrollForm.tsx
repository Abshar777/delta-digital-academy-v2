"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BsGlobe } from "react-icons/bs";

const EnrollForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-container", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  // validation for the phone number and email and defualt code as uae

  return (
    <div id="enroll" className="bg-foreground md:mt-0 -mt-1 pt-3">
      <section
        ref={formRef}
        className="md:py-32 py-20 grid-bg px-6 bg-background md:rounded-t-[4rem] rounded-t-[3rem] "
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row md:gap-20 gap-6 items-center">
          <div className="flex-1">
            <div className="bg-primary text-black rounded-full p-3 font-poppins inline-block font-black uppercase tracking-widest text-xs  mb-6 transform -rotate-2">
              Fill Form
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-[#171717] capitalize font-poppins tracking-tighter leading-none mb-8">
              ENROLL <br /> NOW.
            </h2>
            <p className="md:text-xl text-lg font-bold text-[#171717] max-w-md">
              Seats are limited. secure your slot today.
            </p>

            <div className="mt-12 flex items-center gap-6">
              <div className="w-16 h-16 border-4 border-[#171717] bg-primary flex items-center justify-center font-black text-2xl  shadow-[4px_4px_0px_0px_#171717]">
                <BsGlobe />
              </div>
              <p className="text-sm font-black uppercase tracking-widest leading-none">
                Get Into <br />
                <span className="opacity-50">The Digital World </span>
              </p>
            </div>
          </div>

          <div className="flex-1 w-full mt-5 form-container">
            <form
              className="bg-white shadow-[15px_15px_0px_0px_#171717] rounded-3xl border-4 border-[#171717] md:p-10 p-6 neo-shadow relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-poppins font-black capitalize tracking-widest text-[#171717]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name "
                    className="w-full bg-primary rounded-2xl font-poppins border-4 border-[#171717] p-4 font-bold placeholder:opacity-30 focus:outline-none focus:bg-[#C1F42D] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-poppins font-black capitalize tracking-widest text-[#171717]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-primary rounded-2xl font-poppins border-4 border-[#171717] p-4 font-bold placeholder:opacity-30 focus:outline-none focus:bg-[#C1F42D] transition-colors"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1 space-y-1">
                    <label className="text-sm font-poppins font-black uppercase tracking-widest text-[#171717]">
                      Code
                    </label>
                    <select className="w-full bg-primary rounded-2xl border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] focus:outline-none appearance-none cursor-pointer">
                      <option>+91 IN</option>
                      <option>+1 US</option>
                      <option>+44 UK</option>
                    </select>
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-sm font-poppins font-black uppercase tracking-widest text-[#171717]">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-primary rounded-2xl border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] transition-colors focus:outline-none"
                      placeholder="00000 00000"
                    />
                  </div>
                </div>
                <button className="w-full shadow-[4px_4px_0px_0px_#C1F42D]  hover:shadow-none rounded-2xl bg-[#171717] text-[#C1F42D] font-black text-xl capitalize py-6 border-4 border-[#171717] hover:bg-[#C1F42D] hover:text-[#171717] transition-all duration-300">
                  Submit Application
                </button>
              </div>
              {/* Retro corner decoration */}
              {/* <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#171717]"></div> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnrollForm;
