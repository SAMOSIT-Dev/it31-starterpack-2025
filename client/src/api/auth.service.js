import axiosInstance from "./axiosInstant";

function setCookie(name, value, maxAgeSeconds) {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAgeSeconds}; secure; SameSite=Strict`;
}

export async function loginUser({ id, password }) {
  try {
    const response = await axiosInstance.post(
      "/users/login",
      { id, password },
      {withCredentials: true}
    );

    // สมมติ backend ส่ง token มาใน response.data.content
    const { access_token, refresh_token } = response.data.content;

    // แยกเก็บ token ลง cookie คนละตัว
    setCookie("access_token", access_token, 3600); // 1 ชม.
    setCookie("refresh_token", refresh_token, 604800); // 7 วัน

    return response.data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
}
