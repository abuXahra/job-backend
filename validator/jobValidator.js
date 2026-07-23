const Joi = require("joi");

const jobSchema = new Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  positionApplied: Joi.string().required(),
  yearsOfExperience: Joi.number().required(),
  expectedSalary: Joi.number().required(),
  portfolioUrl: Joi.string().required(),
  employmentType: Joi.string()
    .valid("full-time", "part-time", "contract", "internship")
    .required(),
  applicationStatus: Joi.string()
    .valid("under-review", "accepted", "declined")
    .default("under-review"),
});

module.exports = jobSchema;
