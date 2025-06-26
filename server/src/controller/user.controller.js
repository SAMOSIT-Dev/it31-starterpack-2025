const UserService = require("../services/user.service");
const ResponseDTO = require("../dtos/response.dto");
const prisma = require("../utils/prisma.utils");
const {
  UserLoginDTORequest,
  UserLoginDTOResponse,
  UpdateUserProfileDTORequest,
  UpdateUserProfileDTOResponse,
} = require("../dtos/user.dto");

class UserController {
  //login
  static async login(req, res) {
    const response = new ResponseDTO();
    const { username, password } = req.body;
    const requestUser = new UserLoginDTORequest();
    const responseLogin = new UserLoginDTOResponse();

    requestUser.setId(username);
    requestUser.setPassword(password);

    const token = await UserService.login(requestUser.build());

    if (!token.success) {
      response.setContent({
        error: token.data?.error,
        error_description: token.data?.error_description,
      });
      response.setMessage("Invalid Credentials");
      response.setError(true);
      return res.status(token.status).json(response.build());
    }

    try {
      const { access_token, expires_in, refresh_token } = token.data;

      res.cookie("authToken", JSON.stringify({ access_token, refresh_token }), {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 3600000,
      });

      const studentId = await UserService.getUserInfo(access_token);
      if (!studentId) {
        response.setError(true);
        response.setMessage("Cannot retrieve studentId from user info");
        return res.status(401).json(response.build());
      }

      const user_profile = await UserService.findByStudentId(studentId);
      if (!user_profile) {
        const create_user = await UserService.createUser(studentId);

        responseLogin.setAuthToken(access_token);
        responseLogin.setRefreshToken(refresh_token);
        responseLogin.setExpiresIn(String(expires_in));
        responseLogin.setUserProfile({
          id: create_user.studentId,
          nickname: create_user.nickname || "",
          profile_description: create_user.profile_description || "",
          age: create_user.age || 0,
          house: {
            id: create_user.houses?.id || 0,
            name: create_user.houses?.house_name || '',
          },
        });

        response.setContent(responseLogin.build());
      } else {
        responseLogin.setAuthToken(access_token);
        responseLogin.setRefreshToken(refresh_token);
        responseLogin.setExpiresIn(String(expires_in));
        responseLogin.setUserProfile({
          id: user_profile.studentId,
          nickname: user_profile.nickname || "",
          profile_description: user_profile.profile_description || "",
          age: user_profile.age || 0,
          house: {
            id: user_profile.houses?.id || 0,
            name: user_profile.houses?.house_name || "",
          },
        });

        response.setContent(responseLogin.build());
      }

      response.setError(false);
      response.setMessage("User authenticated");
      res.status(200).json(response.build());
    } catch (error) {
      console.error("Login error:", error);
      response.setMessage("Server Have Problem");
      response.setError(true);
      return res.status(500).json(response.build());
    }
  }

  //refresh
  static async refresh(req, res) {
    const response = new ResponseDTO();
    const { refreshToken } = req.body;

    if (!refreshToken) {
      response.setError(true);
      response.setMessage("No Refresh Token in Body");
      return res.status(400).json(response.build());
    }
    try {
      const token = await UserService.refreshToken(refreshToken);
      const { access_token, refresh_token } = token;

      res.cookie("authToken", JSON.stringify({ access_token, refresh_token }), {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 3600000,
      });

      response.setContent(token);
      response.setError(false);
      response.setMessage("Success to request access token by RefreshToken");
      res.status(200).json(response.build());
    } catch (error) {
      response.setMessage("Refresh Token expires || Server Have Problem");
      response.setError(true);
      console.log(error);
      return res.status(500).json(response.build());
    }
  }

  static async updateUser(req, res) {
    const { id, profile_description, age, house_id } = req.body;
    const response = new ResponseDTO();
    const responseUpdate = new UpdateUserProfileDTOResponse();

    if (
      typeof id !== "string" ||
      typeof profile_description !== "string" ||
      typeof age !== "number" ||
      typeof house_id !== "number"
    ) {
      response.setError(true);
      response.setMessage(
        "id (string), profile_description (string), age (number), house_id (number)"
      );
      return res.status(400).json(response.build());
    }

    let update;
    try {
      update = new UpdateUserProfileDTORequest()
        .setAge(age)
        .setHouseId(house_id)
        .setProfileDescription(profile_description)
        .setId(id);
    } catch (error) {
      response.setError(true);
      response.setMessage(error.message || "Invalid input format");
      return res.status(400).json(response.build());
    }

    try {
      const updateUser = await UserService.updateUserProfile(update);
      responseUpdate.setNickName(updateUser.nickname)
      responseUpdate.setAge(updateUser.age);
      responseUpdate.setCreatedAt(updateUser.updatedAt.toLocaleString());
      responseUpdate.setProfileDescription(updateUser.profile_description);
      responseUpdate.setId(updateUser.id.toString());
      responseUpdate.setUpdatedAt(updateUser.updatedAt.toLocaleString());
      responseUpdate.setHouseId(updateUser.house_id);

      response.setContent(responseUpdate);
      response.setMessage(`Successfully updated user Student_id: ${id}`);
      res.status(200).json(response);
    } catch (error) {
      console.error("Update error:", error);
      response.setMessage("Internal Server Error");
      response.setError(true);
      return res.status(500).json(response.build());
    }
  }

  static async logout(req, res) {
    const { refreshToken } = req.body;
    const response = new ResponseDTO();

    if (!refreshToken) {
      response.setError(true);
      response.setMessage("No RefreshToken in Body");
      return res.status(404).json(response.build());
    }

    res.clearCookie("authToken", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    await UserService.logout(refreshToken);
    response.setError(false);
    response.setMessage("Clear Cookie Success");
    return res.status(200).json({ message: "Logged out successfully" });
  }
}

module.exports = UserController;
