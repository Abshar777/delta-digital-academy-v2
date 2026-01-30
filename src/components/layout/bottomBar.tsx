"use client";
import React from "react";
import { useStore } from "@/store";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { phoneRedirect, whatsappRedirect } from "@/const";

const BottomBar = () => {
  const { setIsModalOpen } = useStore();
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60]">
      <div className="glass-panel rounded-full px-2 py-2 flex items-center gap-2" style={{ border: "1px solid rgba(198, 248, 58, 0.2)" }}>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-luxury px-6 py-3 rounded-full text-xs tracking-widest flex items-center gap-2 cursor-pointer"
        >
          Explore Programs
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <button
          onClick={whatsappRedirect}
          className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer"
        >
          <FaWhatsapp className="text-lg" />
        </button>
        <button
          onClick={phoneRedirect}
          className="w-10 h-10 rounded-full border border-[#C6F83A]/30 flex items-center justify-center text-[#C6F83A] hover:bg-[#C6F83A]/10 transition-colors cursor-pointer"
        >
          <FaPhone className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
