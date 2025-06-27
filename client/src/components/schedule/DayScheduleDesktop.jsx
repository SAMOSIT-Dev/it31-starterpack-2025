// components/schedule/DayScheduleDesktop.jsx
import React from "react";
import SessionCard from "./SessionCard";

const DayScheduleDesktop = ({ daySchedule }) => {
  return (
    <>
      <div className="day-schedule-desktop">
        {/* Day Column */}
        <div className="day-column">
          <div className="day-date">{daySchedule.date}</div>
          <div className="day-name">{daySchedule.day}</div>
        </div>

        {/* Sessions Row */}
        <div className="sessions-row">
          {daySchedule.sessions.map((session, index) => (
            <React.Fragment key={index}>
              {/* Session */}
              <div className="session-slot">
                <SessionCard session={session} />
              </div>
              {index < daySchedule.sessions.length - 1 && (
                <div className="break-indicator">
                  <span className="break-text">BREAK</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <hr className="text-[#B3B3B3]" />
    </>
  );
};

export default DayScheduleDesktop;
