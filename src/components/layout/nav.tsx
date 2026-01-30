"use client";
import React, { useState, useRef, useEffect } from "react";
import { useScroll, motion } from "framer-motion";
import { Drawer } from "vaul";
import { cn } from "@/lib/utils";
import { navLinks } from "@/const";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";

const Nav = () => {
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (current) => {
      setScrolled(current > 50);
      lastScrollY.current = current;
    });
  }, [scrollY]);

  return (
    <div className="w-full flex justify-center items-center md:px-10 px-2 md:py-4 py-2 fixed top-0 left-0 right-0 z-50">
      {/* Desktop */}
      <motion.div
        className={cn(
          "transition-all md:flex px-8 duration-500 hidden justify-between items-center min-h-10 rounded-full py-4 w-full max-w-6xl",
          scrolled
            ? "bg-[#171717] border border-[#171717] shadow-lg"
            : "bg-[#171717] border border-[#171717]/80"
        )}
      >
        {navLinks.map((link, i) => (
          <React.Fragment key={link.name}>
            {i === 2 && (
              <div className="h-[2.5rem] overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Delta Digital Academy"
                  className="w-full h-full object-contain brightness-0 invert"
                  width={500}
                  height={500}
                />
              </div>
            )}
            <Link
              className="text-white/80 hover:text-[#C6F83A] transition-colors text-sm font-medium tracking-wider uppercase"
              href={link.href}
            >
              {link.name}
            </Link>
          </React.Fragment>
        ))}
      </motion.div>

      {/* Mobile */}
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <motion.div
          className={cn(
            "transition-all md:hidden flex px-4 duration-500 justify-between items-center min-h-10 rounded-full py-2 w-full",
            scrolled
              ? "bg-[#171717] border border-[#171717] shadow-lg"
              : "bg-[#171717] border border-[#171717]/80"
          )}
        >
          <a href="tel:+971521240237" className="bg-[#C6F83A] rounded-full p-2">
            <FaPhoneAlt className="text-sm text-[#FDFFF7]" />
          </a>
          <div className="h-[2.5rem] overflow-hidden">
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={30}
              className="object-contain brightness-0 invert"
            />
          </div>
          <Drawer.Trigger asChild>
            <button className="flex bg-[#C6F83A] rounded-full p-2 items-center gap-2 outline-none">
              <HiMenuAlt4 className="text-lg text-[#FDFFF7]" />
            </button>
          </Drawer.Trigger>
        </motion.div>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" />
          <Drawer.Content className="bg-[#FDFFF7] flex flex-col rounded-t-[32px] h-[55dvh] fixed bottom-0 left-0 right-0 z-[70] outline-none border-t-2 border-[#171717]">
            <div className="mx-auto w-12 h-1 flex-shrink-0 rounded-full bg-[#C6F83A]/30 my-4" />
            <div className="p-6 flex-1">
              <div className="max-w-md mx-auto">
                <Drawer.Title className="text-[#C6F83A] mb-8 text-center text-xs uppercase tracking-[0.3em] font-medium">
                  Navigation
                </Drawer.Title>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-[#171717] text-xl font-medium py-3 border-b-2 border-[#171717] last:border-0 tracking-wide"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="tel:+971521240237"
                    className="w-full btn-luxury py-4 rounded-xl flex justify-center items-center gap-2 text-sm tracking-widest"
                  >
                    <FaPhoneAlt /> Contact Us
                  </a>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default Nav;
