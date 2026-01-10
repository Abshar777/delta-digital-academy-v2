"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Founding Designer",
    text: "Ultra Agency didn't just build a site; they built a movement. The ROI was immediate and the vibes are unmatched.",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    text: "The speed of execution is terrifying. In a good way. We went from concept to viral in under three weeks.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Jordan Smith",
    role: "Product Lead",
    text: "Finally, an agency that understands the intersection of high-end aesthetics and conversion-focused code.",
    avatar: "https://i.pravatar.cc/150?u=jordan",
  },
  {
    name: "Jordan Smith",
    role: "Product Lead",
    text: "Finally, an agency that understands the intersection of high-end aesthetics and conversion-focused code.",
    avatar: "https://i.pravatar.cc/150?u=jordan",
  },
  {
    name: "Jordan Smith",
    role: "Product Lead",
    text: "Finally, an agency that understands the intersection of high-end aesthetics and conversion-focused code.",
    avatar: "https://i.pravatar.cc/150?u=jordan",
  },
  {
    name: "Jordan Smith",
    role: "Product Lead",
    text: "Finally, an agency that understands the intersection of high-end aesthetics and conversion-focused code.",
    avatar: "https://i.pravatar.cc/150?u=jordan",
  },
];

const TestimonialSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: (i) => (i % 2 === 0 ? -100 : 100),
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 bg-background grid-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center justify-center mb-24">
          <p className=" w-fit bg-primary px-6 text-center  rounded-full text-foreground bg text-md py-2 font-semibold font-poppins">
            testimonials
          </p>
          <h2 className="text-7xl gap-2 flex items-center   font-black mt-7 text-[#171717] capitalize tracking-tighter leading-none itaic mb-6">
            Student{" "}
            <div className="flex justify-center -space-x-4 ">
          {[1,2,3,4].map((i) => (
            <div key={i} className="w-14 h-14 rounded-full border-4 border-[#171717] overflow-hidden bg-white shadow-md">
              <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="alumni" />
            </div>
          ))}
        
        </div>
            <span className="">
              Endorsements
            </span>
          </h2>
          <p className="text-md font-bold uppercase tracking-widest opacity-60">
            Don't take our word for it. Take theirs.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-next-btn",
            prevEl: ".swiper-prev-btn",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="grid !pb-16  gap-12"
        >
          {TESTIMONIALS.map((t, i) => (
            <>
              <SwiperSlide key={i}>
                <div key={i} className="testimonial-card relative group">
                  <div className="bg-primary/10 backdrop-blur-sm border-4 border-[#171717] p-8 rounded-2xl neo-shadow relative z-10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          className="w-6 h-6 fill-yellow-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xl font-bold text-[#171717] leading-tight mb-8">
                      "{t.text}"
                    </p>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-[#171717] overflow-hidden">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-black uppercase tracking-tighter text-sm">
                            {t.name}
                          </h4>
                          <p className="text-xs font-bold uppercase opacity-60">
                            {t.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <FcGoogle className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  {/* Retro accent shape */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-dashed border-[#171717] -z-0 opacity-20"></div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      
      </div>
    </section>
  );
};

export default TestimonialSection;
