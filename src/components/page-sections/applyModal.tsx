"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store";
import { detectCountry, phoneNumber as contactWhatsApp } from "@/const";
import { toast } from "sonner";

const ApplyModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const [callingCode, setCallingCode] = useState("+971");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mode: "Online",
  });

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
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbylGch2L12CkfqtP5Vck1cEB_TMcnqMIfy6os6iIOWgm_InQjN3_wrgnOi1gYWZ6tI3/exec";
    try {
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          PhoneNumber: "_ " + fullPhoneNumber + " _",
          Message: `Mode: ${formData.mode}`,
        }),
      });
      toast.success("Application submitted successfully!");
      const whatsappMsg = `*New Application*%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${fullPhoneNumber}%0AMode: ${formData.mode}`;
      window.open(`https://wa.me/${contactWhatsApp.replace(/\D/g, "")}?text=${whatsappMsg}`, "_blank");
      setFormData({ name: "", email: "", phone: "", mode: "Online" });
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-transparent border-[1.5px] border-[#171717]/40 rounded-xl px-5 py-4 text-[#171717] text-sm font-light placeholder:text-[#171717]/80 focus:outline-none focus:border-[#C6F83A]/50 focus:bg-[#C6F83A]/5 transition-all";

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-[#171717]/60 backdrop-blur-md z-[100]"
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="glass-panel rounded-3xl w-full max-w-lg p-8 md:p-10 relative"
              style={{ border: "2px solid #171717" }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[#171717]/30 flex items-center justify-center text-[#171717]/90 hover:text-[#C6F83A] hover:border-[#171717]/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#171717] tracking-tight">
                  Apply <span className="italic text-[#C6F83A]">Now</span>
                </h2>
                <p className="text-[#171717]/90 text-xs tracking-wider uppercase mt-2">
                  Start your digital dominance journey
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-[#C6F83A] text-[10px] tracking-widest uppercase mb-1.5 block font-medium">
                    Full Name*
                  </label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your name" className={inputClasses} />
                </div>

                <div>
                  <label className="text-[#C6F83A] text-[10px] tracking-widest uppercase mb-1.5 block font-medium">
                    Email Address*
                  </label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@email.com" className={inputClasses} />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[#C6F83A] text-[10px] tracking-widest uppercase mb-1.5 block font-medium">
                      Code
                    </label>
                    <select value={callingCode} onChange={(e) => setCallingCode(e.target.value)} className={`${inputClasses} appearance-none cursor-pointer`}>
                      <option value="+971">+971</option>
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="text-[#C6F83A] text-[10px] tracking-widest uppercase mb-1.5 block font-medium">
                      Mobile Number*
                    </label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="00000 00000" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label className="text-[#C6F83A] text-[10px] tracking-widest uppercase mb-2 block font-medium">
                    Learning Mode
                  </label>
                  <div className="flex gap-6">
                    {["Online", "Classroom"].map((m) => (
                      <label key={m} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          value={m}
                          checked={formData.mode === m}
                          onChange={handleChange}
                          className="w-4 h-4 accent-[#C6F83A]"
                        />
                        <span className="text-[#171717]/90 text-sm font-light">{m}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  disabled={isLoading}
                  className="w-full btn-luxury py-5 rounded-xl text-sm tracking-widest mt-4 disabled:opacity-50 cursor-pointer"
                >
                  {isLoading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
