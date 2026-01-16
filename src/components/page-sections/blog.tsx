"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATES = [
  {
    title:
      "Meta Andromeda: Meta’s AI Supercomputer Shaping the Future of Digital Technology",
    issuer: "Delta Digital Academy",
    date: "2026",
    image: "/bl1.png",
    id: "CERT-001",
  },
  {
    title: "Meet Your Algorithm: Instagram’s New Power Feature Explained",
    issuer: "Delta Digital Academy",
    date: "2026",
    image: "/bl2.png",
    id: "CERT-002",
  },
  {
    title:
      "Apple Rumored to Explore Billion-Dollar AI Deal with Google to Upgrade Siri",
    issuer: "Delta Digital Academy",
    date: "2026",
    image: "/bl3.png",
    id: "CERT-003",
  },
];

const Blogs: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cert-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-foreground -mt-1 pt-2">
      <section
        ref={containerRef}
        className="
          py-20 px-4
          md:py-32 md:px-20
          grid-bg bg-background
          rounded-t-[4rem] rounded-b-[4rem]
          border-b-4 border-[#171717]
          overflow-hidden relative
        "
      >
        <div className="w-full mx-auto relative z-10">
          {/* HEADER */}
          <div className="text-center flex flex-col items-center justify-center gap-3">
            <p className="w-fit bg-primary px-5 py-2 rounded-full text-foreground text-sm md:text-md font-semibold font-poppins">
              our blogs
            </p>

            <h2
              className="
                text-4xl sm:text-5xl md:text-6xl
                font-black text-[#171717]
                uppercase tracking-tighter leading-none
                italic mb-10 md:mb-16
              "
            >
              Stay Updated with <br />
              <span className="text-[#C1F42D] bg-[#171717] px-4 py-1 inline-block transform -rotate-1 mt-2">
                Our&nbsp;Latest&nbsp;Insights
              </span>
            </h2>
          </div>

          {/* SLIDER */}
          <Swiper
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
            spaceBetween={16}
            loop
            slidesPerView={1.15}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="!pb-12 md:!pb-16"
          >
            {CERTIFICATES.map((cert) => (
              <SwiperSlide
                key={cert.id}
                className="cert-card group relative"
              >
                <div
                  className="
                    bg-white relative
                    border-4 border-[#171717]
                    rounded-2xl overflow-hidden
                    p-2 neo-shadow
                    transition-all
                    min-h-[22rem] sm:min-h-[26rem] md:min-h-[30rem]
                    shadow-[6px_6px_0px_0px_#000]
                    group-hover:scale-[.99]
                    group-hover:shadow-[9px_9px_0px_0px_#000]
                  "
                >
                  <div className="w-full h-[22rem] sm:h-[26rem] md:h-[30rem] flex items-end">
                    <div className="px-2 pb-4 z-[1] border-2 border-foreground bg-background rounded-sm w-full">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#C1F42D] bg-[#171717] px-2 py-0.5 mb-2 inline-block">
                        {cert.issuer}
                      </span>

                      <h3 className="text-base sm:text-lg font-black uppercase tracking-tight leading-none mb-1 text-[#171717]">
                        {cert.title}
                      </h3>

                      <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <span>Issued: {cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 z-[0]">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
