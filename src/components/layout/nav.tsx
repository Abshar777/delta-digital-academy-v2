"use client";
import React, { useState, useRef, useEffect } from "react";
import { useScroll, motion } from "framer-motion";
import { Drawer } from "vaul"; // Import Vaul
import { cn } from "@/lib/utils";
import { navLinks } from "@/const";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";

const Nav = () => {
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (current) => {
      setIsScrollingDown(current > lastScrollY.current && current > 50);
      lastScrollY.current = current;
    });
  }, [scrollY]);

  return (
    <div className="w-full flex justify-center items-center md:px-20 px-1 md:py-6 py-2 fixed top-0 left-0 right-0 z-50">
      {/* Desktop View */}
      <motion.div
        className={cn(
          "transition-all md:flex px-10 backdrop-blur-sm duration-300 hidden justify-between items-center bg-foreground/90 min-h-10 rounded-full py-5",
          !isScrollingDown ? "w-[90%]" : "w-[95%]"
        )}
      >
        {navLinks.map((link, i) => (
          <React.Fragment key={link.name}>
            {i === 2 && (
              <div className="h-[2.5rem]  overflow-hidden \">
                <Image
                  src="/logo.png"
                  alt="phone"
                  className="w-full h-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            )}
            <Link className="text-white hover:text-primary transition-colors" href={link.href}>
              {link.name}
            </Link>
          </React.Fragment>
        ))}
      </motion.div>

      {/* Mobile Bar & Vaul Drawer */}
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <motion.div
          className="transition-all md:hidden flex px-3 backdrop-blur-sm duration-300 justify-between items-center bg-foreground/90 min-h-10 rounded-full py-2 w-[97%]"
        >
          <div className="bg-primary rounded-full p-2">
            <FaPhoneAlt className="text-md text-foreground" />
          </div>
          <div className="h-[3rem] overflow-hidden">
            <Image src="/logo.png" alt="logo" width={80} height={30} className="object-contain" />
          </div>
          
          {/* Vaul Trigger */}
          <Drawer.Trigger asChild>
            <button className="flex bg-primary rounded-full p-2 items-center gap-2 outline-none">
              <HiMenuAlt4 className="text-xl text-black" />
            </button>
          </Drawer.Trigger>
        </motion.div>

        <Drawer.Portal>
          {/* Overlay / Backdrop */}
          <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]" />
          
          <Drawer.Content className="bg-zinc-900 flex flex-col rounded-t-[32px] h-[60dvh] mt-24 fixed bottom-0 left-0 right-0 z-[70] outline-none border-t border-white/10">
            {/* The Draggable Handle */}
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-700 my-4" />
            
            <div className="p-4 bg-zinc-900 flex-1 rounded-t-[32px]">
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium text-zinc-400 mb-8 text-center">
                  Navigation
                </Drawer.Title>
                
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)} // Close on click
                      className="text-white text-2xl font-semibold py-3 border-b border-white/5 last:border-0"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-10">
                   <button className="w-full bg-primary text-black font-bold py-4 rounded-2xl flex justify-center items-center gap-2">
                      <FaPhoneAlt /> Contact Support
                   </button>
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