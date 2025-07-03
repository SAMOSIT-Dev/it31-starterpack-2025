const express = require("express");
const UserController = require("../controller/user.controller");
const auth = require("../middleware/filterJwt");
const UserRouter = express.Router();
const path = require("path");

const multer = require("multer");
const upload = multer({
  dest: path.join(".", "src", "temp"),
});
UserRouter.post("/login", UserController.login);
UserRouter.post("/refresh", UserController.refresh);
UserRouter.post("/logout", UserController.logout);
UserRouter.put(
  "/update",
  upload.single("image"),
  auth,
  UserController.updateUser
);
UserRouter.get("/", auth, UserController.getUserDetail);
UserRouter.get("/friends", auth, UserController.getFriend);


module.exports = UserRouter;
