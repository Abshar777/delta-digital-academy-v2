"use client";
import React from 'react'
import { useStore } from '@/store';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const BottomBar = () => {
    const { isModalOpen, setIsModalOpen } = useStore();
  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-[60] bg-white border-2 border-[#171717] rounded-full p-2 flex items-center gap-4">
    <button 
      onClick={() => setIsModalOpen(true)}
      className="bg-primary border-4 border-[#171717] text-black px-5 py-3  rounded-full font-black font-poppins text-sm shadow-[5px_5px_0px_0px_rgba(23,23,23,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3"
    >
      Explore Programs
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <div className="flex gap-2">
      <button className="w-10 h-10 bg-[#25D366] border-4 border-[#171717] rounded-full  justify-center text-white shadow-[3px_3px_0px_0px_rgba(23,23,23,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center">
       <FaWhatsapp className="text-2xl" />
      </button>
      <button className="w-10 h-10 bg-white border-4 border-[#171717] rounded-full justify-center text-[#171717] shadow-[3px_3px_0px_0px_rgba(23,23,23,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center">
        <FaPhone className="text-xl" />
      </button>
    </div>
  </div>

  )
}

export default BottomBar
