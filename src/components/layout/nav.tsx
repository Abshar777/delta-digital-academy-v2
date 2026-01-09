"use client";
import React, { useState, useRef, useEffect } from "react";
import { useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/const";
import Link from "next/link";
import Image from "next/image";
import { FaHamburger, FaPhoneAlt } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";

const Nav = () => {
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (current) => {
      if (current > lastScrollY.current) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollY.current = current;
    });
  }, [scrollY]);

  return (
    <div className="w-full  flex justify-center items-center md:px-20 px-1 md:py-6 py-2 fixed top-0 left-0 right-0 z-50">
      <motion.div
        className={cn(
          "transition-all md:flex px-10 backdrop-blur-sm duration-300 hidden justify-between items-center bg-foreground/90 min-h-10 rounded-full py-5",
          !isScrollingDown ? "w-[90%] mt-0 " : "w-[95%] mt-0"
        )}
      >
        {navLinks.map((link, i) =>
          i == 2 ? (
            <>
              <div className="h-[2.5rem] overflow-hidden \">
                <Image
                  src="/logo.png"
                  alt="phone"
                  className="w-full h-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
              <Link className="text-white" href={link.href} key={link.name}>
                {link.name}
              </Link>
            </>
          ) : (
            <Link className="text-white" href={link.href} key={link.name}>
              {link.name}
            </Link>
          )
        )}
      </motion.div>
      <motion.div
        className={cn(
          "transition-all md:hidden flex px-3 backdrop-blur-sm duration-300  justify-between items-center bg-foreground/90 min-h-10 rounded-full py-2",
          !isScrollingDown ? "w-[97%] mt-0 " : "w-[97%] mt-0"
        )}
      >
        {/* {navLinks.map((link, i) =>
          i == 2 ? (
            <>
              <div className="h-[2.5rem] overflow-hidden \">
                <Image src="/logo.png" alt="phone" className="w-full h-full object-contain" width={500} height={500} />
              </div>
              <Link className="text-white" href={link.href} key={link.name}>
                {link.name}
              </Link>
            </>
          ) : (
            <Link className="text-white" href={link.href} key={link.name}>
              {link.name}
            </Link>
          )
          )} */}
       <div className="bg-primary rounded-full p-2 ">
        <FaPhoneAlt className="text-md text-foreground " />
       </div>
        <div className="h-[2.5rem] overflow-hidden \">
          <Image
            src="/logo.png"
            alt="phone"
            className="w-full h-full object-contain"
            width={500}
            height={500}
          />
        </div>
        <div className="flex bg-primary rounded-full p-2  items-center gap-2">
          <HiMenuAlt4 className="text-xl text-black " />
        </div>
      </motion.div>
    </div>
  );
};

export default Nav;
