import React from "react";
import { useParams, useLocation } from "react-router";
import ScheduleHeader from "@/components/schedule/ScheduleHeader";
import DayScheduleDesktop from "@/components/schedule/DayScheduleDesktop";
import DayScheduleMobile from "@/components/schedule/DayScheduleMobile";
import { scheduleService } from "@/api/schedule.service";
import { useQuery } from "@tanstack/react-query";

const HouseSchedulePage = () => {
  const { houseId } = useParams();
  const location = useLocation();
  
  const { data: schedules, isLoading, error } = useQuery({
    queryKey: ['schedules', houseId],
    queryFn: () => scheduleService.getScheduleByHouseId(houseId),
    retry: 3,
    staleTime: 2 * 60 * 1000,
    enabled: !!houseId, // Only run query if houseId exists
  });

  const { mobileImage, desktopImage, houseName } = location.state || {};

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-custom text-white flex items-center justify-center">
        <div className="animate-pulse">Loading schedule...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-custom text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error Loading Schedule</h2>
          <p className="text-red-400">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!schedules || !schedules.sessions || schedules.sessions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-custom text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Schedule Available</h2>
          <p className="text-gray-400">No sessions found for this house.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-custom text-white">
      <div className="container-responsive py-4 md:py-8">
        <ScheduleHeader
          finalMobileImage={mobileImage}
          finalDesktopImage={desktopImage}
          displayName={houseName}
        />

        {/* Desktop Schedule */}
        <div className="hidden sm:block">
          <div className="backdrop-blur-[96.8px] p-8 bg-[#1E1E1E] border-[#3D3838] rounded-3xl border-4">
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl font-bold text-white/90 mb-2">
                2025 July
              </h2>
            </div>
            <div className="space-y-6">
              <DayScheduleDesktop daySchedule={schedules} />
            </div>
          </div>
        </div>

        {/* Mobile Schedule */}
        <div className="sm:hidden space-y-6">
          <DayScheduleMobile daySchedule={schedules} />
        </div>
      </div>
    </div>
  );
};

export default HouseSchedulePage;