import { Router } from "express";
import userController from  "../controllers/userController.js";

const userRouters = Router();

userRouters.get("/", userController.selecionar);
userRouters.post("/", userController.criar);
userRouters.delete("/:id",userController.deletar)

export default userRouters;