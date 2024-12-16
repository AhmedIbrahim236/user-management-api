import { Router } from "express";
import { register, login } from "./auth.contorller.js";

// import { Router } from "express";
// import { register, login } from "../controllers/authController.js";
// import validate from "../middlewares/validate.js";
// import { registerSchema, loginSchema } from "../validations/authValidation.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;
