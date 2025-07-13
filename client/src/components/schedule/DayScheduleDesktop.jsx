import React from "react";
import SessionCard from "./SessionCard";
import Break from "./Break";

const DayScheduleDesktop = ({ daySchedule }) => {
  return (
    <>
      <div className="day-schedule-desktop">
        {/* Day Column */}
        <div className="day-column">
          <div className="day-date -mb-3">{daySchedule.date}</div>
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
                <Break />
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
