import { application } from "express";
import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    salaryRange: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    preferredQualification: {
      type: String,
    },
    experienceRequired: {
      type: String,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship"],
      required: true,
    },
    workMode: {
      type: String,
      enum: ["On-site", "Remote", "Hybrid"],
      required: true,
    },
    numberOfOpenings: {
      type: Number,
      default: 1,
    },
    postedData: {
      type: Date,
      default: Date.now,
    },
    applicationDeadline: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
