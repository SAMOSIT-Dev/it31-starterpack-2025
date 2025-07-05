import axiosInstance from "./axiosInstant";

export async function loginUser({ id, password }) {
  try {
    const response = await axiosInstance.post("/users/login", { id, password });
    const { access_token, refresh_token } = response.data.content || {};
    if (access_token) {
      document.cookie = `access_token=${access_token}; path=/; max-age=3600`; // 1 ชม.
    }
    if (refresh_token) {
      document.cookie = `refresh_token=${refresh_token}; path=/; max-age=604800`; // 7 วัน
    }
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
}

// ตัวอย่างการใช้งาน
export async function getUserDetail() {
  try {
    const access_token = getCookie("access_token"); // อ่านจาก cookie ฝั่ง client
    const response = await axiosInstance.get("/users", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response.data
  } catch (error) {
    console.error("Get user detail error:", error.response?.data || error.message);
    throw error;
  }
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}