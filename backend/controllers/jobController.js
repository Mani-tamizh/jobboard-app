const Job = require("../models/Job");

const getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

const postJob = async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.status(201).json(newJob);
};

const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(204).end();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getJobs,
  postJob,
  deleteJob,
};
