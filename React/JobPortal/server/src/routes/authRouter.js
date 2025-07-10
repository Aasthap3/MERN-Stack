import express from "express";
import {
  Register,
  Login,
  Logout,
  Update,
} from "../controllers/authController.js";
import { Protect } from "../middlewares/authMiddleware.js";
import multer from "multer";

const uploads = multer();

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/logout", Logout);
router.put("/update", Protect, uploads.single("image"), Update);

export default router;
