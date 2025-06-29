// src/pages/course/[houseId]/page.jsx
import React from "react";
import { useParams, Link, useLocation } from "react-router";
import { scheduleData } from "./data";
import ScheduleHeader from "@/components/schedule/ScheduleHeader";
import DayScheduleDesktop from "@/components/schedule/DayScheduleDesktop";
import DayScheduleMobile from "@/components/schedule/DayScheduleMobile";
// import { useQuery } from "@tanstack/react-query";
// import { scheduleService } from "@/api/schedule.service";

const HouseSchedulePage = () => {
  const { houseId } = useParams();
  const location = useLocation();

  const houseData = scheduleData[houseId];

  // const { data: houseDetails, isLoading, error } = useQuery({
  //   queryKey: ["houseDetails", houseId],
  //   queryFn: scheduleService.getScheduleById(houseId)
  // })

  const { mobileImage, desktopImage, houseName } = location.state || {};


  const displayName = houseName || houseData.name;
  const fallbackMobile = `/house-ticket/mobile/${houseId}.png`;
  const fallbackDesktop = `/house-ticket/desktop/${houseId}.png`;
  const finalMobileImage = mobileImage || fallbackMobile;
  const finalDesktopImage = desktopImage || fallbackDesktop;

  return (
    <div className="min-h-screen bg-gradient-custom text-white">
      <div className="container-responsive py-4 md:py-8">
        {/* Header */}
        <ScheduleHeader
          finalMobileImage={finalMobileImage}
          finalDesktopImage={finalDesktopImage}
          displayName={displayName}
        />


        {/* Desktop Schedule */}
        <div className="hidden sm:block">
          <div className="backdrop-blur-[96.8px] p-8 bg-[#1E1E1E]  border-[#3D3838] rounded-3xl border-4">
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl font-bold text-white/90 mb-2">
                2025 July
              </h2>
            </div>
            <div className="space-y-6">
              {houseData.schedule.map((daySchedule, dayIndex) => (
                <DayScheduleDesktop key={dayIndex} daySchedule={daySchedule} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Schedule */}
        <div className="sm:hidden space-y-6">
          {houseData.schedule.map((daySchedule, dayIndex) => (
            <DayScheduleMobile key={dayIndex} daySchedule={daySchedule} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseSchedulePage;
