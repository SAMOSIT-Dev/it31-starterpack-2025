const axios = require("axios");
const { URLSearchParams } = require("url");
const prisma = require("../utils/prisma.utils");
const {
  UserLoginDTORequest,
  UserLoginDTOResponse,
  UpdateUserProfileDTORequest,
  UpdateUserProfileDTOResponse,
} = require("../dtos/user.dto");
class UserService {
  static async login(UserLoginDTORequest) {
    const params = new URLSearchParams();
    params.append("grant_type", "password");
    params.append("client_id", process.env.CLIENT_ID);
    params.append("client_secret", process.env.CLIENT_SECRET);
    params.append("username", UserLoginDTORequest.id);
    params.append("password", UserLoginDTORequest.password);
    params.append("scope", "openid profile");
    try {
      const responseToken = await axios.post(process.env.TOKEN_URL, params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      return {
        success: true,
        status: 200,
        data: responseToken.data,
      };
    } catch (error) {
      const res = error.response;

      return {
        success: false,
        status: res?.status,
        message: "Invalid Credentials",
        data: {
          error: res?.data?.error,
          error_description: res?.data?.error_description,
        },
      };
    }
  }

  static async refreshToken(Token) {
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("client_id", process.env.CLIENT_ID);
    params.append("client_secret", process.env.CLIENT_SECRET);
    params.append("refresh_token", Token);

    const response = await axios.post(
      process.env.TOKEN_URL,
      params.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  }

  static async getUserInfo(Token) {
    const userInfo = await axios.get(process.env.USERINFO_URL, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    const studentId = userInfo.data.preferred_username;
    return studentId;
  }

  static async logout(refresh_token) {
    const params = new URLSearchParams();
    params.append("client_id", process.env.CLIENT_ID);
    params.append("client_secret", process.env.CLIENT_SECRET);
    params.append("refresh_token", refresh_token);

    await axios.post(process.env.LOGOUT_URL, params, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
  }

  static async findByStudentId(studentId) {
    return prisma.users.findUnique({
      where: { studentId: studentId },
      include: { houses: true },
    });
  }

  static updateUserProfile(
    profile_description,
    facebook_url,
    instagram_url,
    imagePath,
    discord_username,
    id
  ) {
    const userInfo = prisma.users.update({
      where: { studentId: id },
      data: {
        profile_description: profile_description,
        facebook_url: facebook_url,
        instagram_url: instagram_url,
        profile_picture_url: imagePath,
        discord_username: discord_username,
      },
    });
    return userInfo;
  }

  static async userFriend(student_id) {
    const userInfo = await prisma.users.findUnique({
      where: { studentId: student_id },
    });

    if (!userInfo) return [];

    const friendRecords = await prisma.friends.findMany({
      where: { user_id: userInfo.id },
      include: {
        users_friends_friend_idTousers: true,
      },
    });

    const friends = friendRecords.map(
      (record) => record.users_friends_friend_idTousers
    );

    return friends;
  }
}

module.exports = UserService;
