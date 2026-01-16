"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BsGlobe } from "react-icons/bs";
import { detectCountry, phoneNumber as contactWhatsApp } from "@/const";
import { toast } from "sonner";

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

  // GSAP Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-container", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  // Country Detection
  useEffect(() => {
    detectCountry()
      .then((code) => {
        setCallingCode(code);
      })
      .catch(() => setCallingCode("+971"));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple Validation
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
        mode: "no-cors", // Use no-cors if GSPS doesn't have CORS enabled
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          PhoneNumber: "_ "+fullPhoneNumber+" _",
          Message: formData.message || "",
        }),
      });

      toast.success("Application submitted successfully!");

      // Open WhatsApp
      const whatsappMsg = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${fullPhoneNumber}`;
      window.open(`https://wa.me/${contactWhatsApp.replace(/\D/g, "")}?text=${whatsappMsg}`, "_blank");

      // Reset Form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="enroll" className="bg-foreground md:mt-0 -mt-1 pt-3">
      <section ref={formRef} className="md:py-32 py-20 grid-bg px-6 bg-background md:rounded-t-[4rem] rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row md:gap-20 gap-6 items-center">
          {/* Left Content */}
          <div className="flex-1">
            <div className="bg-primary text-black rounded-full p-3 font-poppins inline-block font-black uppercase tracking-widest text-xs mb-6 transform -rotate-2">
              Fill Form
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-[#171717] capitalize font-poppins tracking-tighter leading-none mb-8">
              ENROLL <br /> NOW.
            </h2>
            <p className="md:text-xl text-lg font-bold text-[#171717] max-w-md">
              Seats are limited. Secure your slot today.
            </p>
          </div>

          {/* Form Content */}
          <div className="flex-1 w-full mt-5 form-container">
            <form className="bg-white shadow-[15px_15px_0px_0px_#171717] rounded-3xl border-4 border-[#171717] md:p-10 p-6 relative" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-8">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-poppins font-black capitalize tracking-widest text-[#171717]">Full Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" className="w-full bg-primary rounded-2xl border-4 border-[#171717] p-4 font-bold focus:outline-none focus:bg-[#C1F42D] transition-colors" />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-poppins font-black capitalize tracking-widest text-[#171717]">Email Address</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" className="w-full bg-primary rounded-2xl border-4 border-[#171717] p-4 font-bold focus:outline-none focus:bg-[#C1F42D] transition-colors" />
                </div>

                {/* Phone Grid */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1 space-y-1">
                    <label className="text-sm font-poppins font-black uppercase tracking-widest text-[#171717]">Code</label>
                    <select 
                      value={callingCode} 
                      onChange={(e) => setCallingCode(e.target.value)}
                      className="w-full bg-primary rounded-2xl border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="+971">+971 UAE</option>
                      <option value="+91">+91 IN</option>
                      <option value="+1">+1 US</option>
                      <option value="+44">+44 UK</option>
                    </select>
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-sm font-poppins font-black uppercase tracking-widest text-[#171717]">Mobile Number</label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-primary rounded-2xl border-4 border-[#171717] p-4 font-bold focus:bg-[#C1F42D] transition-colors focus:outline-none"
                      placeholder="50 123 4567"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button 
                  disabled={isLoading}
                  className="w-full shadow-[4px_4px_0px_0px_#C1F42D] hover:shadow-none rounded-2xl bg-[#171717] text-[#C1F42D] font-black text-xl capitalize py-6 border-4 border-[#171717] hover:bg-[#C1F42D] hover:text-[#171717] transition-all duration-300 disabled:opacity-70"
                >
                  {isLoading ? "Processing..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnrollForm;