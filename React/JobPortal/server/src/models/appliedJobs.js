import mongoose from "mongoose";

const appliedJobSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    appliedOn: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: [
        "applied",
        "interview",
        "offered",
        "rejected",
        "saved",
        "withdrawn",
      ],
      default: "applied",
    },
  },
  {
    timestamps: true,
  }
);

const AppliedJob = mongoose.model("AppliedJob", appliedJobSchema);

export default AppliedJob;