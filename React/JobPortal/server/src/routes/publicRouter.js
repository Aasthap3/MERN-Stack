import express from "express";
import { getAllJobs, submitContactForm } from "../controllers/publicController.js";

const router = express.Router();

router.get("/jobs", getAllJobs);
router.post("/contactForm", submitContactForm);

export default router;