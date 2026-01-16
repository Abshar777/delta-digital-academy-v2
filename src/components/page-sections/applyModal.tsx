"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store";
import Image from "next/image";
import ModalImage from "@/../public/c1.webp";
import { detectCountry, phoneNumber as contactWhatsApp } from "@/const";
import { toast } from "sonner";

const ApplyModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen } = useStore();
  
  // --- STATE MANAGEMENT ---
  const [isLoading, setIsLoading] = useState(false);
  const [callingCode, setCallingCode] = useState("+971");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mode: "Online",
  });

  // Country Detection
  useEffect(() => {
    if (isModalOpen) {
      detectCountry()
        .then((code) => setCallingCode(code))
        .catch(() => setCallingCode("+971"));
    }
  }, [isModalOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    const fullPhoneNumber = `${callingCode} ${formData.phone}`;
    const scriptUrl = "https://script.google.com/macros/s/AKfycbylGch2L12CkfqtP5Vck1cEB_TMcnqMIfy6os6iIOWgm_InQjN3_wrgnOi1gYWZ6tI3/exec";

    try {
      // Send to Google Sheets
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors", 
       
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          PhoneNumber: "_ "+fullPhoneNumber+" _",
          Message: `Mode: ${formData.mode}`,
        }),
      });

      toast.success("Application submitted successfully!");

      // Open WhatsApp
      const whatsappMsg = `*New Application*%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${fullPhoneNumber}%0AMode: ${formData.mode}`;
      window.open(`https://wa.me/${contactWhatsApp.replace(/\D/g, "")}?text=${whatsappMsg}`, "_blank");

      // Reset and Close
      setFormData({ name: "", email: "", phone: "", mode: "Online" });
      setIsModalOpen(false); 
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
              className="bg-white py-6 rounded-2xl border-8 border-[#171717] w-full max-w-5xl md:h-[99%] flex flex-col md:flex-row neo-shadow relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-10 h-10 bg-[#171717] text-white flex items-center justify-center hover:bg-[#E63946] transition-colors border-2 border-[#171717]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* LEFT IMAGE */}
              <div className="hidden md:block w-5/12 relative bg-[#F5F5F5] border-r-8 border-[#171717]">
                <Image src={ModalImage} alt="Student" placeholder="blur" className="w-full h-full object-cover grayscale-[30%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent" />
              </div>

              {/* RIGHT FORM */}
              <div className="flex-1 p-4 md:p-12 overflow-y-auto">
                <div className="mb-6 md:mb-7">
                  <h2 className="text-3xl md:text-5xl font-black text-[#171717] uppercase tracking-tighter leading-none mb-2">APPLY NOW</h2>
                  <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">Start your digital dominance journey</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* NAME */}
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name*</label>
                    <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="ENTER YOUR NAME" className="w-full bg-[#F5F5F5] border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] focus:outline-none" />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address*</label>
                    <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="NAME@AGENCY.COM" className="w-full bg-[#F5F5F5] border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] focus:outline-none" />
                  </div>

                  {/* PHONE */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Code</label>
                      <select value={callingCode} onChange={(e) => setCallingCode(e.target.value)} className="w-full bg-[#F5F5F5] border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] focus:outline-none">
                        <option value="+971">+971 UAE</option>
                        <option value="+91">+91 IN</option>
                        <option value="+1">+1 US</option>
                        <option value="+44">+44 UK</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Mobile Number*</label>
                      <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="00000 00000" className="w-full bg-[#F5F5F5] border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] focus:outline-none" />
                    </div>
                  </div>

                  {/* MODE */}
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Learning Mode</label>
                    <div className="flex gap-6 mt-2">
                      {["Online", "Classroom"].map((m) => (
                        <label key={m} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="mode"
                            value={m}
                            checked={formData.mode === m}
                            onChange={handleChange}
                            className="w-5 h-5 accent-[#171717]"
                          />
                          <span className="font-bold uppercase text-sm">{m}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <button 
                    disabled={isLoading} 
                    className="w-full bg-primary text-foreground font-black text-lg md:text-xl py-5 md:py-6 border-4 border-[#171717] shadow-[6px_6px_0px_0px_#171717] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase disabled:opacity-50"
                  >
                    {isLoading ? "Submitting..." : "Submit Application"}
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