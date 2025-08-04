const express = require("express");
const { getJobs, postJob, deleteJob } = require("../controllers/jobController");

const router = express.Router();

router.get("/", getJobs);
router.post("/", postJob);
router.delete("/:id", deleteJob);

module.exports = router;
