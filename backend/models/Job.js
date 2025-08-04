const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: String,
    company: String,
    location: String,
    salary: String,
    description: String,
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

console.log("✅ Job model initialized");

module.exports = Job;
