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

  static async createUser(studentId) {
    return prisma.users.create({
      data: {
        studentId: studentId,
        isAuthenticated: true,
        createdAt: new Date(),
      },
      include: { houses: true },
    });
  }

  static async findByStudentId(studentId) {
    return prisma.users.findUnique({
      where: { studentId: studentId },
      include: { houses: true },
    });
  }
  static updateUserProfile(updateUserDTO) {
    const userInfo = prisma.users.update({
      where: { studentId: updateUserDTO.id },
      data: {
        profile_description: updateUserDTO.profile_description,
        age: updateUserDTO.age,
        house_id: updateUserDTO.house_id,
        updatedAt: new Date(),
      },
    });
    return userInfo;
  }
  static getUserFriends() {
    // implement here
  }
}

module.exports = UserService;
