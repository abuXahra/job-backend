const Job = require("../models/job.model");
const AsyncHandler = require("express-async-handler");

// Job application
exports.applyJob = AsyncHandler(async (req, res) => {
  const {
    fullName,
    email,
    phone,
    positionApplied,
    yearsOfExperience,
    expectedSalary,
    portfolioUrl,
    employmentType,
    applicationStatus,
  } = req.body;

  const job = await Job.create({
    fullName,
    email,
    phone,
    positionApplied,
    yearsOfExperience,
    expectedSalary,
    portfolioUrl,
    employmentType,
    applicationStatus,
  });

  if (!job) {
    const error = new Error("Error occur while applying for job");
    error.statusCode = 500;
    throw error;
  }

  res.status(201).json({ message: "Job application is successful", job });
});

// retrieve all applications
exports.getJobApps = AsyncHandler(async (req, res) => {
  const job = await Job.find({});

  if (!job) {
    const error = new Error("Not job application found");
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({ message: "Job applications fetch successfully", job });
});

// retrive application

// update application

// delete application
