import React from "react";

export default function SocialTrack({ icon, label, value }) {
  if (!value) return null; // ป้องกันกรณี value ว่าง

  return (
    <div>
      {/* Desktop */}
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundImage: "url(/common/Subtract.png)" }}
        className="bg-white items-center hidden md:flex justify-center gap-3 px-4 py-2 min-w-[180px] h-[48px] bg-no-repeat bg-right bg-contain hover:scale-105 transition-all duration-200"
      >
        <img src={icon} className="w-6 h-6" />
        <span className="font-semibold font-inter text-sm">{label}</span>
      </a>

      {/* Mobile */}
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white w-full flex md:hidden font-inter items-center gap-2 sm:gap-3 md:gap-4 px-4 py-2 border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
      >
        <img src={icon} className="w-6 h-6" />
        <span className="font-inter text-xs sm:text-sm md:text-base">{label}</span>
      </a>
    </div>
  );
}
