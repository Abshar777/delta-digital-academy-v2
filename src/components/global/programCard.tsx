import React from "react";

interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface ProgramCardProps {
  title: string;
  duration: string;
  mode: string;
  stats: Stat[];
  image: string;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, duration, mode, stats, image }) => {
  return (
    <div className="glass-panel rounded-3xl overflow-hidden group">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Image */}
        <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FFFFFF] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] to-transparent lg:hidden" />
          <div className="absolute top-4 left-4 bg-[#C6F83A] text-[#FDFFF7] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
            Now Enrolling
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex gap-3 mb-6">
              <span className="border border-[#C6F83A]/30 text-[#C6F83A] px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                {duration}
              </span>
              <span className="border border-[#171717]/30 text-[#171717]/80 px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                {mode}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#171717] tracking-tight mb-8">{title}</h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#C6F83A]/80">{stat.icon}</span>
                  <span className="text-[#171717]/90 text-xs font-light">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <a href="#enroll" className="btn-luxury inline-block px-10 py-4 rounded-full text-sm tracking-widest">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
