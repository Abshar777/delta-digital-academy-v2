"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store";

interface ApplyModalProps {
 
}

const ApplyModal: React.FC<ApplyModalProps> = () => {
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
            className="fixed inset-0 bg-[#171717]/80 backdrop-blur-sm z-[100] "
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4 md:p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20, rotate: -1 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl border-8 border-[#171717] w-full max-w-5xl h-[99%] flex flex-col md:flex-row pointer-events-auto neo-shadow relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#171717] text-white flex items-center justify-center hover:bg-[#E63946] transition-colors border-2 border-[#171717]"
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

              {/* Left Side: Image & Promotion */}
              <div className="hidden md:block w-5/12 relative bg-[#F5F5F5]  border-r-8 border-[#171717]">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                  alt="Student"
                  className="w-full h-full object-cover grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent" />

                {/* Floating Badge */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2"
                >
                  <div className="bg-[#25D366] border-4 border-[#171717] p-4 shadow-[6px_6px_0px_0px_#171717] transform -rotate-3">
                    <p className="text-[10px] font-black uppercase text-white mb-1">
                      PAY AS LOW AS
                    </p>
                    <p className="text-4xl font-black text-white leading-none">
                      ₹6,600
                    </p>
                    <p className="text-[10px] font-black uppercase text-white mt-1">
                      PER MONTH
                    </p>
                  </div>
                </motion.div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-2xl font-black uppercase tracking-tighter leading-none mb-2">
                    Finance Your <br /> Future Today
                  </h3>
                  <p className="text-[#C1F42D] text-xs font-bold uppercase tracking-widest">
                    No Cost EMI Available
                  </p>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="flex-1 p-4 md:p-12">
                <div className="mb-7">
                  <h2 className="text-4xl md:text-5xl font-black text-[#171717] uppercase tracking-tighter leading-none mb-2">
                    APPLY NOW
                  </h2>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Start your digital dominance journey
                  </p>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#F5F5F5]  border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] transition-colors focus:outline-none"
                      placeholder="ENTER YOUR NAME"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#F5F5F5] border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] transition-colors focus:outline-none"
                      placeholder="NAME@AGENCY.COM"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        Code
                      </label>
                      <select className="w-full bg-[#F5F5F5] border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] focus:outline-none appearance-none cursor-pointer">
                        <option>+91 IN</option>
                        <option>+1 US</option>
                        <option>+44 UK</option>
                      </select>
                    </div>
                    <div className="col-span-2 space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        Mobile Number*
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-[#F5F5F5] border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] transition-colors focus:outline-none"
                        placeholder="00000 00000"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Learning Mode
                    </label>
                    <div className="flex gap-8 mt-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="mode"
                          className="w-5 h-5 accent-[#171717]"
                          defaultChecked
                        />
                        <span className="font-bold uppercase text-sm">
                          Online
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
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

                

                  <button className="w-full bg-primary text-foreground font-poppins font-black text-xl py-6 border-4 border-[#171717] shadow-[6px_6px_0px_0px_#171717] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase cursor-pointer">
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
