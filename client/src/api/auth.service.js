import axiosInstance from "./axiosInstance";

export async function loginUser({ id, password }) {
  try {
    const response = await axiosInstance.post("/users/login", { id, password });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUserDetail() {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchProfileImage(path) {
  try {
    const res = await axiosInstance.get(path, {
      responseType: "blob",
    });

    const imageBlob = res.data;
    return URL.createObjectURL(imageBlob);
  } catch (err) {
    return "/common/default_avartar.jpg";
  }
}
export async function updateUser({
  imageFile,
  profile_description,
  facebook_url,
  instagram_url,
  discord_username
}) {
  try {
    const formData = new FormData();

    if (imageFile) {
      formData.append("image", imageFile);
    }
    formData.append("profile_description", profile_description);
    formData.append("facebook_url", facebook_url);
    formData.append("instagram_url", instagram_url);
    formData.append("discord_username", discord_username)
    

    const response = await axiosInstance.put("/users/update", formData);

    return response.data;
  } catch (error) {
    throw error;
  }
}

// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(";").shift();
//   return null;
// }
