// src/api/house.service.js
import axiosInstance from "./axiosInstance";

const houseService = {
  getHouses: async () => {
    try {
      const response = await axiosInstance.get("/houses");
      console.log('Houses API Response:', response.data);
      
      // Extract content array from response
      return response.data?.content || [];
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