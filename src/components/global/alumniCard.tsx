
import React from 'react';

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
  bgColor, 
  companyLogo, 
  previousRole, 
  newRole, 
  package: lpa 
}) => {
  return (
    <div className="bg-white border-4 border-[#171717] shadow-[6px_6px_0px_0px_#000] overflow-hidden flex flex-col min-w-[320px] transition-all hover:scale-[.98] hover:shadow-[12px_12px_0px_0px_#000] duration-300">
      <div className="h-64 relative overflow-hidden flex items-end justify-center" style={{ backgroundColor: bgColor }}>
        <img 
          src={image} 
          alt={name} 
          className="h-full object-contain  transition-all duration-300" 
        />
      </div>
      
      <div className="p-6 text-center border-t-4 border-[#171717]">
        <h4 className="text-2xl font-black text-[#171717] mb-4 uppercase">{name}</h4>
        
        {/* <div className="flex justify-center mb-6 h-12 items-center">
          <img src={companyLogo} alt="Company" className="max-h-8 object-contain" />
        </div> */}

        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-tight mb-6 px-2">
          <span className="text-gray-500">{previousRole}</span>
          <div className="mx-2 bg-[#171717] rounded-full p-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <span className="text-[#171717] text-right max-w-[120px]">{newRole}</span>
        </div>

        
      </div>
    </div>
  );
};

export default AlumniCard;
