"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimerCardProps {
  value: number;
  label: string;
}

const Digit: React.FC<{ digit: string }> = ({ digit }) => {
  return (
    <div className="relative overflow-hidden h-10   w-[0.6em] flex justify-center">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={digit}
          initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
          transition={{
            y: { type: "spring", stiffness: 400, damping: 35 },
            opacity: { duration: 0.2 },
            filter: { duration: 0.2 }
          }}
          className="absolute    font-poppins font-bold  text-white glow-text"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const TimerCard: React.FC<TimerCardProps> = ({ value, label }) => {
  const displayValue = value.toString().padStart(2, '0');
  const digits = displayValue.split('');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.4)' }}
      className="glass w-full  flex flex-col items-center justify-center p-4 rounded-2xl  shadow-2xl relative group overflow-hidden transition-all duration-300 "
    >
      
      
      {/* Number Container */}
      <div className="relative flex items-center justify-center mb-2 z-10   md:text-4xl text-3xl ">
        {digits.map((digit, idx) => (
          <Digit key={`${label}-digit-${idx}`} digit={digit} />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="text-xs uppercase  font-medium text-primary z-10 "
      >
        {label}
      </motion.div>
      
    
     
    </motion.div>
  );
};

export default TimerCard;
