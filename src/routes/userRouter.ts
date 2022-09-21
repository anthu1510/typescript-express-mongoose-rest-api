import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router();

router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUser);

export default router;
