import express from "express";
import {
  SignInUser,
  createUser,
  deleteUser,
  getOneUser,
  getUser,
} from "../controller/authController";

const Router = express.Router();

Router.route("/register").post(createUser);
Router.route("/sign-in-user").post(SignInUser);
Router.route("/get-users").get(getUser);
Router.route("/:userID/get-user").get(getOneUser);
Router.route("/:userID/delete-user").delete(deleteUser);

export default Router;
