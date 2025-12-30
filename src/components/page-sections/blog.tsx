"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATES = [
  {
    title: "Google Ads Certified",
    issuer: "Google Skillshop",
    date: "2024",
    image:
      "/b1.png",
    id: "CERT-001",
  },
  {
    title: "Meta Marketing Science",
    issuer: "Meta Blueprint",
    date: "2024",
    image:
      "/b2.png",
    id: "CERT-002",
  },
  {
    title: "HubSpot SEO Expert",
    issuer: "HubSpot Academy",
    date: "2023",
    image:
      "/b3.png",
    id: "CERT-003",
  },
  // {
  //   title: "AI Strategy Masters",
  //   issuer: "Digital Institute",
  //   date: "2025",
  //   image:
  //     "/b3.png",
  //   id: "CERT-004",
  // },
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

      gsap.to(".floating-sticker", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-foreground pt-2">
      <section
        ref={containerRef}
        className="py-32  grid-bg rounded-t-[4rem] rounded-b-[4rem] px-20 bg-background border-b-4 border-[#171717] overflow-hidden relative"
      >
      

        <div className="w-full mx-auto relative z-10">
        <div className="text-center mb- flex flex-col items-center justify-center gap-3">
            <p className=" w-fit bg-primary px-6 text-center  rounded-full text-foreground bg text-md py-2 font-semibold font-poppins">
              our blogs
            </p>
            <h2 className="text-6xl font-black text-[#171717] uppercase tracking-tighter leading-none mb-16 italic">
              Stay Updated with <br />
              <span className="text-[#C1F42D] bg-[#171717] px-4 py-1 inline-block transform -rotate-1 mt-2">
                Our Latest Insights
              </span>
            </h2>
          </div>

          <Swiper
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
            spaceBetween={24}
            loop={true}
            slidesPerView={1.2}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className=" !pb-16  "
          >
            {CERTIFICATES.map((cert) => (
              <SwiperSlide key={cert.id} className="cert-card   group relative">
                <div className="bg-white relative border-4 min-h-[30rem] rounded-2xl overflow-hidden border-[#171717] p-2 neo-shadow transition-all group-hover:scale-[.99] group-hover:shadow-[9px_9px_0px_0px_#000] shadow-[6px_6px_0px_0px_#000]">
                  <div className="w-full h-[30rem]  flex items-end ">
                    <div className="px-2 pb-4 z-[1] border-2 border-foreground relative bg-background rounded-sm w-full">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#C1F42D] bg-[#171717] px-2 py-0.5 mb-2 inline-block">
                        {cert.issuer}
                      </span>
                      <h3 className="text-lg font-black uppercase tracking-tight leading-none mb-1 text-[#171717]">
                        {cert.title}
                      </h3>
                      <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <span>Issued: {cert.date}</span>
                        <span className="opacity-40">{cert.id}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-full w-full z-[0] top-0 right-0">
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
