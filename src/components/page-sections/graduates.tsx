"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import AlumniCard from "../global/alumniCard";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const ALUMNI_DATA = [
  {
    name: "Ebin Alex",
    image: "/s1.jpg",
    bgColor: "#4DA8B8",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    previousRole: "Modelling",
    newRole: "Advertising Ops Specialist",
    package: "5 LPA",
  },

  {
    name: "jidesh Chettiyoden",
    image: "/s2.png",
    bgColor: "#A5F3A4",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    previousRole: "Fresher",
    newRole: "AdWords Strategist",
    package: "6 LPA",
  },
  {
    name: "Abid hamza",
    image: "/s3.jpg",
    bgColor: "#E2B491",
    companyLogo:
      "https://static.wixstatic.com/media/9d3119_301f2e8f192945d985a494711319760a~mv2.png/v1/fill/w_360,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tula-Properties-Logo.png",
    previousRole: "Fresher",
    newRole: "Digital Marketing Executive",
    package: "4.2 LPA",
  },
  {
    name: "Soumya Jinesh",
    image: "/s4.jpg",
    bgColor: "#B9D19E",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    previousRole: "Retail",
    newRole: "Content Strategist",
    package: "7.5 LPA",
  },
  {
    name: "Ameen Salah",
    image: "/s5.jpg",
    bgColor: "#F3A4A5",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Microsoft_logo.svg",
    previousRole: "Intern",
    newRole: "Full Stack Dev",
    package: "9 LPA",
  },
];

const Graduates: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">
      <section
        ref={sectionRef}
        className="pt-16 pb-8 px-6   bg-background grid-bg overflow-hidden"
      >
        <div className="max-w-7xl   mx-auto">
          <div className="text-center mb- flex flex-col items-center justify-center gap-3">
            <p className=" w-fit bg-primary px-6 text-center  rounded-full text-foreground bg md:text-md text-sm py-2 font-semibold font-poppins">
              our graduates
            </p>
            <h2 className="md:text-6xl text-5xl font-black text-[#171717] uppercase tracking-tighter leading-none mb-16 italic">
              Shaping Tomorrow’s <br />
              <span className="text-[#C1F42D] bg-[#171717] md:px-4 px-2 py-1 inline-block transform -rotate-1 mt-2">
                Professionals
              </span>
            </h2>
          </div>

          <div className=" text-center">
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                // onSwiper={setSwiperInstance}
                // onSlideChange={(swiper) => setProgress((swiper.activeIndex / (ALUMNI_DATA.length - 1)) * 100)}
                breakpoints={{
                  320: { slidesPerView: 1.3 },
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full"
              >
                {ALUMNI_DATA.map((alumni, index) => (
                  <SwiperSlide className="testimonial-card md:ml-2 " key={index}>
                    <AlumniCard {...alumni} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Graduates;
