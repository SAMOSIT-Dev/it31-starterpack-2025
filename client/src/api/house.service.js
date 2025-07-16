import axiosInstance from "./axiosInstance";

const houseService = {
  getHouses: async () => {
    try {
      const response = await axiosInstance.get("/houses");

      const houses = response.data?.content || [];
      const housesShallow = []
      housesShallow.push(houses[0])
      housesShallow.push(houses[4])
      housesShallow.push(houses[3])
      housesShallow.push(houses[2])
      housesShallow.push(houses[1])
      return housesShallow
    } catch (error) {
      console.error('getHouses error:', error);
      throw new Error(`Failed to fetch houses: ${error.message}`);
    }
  },
  
  getHouseById: async (houseId) => {
    try {
      const response = await axiosInstance.get(`/houses/${houseId}`);
      return response.data?.content || null;
    } catch (error) {
      console.error('getHouseById error:', error);
      throw new Error(`Failed to fetch house ${houseId}: ${error.message}`);
    }
  },
};

export default houseService;