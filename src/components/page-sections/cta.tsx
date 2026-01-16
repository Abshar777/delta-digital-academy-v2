"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BsGlobe } from 'react-icons/bs';
import Image from 'next/image';
import LogoD from "@/../public/logoD.png"

const CTASection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for decorative elements
      gsap.to(".cta-float", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: "power1.inOut"
      });

      // Text reveal
      gsap.from(".cta-headline", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        skewY: 5,
        duration: 1.2,
        ease: "expo.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
  <div className="md:p-4 p-2">
      <section ref={containerRef} className="md:py-20 py-16 grid-bg px-6 bg-[#C1F42D] border-4 rounded-2xl border-[#171717] relative overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="cta-float md:block hidden absolute top-10 left-10 w-20 h-20 border-4 border-[#171717] bg-white transform rotate-12 flex items-center justify-center font-black text-4xl shadow-[4px_4px_0px_0px_#171717]">
           <Image alt='logo' className='' src={LogoD} width={100} height={100}/>

      </div>
      <div className="cta-float md:block hidden absolute bottom-20 right-20 w-32 h-12 bg-[#171717] text-white flex items-center justify-center font-black uppercase tracking-widest text-xs transform -rotate-12 shadow-[4px_4px_0px_0px_white]">
       Limited Offer
      </div>
      <div className="cta-float md:block hidden absolute top-1/2 right-10 w-16 h-16 border-4 border-[#171717] rounded-full bg-white hidden lg:flex items-center justify-center font-black text-3xl">
       <Image alt='logo' className='' src={LogoD} width={100} height={100}/>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="text-sm font-black uppercase tracking-[0.5em] text-[#171717] mb-8 block">
         Delta Digital Academy
        </span>
        
        <h2 className="cta-headline text-5xl md:text-9xl font-black text-[#171717] uppercase tracking-tighter leading-none mb-16">
          READY TO <br />
          <span className="bg-[#171717] text-[#C1F42D] px-6 py-2 transform -rotate-2 inline-block">LEVEL UP?</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center md:gap-8 gap-4">
          <button className="group  cursor-pointer  rounded-2xl relative bg-[#171717] text-white md:px-12 md:py-8 px-8 py-6 md:text-2xl  font-black uppercase  shadow-[8px_8px_0px_0px_white] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all w-full sm:w-auto">
            Book a Strategy Call
            <div className="absolute -top-4 -right-4 bg-[#E63946] border-2 border-[#171717] px-2 py-1  font-black text-xs font-poppins text-white transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity">
              LIMITED SLOTS
            </div>
          </button>
          
          <button className="bg-white cursor-pointer rounded-2xl shadow-[4px_4px_0px_0px_#171717] text-[#171717] border-4 border-[#171717]  md:px-12 md:py-8 px-8 py-6 md:text-2xl  font-black uppercase tracking-tighter neo-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all w-full sm:w-auto">
            Download Brochure
          </button>
        </div>

        <div className="mt-24 pt-12 border-t-4 border-dashed border-[#171717]/20">
          <p className="text-xl font-bold text-[#171717] italic">
            "Your digital legacy starts with a single click."
          </p>
        </div>
      </div>
    </section>
  </div>
  );
};

export default CTASection;
