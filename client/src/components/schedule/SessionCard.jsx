// components/schedule/SessionCard.jsx
import React from "react";
import { Download, MapPin } from "lucide-react";
import { request } from "@/libs/utils/request";
import { useNavigate } from "react-router";

const SessionCard = ({ session, isMobile = false }) => {
  const badgeWidth = isMobile ? "w-6 md:w-10" : "w-10";
  const contentMargin = isMobile ? "ml-4 md:ml-10" : "ml-10";

  const navigate = useNavigate()
  
  const getPdfFile = () => {
    navigate(`${session.slideUrl}`)
  }
  
  return (
    <div className="p-3 relative overflow-hidden font-inter bg-white rounded-[12px]">
      <div
        className={`absolute left-0 top-0 bottom-0 ${badgeWidth} ${
          session.type === "NOW SHOWING" ? "bg-[#BB3E42]" : "bg-[#1C5297]"
        } flex items-center justify-center`}
      >
        <span className="text-white text-[10px] leading-2 md:text-[14px] transform -rotate-90 whitespace-nowrap">
          {session.type}
        </span>
      </div>
      <div className={`${contentMargin}`}>
        <div className="flex items-start justify-between">
          <h3 className="text-black font-bold text-xs md:text-lg">
            {session.courseName}
          </h3>
          <button onClick={() => { getPdfFile() }} className="p-1 hover:bg-gray-100 rounded-[8px] border border-gray-300 flex items-center justify-center cursor-pointer">
            <Download className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
          </button>
        </div>
        <div className="flex items-center gap-1 md:gap-2 mb-2">
          <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#969696]" />
          <span className="text-gray-600 text-[10px] leading-2 md:text-xs">
            {session.roomName}
          </span>
        </div>
        <div
          className={`px-3 py-1 rounded-[5px] text-[7px] md:text-xs font-mitr border-red-400 max-w-max ${
            session.type === "NOW SHOWING"
              ? "bg-[#FFA7AA] text-[#BB3E42]"
              : "bg-[#B5ACAD] text-[#1F1C1CC3]"
          }`}
        >
          {session.time}
        </div>
      </div>
    </div>
  );
};

export default SessionCard;

