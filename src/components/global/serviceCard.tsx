
import React from 'react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group w-full relative rounded-2xl bg-white border-2 border-[#171717] p-6 shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] neo-shadow transition-all duration-300 ease-in-out neo-shadow-hover flex flex-col justify-between h-full">
      <div>
        <div className="mb-6 p-2 bg-[#C1F42D] border-2 border-[#171717] inline-block shadow-[4px_4px_0px_0px_rgba(23,23,23,1)]">
          {service.icon}
        </div>
        <h3 className="md:text-2xl text-md font-black text-[#171717] mb-4 uppercase tracking-tighter leading-none">
          {service.title}
        </h3>
        {/* <p className="text-[#171717] text-sm font-medium leading-relaxed mb-6">
          {service.description}
        </p> */}
      </div>
      
     

      {/* <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
        <svg className="w-8 h-8 text-[#171717]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div> */}
    </div>
  );
};

export default ServiceCard;
