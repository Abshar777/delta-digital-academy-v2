import { links } from "@/const";
import React from "react";
import { FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171717] text-[#F5F0E8] pt-20 pb-10 px-6 relative">
      <div className="absolute top-0 left-0 right-0 editorial-line" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <img src="/logo.png" alt="logo" className="-ml-2 h-20 brightness-0 invert opacity-90" />
            <p className="text-[#F5F0E8]/80 text-xs max-w-md mt-4 leading-relaxed font-light">
              Built in collaboration with top digital marketing professionals.
              Dubai&rsquo;s best academy for future marketing leaders.
            </p>
            <div className="flex gap-4 mt-6">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="w-10 h-10 rounded-full border border-[#F5F0E8]/20 flex items-center justify-center text-[#F5F0E8]/80 hover:text-[#C6F83A] hover:border-[#171717]/30 transition-all"
                >
                  <link.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h5 className="text-[#C6F83A] text-xs tracking-[0.2em] uppercase font-medium mb-6">
                Navigation
              </h5>
              <ul className="space-y-3">
                {[
                  { label: "Services", href: "#services" },
                  { label: "About Us", href: "#about" },
                  { label: "Programs", href: "#courses" },
                  { label: "Alumni", href: "#graduates" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[#F5F0E8]/80 hover:text-[#C6F83A] transition-colors text-sm font-light">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[#C6F83A] text-xs tracking-[0.2em] uppercase font-medium mb-6">
                Contact Us
              </h5>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-[#F5F0E8]/80 hover:text-[#C6F83A] flex items-start gap-3 text-sm font-light transition-colors">
                    <FaMapMarker className="text-[#C6F83A] mt-0.5 flex-shrink-0" />
                    M09, Al Shaibani building, Near Al Qiyada metro station, Abu Hail, Dubai
                  </a>
                </li>
                <li>
                  <a href="tel:+971521240237" className="text-[#F5F0E8]/80 hover:text-[#C6F83A] flex items-center gap-3 text-sm font-light transition-colors">
                    <FaPhone className="text-[#C6F83A] scale-x-[-1]" />
                    +971 52 124 0237
                  </a>
                </li>
                <li>
                  <a href="mailto:info@deltadigitalacademy.com" className="text-[#F5F0E8]/80 hover:text-[#C6F83A] flex items-center gap-3 text-sm font-light transition-colors">
                    <FaEnvelope className="text-[#C6F83A] flex-shrink-0" />
                    info@deltadigitalacademy.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="editorial-line mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#F5F0E8]/70 text-xs tracking-wider">
          <span>&copy; 2026 Delta Digital Academy. All rights reserved.</span>
          <span>Built for the bold.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
