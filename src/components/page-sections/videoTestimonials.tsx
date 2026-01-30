"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const TESTIMONIALS = [
  { id: 1, name: "Ameena Salah", role: "Student", thumbnail: "/t1.mp4" },
  { id: 2, name: "Abid Hamza", role: "Student", thumbnail: "/t2.mp4" },
  { id: 3, name: "Jidesh Chettiyoden", role: "Student", thumbnail: "/t3.mp4" },
  { id: 4, name: "Ebin Alex", role: "Student", thumbnail: "/t5.mp4" },
];

interface ActiveVideo {
  src: string;
  name: string;
  role: string;
}

const FullscreenPlayer: React.FC<{ video: ActiveVideo; onClose: () => void }> = ({ video, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Info overlay */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 pointer-events-none">
        <h4 className="text-white text-xl md:text-2xl font-bold">{video.name}</h4>
        <p className="text-[#C6F83A] text-xs tracking-wider uppercase mt-1">{video.role}</p>
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        src={video.src}
        autoPlay
        playsInline
        controls
        className="w-full h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

const VideoCard: React.FC<{
  name: string;
  role: string;
  src: string;
  onPlay: () => void;
}> = ({ name, role, src, onPlay }) => {
  return (
    <motion.div className="group h-full">
      <div
        className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#FFFFFF] border-2 border-[#171717] transition-all duration-500 group-hover:border-[#C6F83A] cursor-pointer"
        onClick={onPlay}
      >
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFF]/70 via-transparent to-transparent pointer-events-none" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-[#C6F83A] rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
          >
            <Play className="text-[#FDFFF7] fill-[#FDFFF7] w-5 h-5 ml-0.5" />
          </motion.div>
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
          <h4 className="text-[#171717] text-lg font-semibold">{name}</h4>
          <p className="text-[#C6F83A] text-xs tracking-wider uppercase mt-1">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const VideoTestimonials: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);

  const closePlayer = useCallback(() => setActiveVideo(null), []);

  return (
    <>
      <section id="v-testimonials" className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[#C6F83A] text-xs tracking-[0.3em] uppercase font-medium">
                Success Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mt-4 tracking-tight leading-[1.1]">
                See How Our Students
                <br />
                Are <span className="italic text-[#C6F83A]">Crushing</span> the Markets
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex items-center gap-2 text-[#171717]/90 text-sm font-medium">
                <Star className="w-4 h-4 text-[#C6F83A] fill-[#C6F83A]" />
                4.9/5 Student Rating
              </div>
              <div className="flex gap-2">
                <button className="swiper-prev-btn w-10 h-10 rounded-full border border-[#C6F83A]/30 flex items-center justify-center text-[#C6F83A] hover:bg-[#C6F83A]/10 transition-colors cursor-pointer">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="swiper-next-btn w-10 h-10 rounded-full border border-[#C6F83A]/30 flex items-center justify-center text-[#C6F83A] hover:bg-[#C6F83A]/10 transition-colors cursor-pointer">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1.15}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{ nextEl: ".swiper-next-btn", prevEl: ".swiper-prev-btn" }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <VideoCard
                  name={t.name}
                  role={t.role}
                  src={t.thumbnail}
                  onPlay={() => setActiveVideo({ src: t.thumbnail, name: t.name, role: t.role })}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Fullscreen player */}
      <AnimatePresence>
        {activeVideo && <FullscreenPlayer video={activeVideo} onClose={closePlayer} />}
      </AnimatePresence>
    </>
  );
};

export default VideoTestimonials;
