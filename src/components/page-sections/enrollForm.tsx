"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
        ease: "expo.out"
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-foreground pt-3">
        <section ref={formRef} className="py-32 grid-bg px-6 bg-background rounded-t-[4rem]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1">
          <div className="bg-primary text-black rounded-full p-3 font-poppins inline-block font-black uppercase tracking-widest text-xs  mb-6 transform -rotate-2">
            JOIN THE ELITE
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-[#171717] capitalize font-poppins tracking-tighter leading-none mb-8">
            ENROLL <br /> NOW.
          </h2>
          <p className="text-xl font-bold text-[#171717] max-w-md">
            Seats are limited. Ego is optional. Results are mandatory. 
            Fill out the form to secure your slot in our next cohort.
          </p>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="w-16 h-16 border-4 border-[#171717] bg-primary flex items-center justify-center font-black text-2xl  shadow-[4px_4px_0px_0px_#171717]">
              !
            </div>
            <p className="text-sm font-black uppercase tracking-widest leading-none">
              98% Success Rate <br />
              <span className="opacity-50">Last Cohort</span>
            </p>
          </div>
        </div>

        <div className="flex-1 w-full form-container">
          <form className="bg-white shadow-[15px_15px_0px_0px_#171717] rounded-3xl border-4 border-[#171717] p-10 neo-shadow relative" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-poppins font-black capitalize tracking-widest text-[#171717]">Full Name</label>
                <input 
                  type="text" 
                  placeholder="JOHN DOE"
                  className="w-full bg-primary rounded-2xl font-poppins border-4 border-[#171717] p-4 font-bold placeholder:opacity-30 focus:outline-none focus:bg-[#C1F42D] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-poppins font-black capitalize tracking-widest text-[#171717]">Email Address</label>
                <input 
                  type="email" 
                  placeholder="YO@ULTRA.AGENCY"
                  className="w-full bg-primary rounded-2xl font-poppins border-4 border-[#171717] p-4 font-bold placeholder:opacity-30 focus:outline-none focus:bg-[#C1F42D] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-poppins font-black capitalize tracking-widest text-[#171717]">Interested Program</label>
                <select className="w-full bg-primary rounded-2xl font-poppins border-4 border-[#171717] p-4 font-bold focus:outline-none focus:bg-[#C1F42D] transition-colors appearance-none">
                  <option>LEADERSHIP & AI</option>
                  <option>DIGITAL MARKETING PRO</option>
                  <option>PERFORMANCE MARKETING</option>
                </select>
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
