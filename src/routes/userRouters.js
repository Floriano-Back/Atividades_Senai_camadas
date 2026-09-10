import { Router } from "express";
import userController from  "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const userRouters = Router();

userRouters.get("/", userController.selecionar);
userRouters.post("/", userController.criar);
userRouters.delete("/:id", authMiddleware, userController.deletar);
userRouters.put("/:id", userController.atualizar);

export default userRouters;