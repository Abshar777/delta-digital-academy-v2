"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FcGoogle } from "react-icons/fc";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TESTIMONIALS = [
  {
    name: "Abdul Jaleel",
    text: "I studied online before and got very confused about digital marketing. Here everything is taught step by step.",
    avatar: "/b1.png",
  },
  {
    name: "Ebin Alex",
    text: "I didn't know digital marketing before, even small words. Now I understand what people say and how it works.",
    avatar: "/b2.png",
  },
  {
    name: "Jidesh Chettiyoden",
    text: "This course helped me get clarity about my career. It feels more practical than online courses.",
    avatar: "/b3.png",
  },
  {
    name: "Soumya Jinesh",
    text: "Always wanted to do something creative. Without any doubt I'll say choosing Delta was my best decision ever.",
    avatar: "/b4.png",
  },
  {
    name: "Ameena Salah",
    text: "I was unsure about my future, but now I have a clear plan. Delta Digital Academy helped me build my career.",
    avatar: "/b5.png",
  },
];

const TestimonialSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-header", {
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
    <section id="testimonials" ref={sectionRef} className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="testimonial-header text-center mb-16">
          <span className="text-[#C6F83A] text-xs tracking-[0.3em] uppercase font-medium">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#171717] mt-4 tracking-tight">
            Student{" "}
            <span className="italic text-[#C6F83A]">Endorsements</span>
          </h2>
          <p className="text-[#171717]/90 text-sm mt-4 tracking-wider uppercase font-medium">
            Don&rsquo;t take our word for it. Take theirs.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1.1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="glass-panel rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between group hover:border-[#C6F83A] transition-colors">
                {/* Stars */}
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-[#C6F83A]" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#171717]/90 text-sm md:text-base leading-relaxed font-light italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-5 border-t-2 border-[#171717]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#171717]/30">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[#171717] text-sm font-semibold">{t.name}</h4>
                      <p className="text-[#171717]/90 text-xs">Student</p>
                    </div>
                  </div>
                  <FcGoogle className="w-5 h-5 opacity-40" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
