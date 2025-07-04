import express from "express";
import {
  userRegister,
  userLogin,
  userLogout,
  userUpdate,
} from "../controllers/userController.js";
import { userProtect } from "../middlewares/authMiddleware.js";
import multer from "multer";

const uploads = multer();

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/logout", userLogout);
router.get("/update", userProtect, uploads.single("image"), userUpdate);

export default router;
