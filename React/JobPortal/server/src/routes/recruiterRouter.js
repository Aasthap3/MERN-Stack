import express from "express";
import { Protect, isRecruiter } from "../middlewares/authMiddleware.js";
import { addJob, editJob, viewAllJob, deleteJob } from "../controllers/recruiterController.js";

const router = express.Router();

router.post("/addJob", Protect, isRecruiter, addJob);
router.post("/viewAllJob", Protect, isRecruiter, viewAllJob);
router.post("/editJod/:id", Protect, isRecruiter, editJob);
router.post("/deleteJob/:id", Protect, isRecruiter, deleteJob);

export default router;