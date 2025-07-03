import axiosInstance from "./axiosInstant";

export async function loginUser({ id, password }) {
  try {
    const response = await axiosInstance.post("/users/login", { id, password });
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
}

export async function getUserDetail() {
  try {

    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    console.error("Get user detail error:", error.response?.data || error.message);
    throw error;
  }
}

