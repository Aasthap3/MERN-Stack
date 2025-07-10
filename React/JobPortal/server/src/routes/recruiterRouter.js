import express from "express";
import { Protect, isRecruiter } from "../middlewares/authMiddleware";
import { addJob, viewAllJob } from "../controllers/recruiterController";

const router = express.Router();

router.post("/addJob", Protect, isRecruiter, addJob);
router.post("/viewAllJob", Protect, isRecruiter, viewAllJob);

export default router;