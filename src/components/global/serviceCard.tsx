import React from "react";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full flex flex-col gap-4 group cursor-default hover:border-[#C6F83A] transition-colors">
      <div className="w-10 h-10 rounded-xl bg-[#C6F83A]/10 border border-[#171717]/20 flex items-center justify-center text-[#C6F83A] group-hover:bg-[#C6F83A]/20 transition-colors">
        {service.icon}
      </div>
      <h3 className="text-[#171717] text-sm md:text-base font-semibold leading-tight">
        {service.title}
      </h3>
    </div>
  );
};

export default ServiceCard;
