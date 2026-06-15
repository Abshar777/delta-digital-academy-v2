"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function PageTransitionLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const originalPush = history.pushState.bind(history);
    const originalReplace = history.replaceState.bind(history);

    history.pushState = (...args) => {
      setLoading(true);
      return originalPush(...args);
    };
    history.replaceState = (...args) => {
      setLoading(true);
      return originalReplace(...args);
    };

    return () => {
      history.pushState = originalPush;
      history.replaceState = originalReplace;
    };
  }, []);

  // Navigation complete — hide loader
  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-transition"
          className="fixed inset-0 z-[999] bg-[#171717] flex flex-col items-center justify-center overflow-hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0, transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } }}
          exit={{ y: "-100%", transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1], delay: 0.1 } }}
        >
          {/* Animated logo words */}
          <div className="flex flex-col items-center gap-0 overflow-hidden">
            {["DELTA", "DIGITAL", "ACADEMY"].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  className={`block text-5xl md:text-8xl font-black tracking-tighter expanded-one leading-none ${
                    i === 1 ? "text-primary" : "text-white"
                  }`}
                  initial={{ y: "110%" }}
                  animate={{
                    y: 0,
                    transition: { duration: 0.6, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] },
                  }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <motion.div
            className="mt-10 w-48 h-[2px] bg-white/10 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%", transition: { duration: 0.8, ease: "easeInOut" } }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
