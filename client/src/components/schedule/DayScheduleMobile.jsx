// components/schedule/DayScheduleMobile.jsx
import React from 'react';
import SessionCard from './SessionCard';

const DayScheduleMobile = ({ daySchedule }) => {
  return (
    <div className="bg-black/20 rounded-2xl p-4 border border-gray-700/30">
      {/* Day Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold">{daySchedule.date}</div>
          <div className="text-xs md:text-sm text-gray-400 font-semibold">
            JULY
          </div>
        </div>
      </div>

      {/* Sessions */}
      <div className="space-y-3">
        {daySchedule.sessions.map((session, index) => (
          <SessionCard 
            key={index} 
            session={session} 
            isMobile={true}
          />
        ))}
      </div>
    </div>
  );
};

export default DayScheduleMobile;