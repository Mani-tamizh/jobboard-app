// api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://jobboard-app-a8ck.onrender.com/api/jobs",
});

export const fetchJobs = () => API.get("/");
export const createJob = (data) => API.post("/", data);
export const deleteJob = (id) => API.delete(`/${id}`);
