"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { detectCountry, phoneNumber as contactWhatsApp } from "@/const";
import { toast } from "sonner";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EnrollForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [callingCode, setCallingCode] = useState("+971");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".enroll-left", {
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 80%" },
      });
      gsap.from(".enroll-form", {
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 80%" },
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    detectCountry()
      .then((code) => setCallingCode(code))
      .catch(() => setCallingCode("+971"));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    const url = "https://script.google.com/macros/s/AKfycbylGch2L12CkfqtP5Vck1cEB_TMcnqMIfy6os6iIOWgm_InQjN3_wrgnOi1gYWZ6tI3/exec";

    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          PhoneNumber: "_ " + fullPhoneNumber + " _",
          Message: formData.message || "",
        }),
      });
      toast.success("Application submitted successfully!");
      const whatsappMsg = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${fullPhoneNumber}`;
      window.open(`https://wa.me/${contactWhatsApp.replace(/\D/g, "")}?text=${whatsappMsg}`, "_blank");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-transparent border-[1.5px] border-[#171717]/40 rounded-xl px-5 py-4 text-[#171717] text-sm font-light placeholder:text-[#171717]/80 focus:outline-none focus:border-[#C6F83A]/50 focus:bg-[#C6F83A]/5 transition-all";

  return (
    <div id="enroll" className="py-28 md:py-36 relative" ref={formRef}>
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left */}
          <div className="enroll-left flex-1">
            <span className="text-[#C6F83A] text-xs tracking-[0.3em] uppercase font-medium">
              Start Your Journey
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-[#171717] mt-4 tracking-tight leading-[1]">
              Enroll
              <br />
              <span className="italic text-[#C6F83A]">Now.</span>
            </h2>
            <p className="text-[#171717]/90 text-base mt-6 font-light">
              Seats are limited. Secure your slot today.
            </p>
          </div>

          {/* Form */}
          <div className="enroll-form flex-1 w-full">
            <form
              className="glass-panel rounded-3xl p-8 md:p-10 space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="text-[#C6F83A] text-xs tracking-widest uppercase mb-2 block font-medium">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="text-[#C6F83A] text-xs tracking-widest uppercase mb-2 block font-medium">
                  Email Address
                </label>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@email.com"
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[#C6F83A] text-xs tracking-widest uppercase mb-2 block font-medium">
                    Code
                  </label>
                  <select
                    value={callingCode}
                    onChange={(e) => setCallingCode(e.target.value)}
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    <option value="+971">+971</option>
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="text-[#C6F83A] text-xs tracking-widest uppercase mb-2 block font-medium">
                    Mobile Number
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="50 123 4567"
                    className={inputClasses}
                  />
                </div>
              </div>

              <button
                disabled={isLoading}
                className="w-full btn-luxury py-5 rounded-xl text-sm tracking-widest disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? "Processing..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollForm;
