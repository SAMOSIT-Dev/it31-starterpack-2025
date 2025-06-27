const UserService = require("../services/user.service");
const ResponseDTO = require("../dtos/response.dto");
const prisma = require("../utils/prisma.utils");
const HouseService = require("../services/house.service");
const { resizeProfilePic } = require("../utils/image.utils");
const fs = require("fs").promises;
const path = require("path");

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
    const { id, password } = req.body;

    const requestUser = new UserLoginDTORequest();
    requestUser.setId(id);
    requestUser.setPassword(password);
    requestUser.build();

    const tokenResult = await UserService.login(requestUser);

    if (!tokenResult.success) {
      response.setContent({
        error: tokenResult.data?.error,
        error_description: tokenResult.data?.error_description,
      });
      response.setMessage("Invalid Credentials");
      response.setError(true);
      return res.status(401).json(response.build());
    }

    try {
      const { access_token, refresh_token } = tokenResult.data;

      res.cookie("authToken", JSON.stringify({ access_token, refresh_token }), {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 3600000,
      });

      response.setContent({ access_token, refresh_token });
      response.setMessage("User authenticated");
      response.setError(false);
      return res.status(200).json(response.build());
    } catch (error) {
      console.error("Login error:", error);
      response.setMessage("Server encountered an error");
      response.setError(true);
      return res.status(500).json(response.build());
    }
  }

  static async refresh(req, res) {
    const response = new ResponseDTO();
    const { refreshToken } = req.body;

    if (!refreshToken) {
      response.setError(true);
      response.setMessage("No Refresh Token provided");
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
      response.setMessage("Access token refreshed successfully");
      response.setError(false);
      return res.status(200).json(response.build());
    } catch (error) {
      console.error("Refresh error:", error);
      response.setMessage("Refresh token expired or server error");
      response.setError(true);
      return res.status(500).json(response.build());
    }
  }

  static async updateUser(req, res) {
    const response = new ResponseDTO();

    try {
      const {
        profile_description = null,
        facebook_url = null,
        instagram_url = null,
      } = req.body || {};

      const filename = req.file?.filename || null;
      const preferred_username = req.user?.preferred_username;

      if (!preferred_username) {
        response.setError(true);
        response.setMessage("Missing user identifier");
        return res.status(400).json(response.build());
      }

      const user = await UserService.findByStudentId(preferred_username);
      if (!user) {
        response.setError(true);
        response.setMessage("User not found");
        return res.status(404).json(response.build());
      }

      let imageUrl = user.profile_picture_url;

      if (filename && req.file?.path) {
        const file = `${preferred_username}.${filename}`;
        const result = await resizeProfilePic(req.file.path, file);
        imageUrl = result.url;

        if (user.profile_picture_url) {
          const oldImagePath = path.join(".", "src", user.profile_picture_url);

          try {
            await fs.access(oldImagePath);
            await fs.unlink(oldImagePath);
          } catch (err) {
            console.warn("Cannot Delete Picture", oldImagePath);
          }
        }
      }

      const updateUser = await UserService.updateUserProfile(
        profile_description || user.profile_description,
        facebook_url || user.facebook_url,
        instagram_url || user.instagram_url,
        imageUrl,
        preferred_username
      );

      return res.status(200).json(updateUser);
    } catch (error) {
      console.error(error);
      response.setError(true);
      response.setMessage("Internal server error");
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
    response.setMessage("Logout successful");
    return res.status(200).json(response.build());
  }

  static async getUserDetail(req, res) {
    const response = new ResponseDTO();

    try {
      const userJwt = req.user;

      if (!userJwt?.preferred_username) {
        response.setError(true);
        response.setMessage("Missing user identity");
        return res.status(400).json(response.build());
      }

      const userData = await UserService.findByStudentId(
        userJwt.preferred_username
      );

      if (!userData) {
        response.setError(true);
        response.setMessage(`User not found: ${userJwt.preferred_username}`);
        return res.status(404).json(response.build());
      }

      response.setContent(userData);
      response.setError(false);
      response.setMessage(
        `Retrieve success for student: ${userJwt.preferred_username}`
      );
      return res.status(200).json(response.build());
    } catch (error) {
      console.error("getUserDetail error:", error);
      response.setError(true);
      response.setMessage("Internal server error");
      return res.status(500).json(response.build());
    }
  }
}

module.exports = UserController;
