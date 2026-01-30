import React from "react";

interface AlumniCardProps {
  name: string;
  image: string;
  bgColor: string;
  companyLogo: string;
  previousRole: string;
  newRole: string;
  package: string;
}

const AlumniCard: React.FC<AlumniCardProps> = ({
  name,
  image,
  newRole,
  package: lpa,
}) => {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden group cursor-default">
      <div className="h-56 relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF]/60 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 bg-[#C6F83A]/90 text-[#FDFFF7] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">
          {lpa}
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-[#171717] text-base font-semibold">{name}</h4>
        <p className="text-[#C6F83A]/60 text-xs tracking-wider mt-1">{newRole}</p>
      </div>
    </div>
  );
};

export default AlumniCard;
