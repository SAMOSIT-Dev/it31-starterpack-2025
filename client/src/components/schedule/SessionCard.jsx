// components/schedule/SessionCard.jsx
import React from 'react';
import { Download, MapPin } from 'lucide-react';


const SessionCard = ({ session, isMobile = false }) => {
  const badgeWidth = isMobile ? 'w-12 md:w-16' : 'w-16';
  const contentMargin = isMobile ? 'ml-12 md:ml-16' : 'ml-16';

  return (
    <div className="bg-white rounded-xl p-4 relative overflow-hidden font-inter">
      <div className={`absolute left-0 top-0 bottom-0 ${badgeWidth} ${
        session.type === "NOW SHOWING" ? "bg-[#BB3E42]" : "bg-[#1C5297]"
      } flex items-center justify-center`}>
        <span className="text-white text-xs font-bold transform -rotate-90 whitespace-nowrap">
          {session.type}
        </span>
      </div>
      
      <div className={contentMargin}>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-black font-bold text-lg">
            {session.subject}
          </h3>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Download className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-400 text-sm"><MapPin /></span>
          <span className="text-gray-600 text-sm">
            {session.code}
          </span>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-mitr border-red-400 ${
          session.type === "NOW SHOWING" 
            ? "bg-[#FFA7AA] text-[#BB3E42]" 
            : "bg-[#B5ACAD] text-[#1F1C1CC3]"
        }`}>
          {session.time}
        </div>
      </div>
    </div>
  );
};

export default SessionCard;