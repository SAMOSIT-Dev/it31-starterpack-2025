import React from 'react';
import SessionCard from './SessionCard';

const DayScheduleMobile = ({ daySchedule }) => {
  return (
    <div className="bg-[#1E1E1E] border-[#3D3838] rounded-2xl p-4 flex items-start gap-3 w-full">
      {/* Day Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-bold font-inter -mb-1">{daySchedule.date}</div>
          <div className="text-lg md:text-xl font-semibold font-inter">
            {daySchedule.day}
          </div>
        </div>
      </div>

      {/* Sessions */}
      <div className="space-y-3 w-full">
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