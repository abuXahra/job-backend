const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: String,
    required: true,
  },

  positionApplied: {
    type: String,
    required: true,
  },

  yearsOfExperience: {
    type: Number,
    required: true,
    min: 4,
  },

  expectedSalary: {
    type: Number,
    required: true,
    min: 1,
  },

  portfolioUrl: {
    type: String,
    required: true,
  },

  employmentType: {
    type: String,
    required: true,
    enum: ["full-time", "part-time", "contract", "internship"],
  },

  applicationStatus: {
    type: String,
    enum: ["under-review", "accepted", "declined"],
    default: "under-review",
  },
});

const Job = mongoose.model("job", jobSchema);
module.exports = Job;
