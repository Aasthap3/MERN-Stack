import Job from "../models/jobModel.js";
import AppliedJob from "../models/appliedJobs.js";

export const addJob = async (req, res, next) => {
  try {
    const {
      jobTitle,
      company,
      jobLocation,
      salaryRange,
      workMode,
      jobType,
      description,
      preferredQualification,
      numberOfOpenings,
      experienceRequired,
      applicationDeadline,
    } = req.body;

    if (
      !jobTitle ||
      !company ||
      !jobLocation ||
      !salaryRange ||
      !workMode ||
      !jobType ||
      !description ||
      !preferredQualification ||
      !numberOfOpenings ||
      !experienceRequired ||
      !applicationDeadline
    ) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const newJob = await Job.create({
      userId: req.user._id,
      jobTitle,
      company,
      jobLocation,
      salaryRange,
      workMode,
      jobType,
      description,
      preferredQualification,
      numberOfOpenings,
      experienceRequired,
      applicationDeadline,
    });

    res.status(201).json({ message: "Job Posted Successfully" });
  } catch (error) {
    next(error);
  }
};

export const viewAllJob = async (req, res, next) => {
  try {
    const postedJobs = (await Job.find({ userId: req.user._id })) || [];
    res.status(200).json({ data: postedJobs });
  } catch (error) {
    next(error);
  }
};

export const editJob = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const {
      jobTitle,
      company,
      jobLocation,
      salaryRange,
      workMode,
      jobType,
      description,
      preferredQualification,
      numberOfOpenings,
      experienceRequired,
      applicationDeadline,
    } = req.body;

    const job = await Job.findById(jobId);

    if (!job) {
      const error = new Error("Job Not Found");
      error.statusCode = 404;
      return next(error);
    }

    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      {
        jobTitle,
        company,
        jobLocation,
        salaryRange,
        workMode,
        jobType,
        description,
        preferredQualification,
        numberOfOpenings,
        experienceRequired,
        applicationDeadline,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Job Updated Successfully",
      job: updatedJob,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);

    if (!job) {
      const error = new Error("Job Not Found");
      error.statusCode = 404;
      return next(error);
    }

    await Job.findByIdAndDelete(jobId);

    res.status(200).json({ message: "Job Removed Successfully!" });
  } catch (error) {
    next(error);
  }
};

export const getAllApplications = async (req, res, next) => {
  try {
    const recruiter = req.user._id;

    if (!recruiter) {
      const error = new Error("Recruiter Not Found");
      error.statusCode = 404;
      return next(error);
    }

    const appliedJobs = await AppliedJob.find({
      recruiterId: recruiter,
      status: { $ne: "saved" },
    })
      .populate("jobId")
      .populate("userId");

    if (!appliedJobs || appliedJobs.length === 0) {
      const error = new Error("No Applications Found");
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json({ data: appliedJobs });
  } catch (error) {
    next(error);
  }
};

export const UpdateApplicationStatus = async (req, res, next) => {
  try {
    const application = req.params.id;
    const { status } = req.body;

    if (!application) {
      const error = new Error("No applications found");
      error.statusCode = 404;
      return next(error);
    }

    if (!status) {
      const error = new Error("Status is required");
      error.statusCode = 400;
      return next(error);
    }

    application.status = status;

    await application.save();

    res.status(200).json({message: "Application Status Updated Successfully"});
  } catch (error) {
    next(error);
  }
};
