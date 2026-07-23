const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");
const validate = require("../middlwares/validate");
const jobSchema = require("../validator/jobValidator");

router.post("/apply", validate(jobSchema), jobController.applyJob);

router.get("/", jobController.getJobApplications);

router.get("/:jobId", jobController.getJobApplication);

router.patch(
  "/:jobId",
  validate(jobSchema),
  jobController.updateJobApplication,
);

router.delete("/:jobId", jobController.deleteJobApplication);

module.exports = router;
