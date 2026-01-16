"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store";
import Image from "next/image";
import ModalImage from "@/../public/c1.webp";

const ApplyModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen } = useStore();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-[#171717]/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Wrapper */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-2 md:p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20, rotate: -1 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="
                bg-white py-6 rounded-2xl border-8 border-[#171717]
                w-full max-w-5xl
                 md:h-[99%]
                flex flex-col md:flex-row
                neo-shadow relative overflow-hidden
              "
            >
              {/* Close */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-10 h-10 bg-[#171717] text-white flex items-center justify-center hover:bg-[#E63946] transition-colors border-2 border-[#171717]"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* LEFT IMAGE — desktop only */}
              <div className="hidden md:block w-5/12 relative bg-[#F5F5F5] border-r-8 border-[#171717]">
                <Image
                  src={ModalImage}
                  alt="Student"
                  placeholder="blur"
                  className="w-full h-full object-cover grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent" />
              </div>

              {/* RIGHT FORM */}
              <div className="flex-1 p-4 md:p-12 overflow-y-auto">
                <div className="mb-6 md:mb-7">
                  <h2 className="text-3xl md:text-5xl font-black text-[#171717] uppercase tracking-tighter leading-none mb-2">
                    APPLY NOW
                  </h2>
                  <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Start your digital dominance journey
                  </p>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* NAME */}
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      placeholder="ENTER YOUR NAME"
                      className="w-full bg-[#F5F5F5] border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] focus:outline-none"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      placeholder="NAME@AGENCY.COM"
                      className="w-full bg-[#F5F5F5] border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] focus:outline-none"
                    />
                  </div>

                  {/* PHONE */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        Code
                      </label>
                      <select className="w-full bg-[#F5F5F5] border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] focus:outline-none">
                        <option>+91 IN</option>
                        <option>+1 US</option>
                        <option>+44 UK</option>
                      </select>
                    </div>

                    <div className="col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        Mobile Number*
                      </label>
                      <input
                        type="tel"
                        placeholder="00000 00000"
                        className="w-full bg-[#F5F5F5] border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* MODE */}
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Learning Mode
                    </label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="mode"
                          defaultChecked
                          className="w-5 h-5 accent-[#171717]"
                        />
                        <span className="font-bold uppercase text-sm">
                          Online
                        </span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="mode"
                          className="w-5 h-5 accent-[#171717]"
                        />
                        <span className="font-bold uppercase text-sm">
                          Classroom
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <button className="w-full bg-primary text-foreground font-black text-lg md:text-xl py-5 md:py-6 border-4 border-[#171717] shadow-[6px_6px_0px_0px_#171717] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase">
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
