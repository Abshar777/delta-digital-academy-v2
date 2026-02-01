"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Preloader: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  const titleWords = ["DELTA", "DIGITAL", "ACADEMY"];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay for preloader impact
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence mode="wait">
      {isLoading&&<motion.div
        className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#171717] text-[#fdfff7]"
        exit={{
          y: "-100%",
          transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        <div className="container px-8 flex flex-col items-center">
          <div className="flex flex-col mb-12 items-center justify-center overflow-hidden">
            {titleWords.map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className={cn("text-6xl md:text-9xl px-2 expanded-one tracking-tighter",
                    i===1&&"text-primary"
                  )}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          <div className="w-full max-w-md h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#C1F42D]"
              initial={{ width: "0%" }}
              animate={{ width: `${count}%` }}
            />
          </div>

          <motion.div
            className="mt-4 flex justify-between w-full max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-xs uppercase tracking-widest opacity-50">
              Loading Excellence
            </span>
            <span className="text-xs font-mono">{count}%</span>
          </motion.div>
        </div>
      </motion.div>}
    </AnimatePresence>
  );
};
