const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  getjob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getjob).delete(deleteJob).patch(updateJob);

module.exports = router;
