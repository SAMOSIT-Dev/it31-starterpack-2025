import axiosInstance from "./axiosInstance";

export const scheduleService = {
  getScheduleByHouseId: async (houseId) => {
    try {
      const response = await axiosInstance.get(`/schedules/${houseId}`);
      
      const scheduleData = response.data?.content || [];
      
      // Group sessions by date
      const sessionsByDate = groupSessionsByDate(scheduleData);
      
      // Transform to component format
      const schedulesByDay = Object.entries(sessionsByDate).map(([dateString, sessions]) => {
        const date = new Date(dateString);
        
        return {
          date: date.getDate().toString(),
          day: date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
          fullDate: dateString,
          sessions: sessions.map(item => ({
            id: item.id,
            courseName: item.course_name,
            roomName: item.room_name,
            time: `${formatTime(item.start_time)} - ${formatTime(item.end_time)}`,
            type: isCurrentTime(item.start_time, item.end_time) ? "NOW SHOWING" : "UPCOMING",
            slideUrl: item.slide_url
          }))
        };
      });
      
      return schedulesByDay;
    } catch (error) {
      console.error('getScheduleByHouseId error:', error);
      throw new Error(`Failed to fetch schedule for house ${houseId}: ${error.message}`);
    }
  },
};

const groupSessionsByDate = (sessions) => {
  return sessions.reduce((acc, session) => {
    const date = new Date(session.start_time);
    const dateKey = date.toISOString().split('T')[0]; // YYYY-MM-DD format
    
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    
    acc[dateKey].push(session);
    return acc;
  }, {});
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