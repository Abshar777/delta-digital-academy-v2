"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import TimerCard from "@/components/global/timerCard";
import { getTargetDate, calculateTimeLeft, TimeLeft } from "@/lib/timer";

const Timer = () => {
  const targetDate = useMemo(() => getTargetDate(), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="flex items-center gap-1 glass-panel rounded-2xl px-2 py-1"
        style={{ border: "1px solid rgba(198, 248, 58, 0.1)" }}
      >
        <TimerCard value={timeLeft.days} label="Days" />
        <span className="text-[#C6F83A]/60 text-xl">:</span>
        <TimerCard value={timeLeft.hours} label="Hours" />
        <span className="text-[#C6F83A]/60 text-xl">:</span>
        <TimerCard value={timeLeft.minutes} label="Min" />
        <span className="text-[#C6F83A]/60 text-xl">:</span>
        <TimerCard value={timeLeft.seconds} label="Sec" />
      </motion.div>
      <span className="text-[#C6F83A] text-[10px] tracking-[0.2em] uppercase font-medium">
        Offer Ends In
      </span>
    </div>
  );
};

export default Timer;
