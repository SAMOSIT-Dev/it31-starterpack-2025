import axiosInstance from "./axiosInstant";

const houseService = {
  getHouses: async () => {
    const response = await axiosInstance.get("/houses");

    if (response.status !== 200) {
      throw new Error(`Error fetching houses: ${response.data.error}`);
    }
    return response.data.content;
  },
  getHouseById: async (houseId) => {
    const response = await axiosInstance.get(`/houses/${houseId}`);

    if (response.status !== 200) {
      throw new Error(`Error fetching house id ${houseId}: ${response.data.error}`);
    }
    return response.data.content;
  },
};

export default houseService;
