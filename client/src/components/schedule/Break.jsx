import React from "react";

const Break = () => {
  return (
    <div className="flex items-center justify-center w-[180px] lg:w-[240px]">
      <div className="flex-1 h-px bg-white"></div>

      <div className=" px-6 py-[2px] rounded-[50px] border border-white">
        <span className="text-white font-medium text-xs tracking-widest uppercase">
          Break
        </span>
      </div>

      <div className="flex-1 h-px bg-white"></div>
    </div>
  );
};

export default Break;
