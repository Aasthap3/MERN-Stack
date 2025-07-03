import express from "express";
import {
  userRegister,
  userLogin,
  userLogout,
  userUpdate,
} from "../controllers/userController.js";
import { userProtect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/logout", userLogout);
router.get("/update", userProtect, UploadStream.single("image"), userUpdate);

export default router;
