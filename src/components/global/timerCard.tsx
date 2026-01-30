"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimerCardProps {
  value: number;
  label: string;
}

const Digit: React.FC<{ digit: string }> = ({ digit }) => {
  return (
    <div className="relative overflow-hidden h-8 w-[0.6em] flex justify-center">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={digit}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            y: { type: "spring", stiffness: 400, damping: 35 },
            opacity: { duration: 0.2 },
          }}
          className="absolute text-[#171717] font-bold"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const TimerCard: React.FC<TimerCardProps> = ({ value, label }) => {
  const displayValue = value.toString().padStart(2, "0");
  const digits = displayValue.split("");

  return (
    <div className="flex flex-col items-center justify-center px-4 py-2">
      <div className="flex items-center text-2xl md:text-3xl">
        {digits.map((digit, idx) => (
          <Digit key={`${label}-digit-${idx}`} digit={digit} />
        ))}
      </div>
      <span className="text-[#C6F83A] text-[10px] uppercase tracking-[0.15em] mt-1 font-medium">
        {label}
      </span>
    </div>
  );
};

export default TimerCard;
