"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import TimerCard from "@/components/global/timerCard";
import { getTargetDate, calculateTimeLeft } from "@/lib/timer";
import { TimeLeft } from "@/lib/timer";

const Timer = () => {
  const targetDate = useMemo(() => getTargetDate(), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div className="flex flex-col justify-center items-center gap-1">
     
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid  grid-cols-4  z-20"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <TimerCard value={timeLeft.days} label="Days" />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <TimerCard value={timeLeft.hours} label="Hours" />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <TimerCard value={timeLeft.minutes} label="Minutes" />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <TimerCard value={timeLeft.seconds} label="Seconds" />
        </motion.div>
        
      </motion.div>
       <p className=" w-fit bg-primary px-3 text-center  rounded-full text-foreground bg text-xs py-1 font-semibold font-poppins">
        Offer Ends In
      </p>
    </div>
  );
};

export default Timer;
