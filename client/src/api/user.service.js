import axiosInstance from "./axiosInstant";

export async function updateUser({ imageFile, profile_description, facebook_url, instagram_url }) {
  try {
    const access_token = getCookie("access_token");
    const formData = new FormData();

    if (imageFile) {
      formData.append("image", imageFile); 
    }
    formData.append("profile_description", profile_description);
    formData.append("facebook_url", facebook_url);
    formData.append("instagram_url", instagram_url);
    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }

    const response = await axiosInstance.put("/users/update", formData, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Update profile error:", error.response?.data || error.message);
    throw error;
  }
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}
