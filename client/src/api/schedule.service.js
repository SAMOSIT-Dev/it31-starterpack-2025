// src/api/schedule.service.js
import axiosInstance from "./axiosInstance";

export const scheduleService = {
  getScheduleByHouseId: async (houseId) => {
    try {
      const response = await axiosInstance.get(`/schedules/${houseId}`);
      console.log('Schedule API Response:', response.data);
      
      // Transform API data to component format
      const scheduleData = response.data?.content || [];
      
      return {
        date: new Date().getDate().toString(),
        day: new Date().toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
        sessions: scheduleData.map(item => ({
          id: item.id,
          courseName: item.course_name,
          roomName: item.room_name,
          time: `${formatTime(item.start_time)} - ${formatTime(item.end_time)}`,
          type: isCurrentTime(item.start_time, item.end_time) ? "NOW SHOWING" : "UPCOMING",
          slideUrl: item.slide_url
        }))
      };
    } catch (error) {
      console.error('getScheduleByHouseId error:', error);
      throw new Error(`Failed to fetch schedule for house ${houseId}: ${error.message}`);
    }
  },
};

const formatTime = (timeString) => {
  const date = new Date(timeString);
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });
};

const isCurrentTime = (startTime, endTime) => {
  const now = new Date();
  const start = new Date(startTime);
  const end = new Date(endTime);
  return now >= start && now <= end;
};