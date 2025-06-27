import axiosInstance from "./axiosInstant";

export const scheduleService = {
  getSchedules: async () => {
    const response = await axiosInstance.get("/schedules");

    if (response.status !== 200) {
      throw new Error(`Error fetching schedules: ${response.data.error}`);
    }
    return response.data.content;
  },
  getScheduleById: async (scheduleId) => {
    const response = await axiosInstance.get(`/schedules/${scheduleId}`);

    if (response.status !== 200) {
      throw new Error(`Error fetching schedule id ${scheduleId}: ${response.data.error}`);
    }
    return response.data.content;
  },
};
