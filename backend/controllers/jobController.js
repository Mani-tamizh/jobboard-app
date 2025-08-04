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
  const { id } = req.params;
  await Job.findByIdAndDelete(id);
  res.status(204).end();
};

module.exports = {
  getJobs,
  postJob,
  deleteJob,
};
