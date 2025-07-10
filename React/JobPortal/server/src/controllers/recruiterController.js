import Job from "../models/jobModel.js";

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
      preferedQualification,
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
      !preferedQualification ||
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
      preferedQualification,
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
      preferedQualification,
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
        preferedQualification,
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
