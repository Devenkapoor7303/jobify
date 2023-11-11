import { Router } from "express";
const router = Router();
import { register, login, logout } from "../controllers/authController.js";
import { validateUser,validateLoginInput } from "../middlewares/validationMiddleware.js";

router.post("/register", validateUser, register);
router.post("/login",validateLoginInput, login);
router.get("/logout",logout);

export default router;
