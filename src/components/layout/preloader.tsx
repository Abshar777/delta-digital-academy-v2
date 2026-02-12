"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

export const Preloader: React.FC = () => {
  const [count, setCount] = useState(0);
  const ballControls = useAnimationControls();
  const deltaControls = useAnimationControls();
  const digitalControls = useAnimationControls();
  const academyControls = useAnimationControls();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 25);

    const runSequence = async () => {
      // 1. Initial fall to DELTA
      await ballControls.start({
        y: -150, // Start position relative to center
        opacity: 1,
        transition: { duration: 0 },
      });

      // Drop to DELTA (y: -120 approx for the first word)
      await ballControls.start({
        y: -110,
        transition: { duration: 0.6, ease: [0.33, 0, 0.67, 1] },
      });

      // Impact 1: DELTA
      deltaControls.start({
        scaleY: 0.8,
        y: 10,
        transition: { duration: 0.1, yoyo: 1 },
      });

      // Bounce to DIGITAL
      await ballControls.start({
        y: [-10, -50, 0],
        transition: {
          duration: 0.8,
          times: [0, 0.4, 1],
          ease: ["easeOut", "easeIn"],
        },
      });

      // Impact 2: DIGITAL
      digitalControls.start({
        scaleY: 0.8,
        y: 10,
        transition: { duration: 0.1, yoyo: 1 },
      });

      // Bounce to ACADEMY or fall through
      await ballControls.start({
        y: [0, -60, 110],
        transition: {
          duration: 0.8,
          times: [0, 0.4, 1],
          ease: ["easeOut", "easeIn"],
        },
      });

      // Impact 3: ACADEMY
      academyControls.start({
        scaleY: 0.8,
        y: 10,
        transition: { duration: 0.1, yoyo: 1 },
      });

      // Final drop "into the web"
      await ballControls.start({
        y: 800,
        transition: { duration: 0.8, ease: [0.33, 0, 0.67, 1] },
      });
    };

    runSequence();

    return () => clearInterval(interval);
  }, [ballControls, deltaControls, digitalControls, academyControls]);

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
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#171717] text-[#fdfff7]"
          exit={{
            y: "-100%",
            borderRadius: "0 0 50% 50%",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="container px-8 flex flex-col items-center">
            {/* <motion.div
              animate={ballControls}
              initial={{ opacity: 0, y: -400 }}
              className="absolute w-6 h-6 md:w-8 md:h-8 bg-[#C1F42D] rounded-full z-10 shadow-[0_0_30px_rgba(193,244,45,0.4)]"
              style={{ left: "50%", marginLeft: "-12px" }}
            /> */}

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
                    className={cn(
                      "text-6xl md:text-9xl px-2 expanded-one tracking-tighter",
                      i === 1 && "text-primary bulbe-flcker text-shadow-[0_0_20px_rgba(193,244,45,0.4)] ",
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
