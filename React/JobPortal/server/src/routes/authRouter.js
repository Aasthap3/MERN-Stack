import express from "express";
import {
  userRegister,
  userLogin,
  userLogout,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/logout", userLogout);

export default router;
