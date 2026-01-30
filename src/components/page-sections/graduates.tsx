"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ALUMNI_DATA = [
  { name: "Ebin Alex", image: "/s1.jpg", newRole: "Advertising Ops Specialist", company: "Amazon", package: "5 LPA" },
  { name: "Jidesh Chettiyoden", image: "/s2.png", newRole: "AdWords Strategist", company: "Google", package: "6 LPA" },
  { name: "Abid Hamza", image: "/s3.jpg", newRole: "Digital Marketing Exec", company: "Tula Properties", package: "4.2 LPA" },
  { name: "Soumya Jinesh", image: "/s4.jpg", newRole: "Content Strategist", company: "Netflix", package: "7.5 LPA" },
  { name: "Ameen Salah", image: "/s5.jpg", newRole: "Full Stack Dev", company: "Microsoft", package: "9 LPA" },
];

const Graduates: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".grad-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="graduates" ref={sectionRef} className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 line-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grad-header text-center mb-16">
          <span className="text-[#C6F83A] text-xs tracking-[0.3em] uppercase font-medium">
            Our Graduates
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#171717] mt-4 tracking-tight">
            Shaping Tomorrow&rsquo;s
            <br />
            <span className="italic text-[#C6F83A]">Professionals</span>
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {ALUMNI_DATA.map((alumni, index) => (
            <SwiperSlide key={index}>
              <div className="glass-panel rounded-2xl overflow-hidden group cursor-default">
                <div className="h-72 md:h-80 relative overflow-hidden">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFF]/60 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#C6F83A]/90 text-[#FDFFF7] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">
                    {alumni.package}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-[#171717] text-base font-semibold">{alumni.name}</h4>
                  <p className="text-[#2db300] text-xs tracking-wider font-medium mt-1">{alumni.newRole}</p>
                  <p className="text-[#171717] text-xs mt-1">{alumni.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Graduates;
