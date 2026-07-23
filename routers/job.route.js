const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");
const validate = require("../middlwares/validate");
const jobSchema = require("../validator/jobValidator");

router.post("/apply", validate(jobSchema), jobController.applyJob);

// router.patch("/:jobId", validate(jobSchema), jobController.updateJobApp);

module.exports = router;
