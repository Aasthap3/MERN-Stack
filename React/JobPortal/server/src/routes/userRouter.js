import express from "express";
import { Protect, isUser } from "../middlewares/authMiddleware.js";
import {
  JobApply,
  JobSave,
  AllAppliedJobs,
  AllSavedJobs,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/apply/:id", Protect, isUser, JobApply);
router.post("/save/:id", Protect, isUser, JobSave);
router.get("/allAppliedJobs", Protect, isUser, AllAppliedJobs);
router.get("/apply/:id", Protect, isUser, AllSavedJobs);

export default router;
