import express from "express";
import { deleteUser, getAllUsers } from "../controllers/userController";

const userRoute = express.Router();

userRoute.route("/users").get(getAllUsers);

userRoute.route("/users/:id").delete(deleteUser);

export default userRoute;
