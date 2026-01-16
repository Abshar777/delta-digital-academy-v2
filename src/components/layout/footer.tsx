import { links } from "@/const";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171717] -mt-1 text-white pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <img src="/logo.png" alt="logo" className="-ml-4 h-25" />
            <p className="text-xs opacity-60 max-w-md  mb-12">
             Built in Collaboration with Top Digital Marketing 
              <br /> Professionals With Delta Digital Academy <br />
            </p>
            <div className="flex gap-6">
              {links.map(
                (link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="w-12 h-12  hover:border-[#C1F42D] hover:text-[#C1F42D] flex items-center justify-center font-black transition-all"
                  >
                    <link.icon className="text-2xl" />
                  </a>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h5 className="text-[#C1F42D] font-black uppercase tracking-widest text-sm">
                Navigation
              </h5>
              <ul className="space-y-4 font-bold uppercase tracking-tighter">
                <li>
                  <a href="#services" className="hover:line-through">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:line-through">
                    about us
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:line-through">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#graduates" className="hover:line-through">
                    Alumni
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="space-y-6">
              <h5 className="text-[#C1F42D] font-black uppercase tracking-widest text-sm">
                Legal
              </h5>
              <ul className="space-y-4 font-bold uppercase tracking-tighter">
                <li>
                  <a href="#" className="hover:line-through">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:line-through">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:line-through">
                    Cookies
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="space-y-6">
              <h5 className="text-[#C1F42D] font-black uppercase tracking-widest text-sm">
                Contact Us
              </h5>
              <ul className="space-y-4 font-semibold font-poppins capitalize tracking-tighter">
                <li>
                  <a href="#" className="hover:line-through flex items-start gap-2">
                    <FaMapMarker className="text-xl flex-shrink-0 mt-2 text-primary" />
                    M09, Al Shaibani building, Near Al Qiyada metro station, Abu
                    Hail , Dubai
                  </a>
                </li>
                <li>
                  <a href="tel:+971521240237" className="hover:line-through flex items-center gap-2">
                    <FaPhone className="text-xl scale-x-[-1] text-primary" />
                    +971 52 124 0237
                  </a>
                </li>
                <li>
                  <a href="mailto:info@deltadigitalacademy.com" className="hover:line-through flex items-center gap-2">
                    <FaEnvelope className="text-xl flex-shrink-0 text-primary" />
                    info@deltadigitalacademy.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 pt-12 border-t border-white/10">
              <h5 className="text-[#C1F42D] font-black uppercase tracking-widest text-sm mb-6">Newsletter</h5>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="YOUR@EMAIL.COM" 
                  className="flex-1 bg-transparent border-2 border-white/20 p-4 font-bold focus:outline-none focus:border-[#C1F42D]"
                />
                <button className="bg-[#C1F42D] text-[#171717] px-8 py-4 font-black uppercase tracking-widest hover:bg-white transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-[0.3em] opacity-40">
          <div>© 2025 ULTRA AGENCY. ALL RIGHTS RESERVED.</div>
          <div>BUILT FOR THE BOLD.</div>
          <div className="flex gap-8">
            <a href="#">SYSTEM STATUS: NOMINAL</a>
            <a href="#">VERSION: 2.0.5</a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
