const express = require("express");
const UserController = require("../controller/user.controller");

const UserRouter = express.Router();

UserRouter.post("/login", UserController.login);
UserRouter.post("/refresh", UserController.refresh);
UserRouter.post("/logout", UserController.logout);
UserRouter.put("/update", UserController.updateUser);

module.exports = UserRouter;
