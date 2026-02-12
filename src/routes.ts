import express from "express";
import {
  createUsers,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "./controllers";

const routers = express.Router();

routers.get("/", getUsers);
routers.get("/:id", getUserById);
routers.post("/", createUsers);
routers.patch("/:id", updateUser);
routers.delete("/:id", deleteUser);

export default routers;
