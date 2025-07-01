import React from "react";

export default function SocialTrack({ icon, label }) {
  return (
    <div>
      <button
        key={label}
        style={{ backgroundImage: "url(/common/Subtract.png)" }}
        className=" items-center hidden md:flex justify-center gap-3 px-4 py-2 min-w-[180px] h-[48px] bg-no-repeat bg-right bg-contain hover:scale-105  transition-all duration-200"
      >
        <img src={icon} className="w-6 h-6" />
        <span className="font-semibold font-inter text-sm">{label}</span>
      </button>

      <button
        key={label}
        className="w-full flex md:hidden font-inter items-center gap-4 px-4 py-3 border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
      >
        <img src={icon} className="w-6 h-6" />
        <span className="font-inter">{label}</span>
      </button>
    </div>
  );
}
