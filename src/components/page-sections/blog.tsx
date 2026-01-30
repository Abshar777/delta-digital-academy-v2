"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BLOGS = [
  {
    title: "Meta Andromeda: Meta's AI Supercomputer Shaping the Future of Digital Technology",
    issuer: "Delta Digital Academy",
    date: "2026",
    image: "/bl1.png",
    id: "BLOG-001",
  },
  {
    title: "Meet Your Algorithm: Instagram's New Power Feature Explained",
    issuer: "Delta Digital Academy",
    date: "2026",
    image: "/bl2.png",
    id: "BLOG-002",
  },
  {
    title: "Apple Rumored to Explore Billion-Dollar AI Deal with Google to Upgrade Siri",
    issuer: "Delta Digital Academy",
    date: "2026",
    image: "/bl3.png",
    id: "BLOG-003",
  },
];

const Blogs: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      });
      gsap.from(".blog-card", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".blog-slider", start: "top 85%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="blogs" ref={containerRef} className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 line-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="blog-header text-center mb-16">
          <span className="text-[#C6F83A] text-xs tracking-[0.3em] uppercase font-medium">
            Our Blog
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#171717] mt-4 tracking-tight">
            Stay Updated with
            <br />
            <span className="italic text-[#C6F83A]">Latest Insights</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="blog-slider">
          <Swiper
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
            spaceBetween={20}
            loop
            slidesPerView={1.1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="!pb-8"
          >
            {BLOGS.map((blog) => (
              <SwiperSlide key={blog.id} className="blog-card">
                <div className="glass-panel rounded-2xl overflow-hidden group cursor-default h-[400px] md:h-[480px] relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[#C6F83A] text-[10px] tracking-[0.2em] uppercase font-medium">
                      {blog.issuer} &mdash; {blog.date}
                    </span>
                    <h3 className="text-[#171717] text-base md:text-lg font-semibold mt-2 leading-tight">
                      {blog.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
