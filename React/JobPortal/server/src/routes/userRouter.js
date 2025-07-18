import express from "express";
import { Protect, isUser } from "../middlewares/authMiddleware.js";
import {
  JobApply,
  JobSave,
  AllAppliedJobs,
  AllSavedJobs,
  JobWithdraw,
  JobUnsave,
  JobApplySaved,
  GetAllJobs,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/apply/:id", Protect, isUser, JobApply);
router.post("/save/:id", Protect, isUser, JobSave);
router.patch("/withdraw/:id", Protect, isUser, JobWithdraw);
router.patch("/applysaved", Protect, isUser, JobApplySaved);
router.delete("/unsave/:id", Protect, isUser, JobUnsave);
router.get("/allAppliedJobs", Protect, isUser, AllAppliedJobs);
router.get("/allSavedJobs", Protect, isUser, AllSavedJobs);
router.get("/allJobs", Protect, isUser, GetAllJobs);

export default router;