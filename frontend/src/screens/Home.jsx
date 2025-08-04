import { useEffect, useState } from 'react';
import { fetchJobs, deleteJob, createJob } from '../api.js';
import JobModal from '../components/JobModal.jsx';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import NavBar from '../components/NavBar.jsx'
import 'react-toastify/dist/ReactToastify.css';
import './home.css'

export default function Home() {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [modalMode, setModalMode] = useState('view');

    const loadJobs = async () => {
        try {
            const res = await fetchJobs();
            setJobs(res.data);
        } catch (err) {
            console.error("Error fetching jobs:", err);
        }
    };

    useEffect(() => {
        loadJobs();
    }, []);

    const handleDeleteConfirm = async (jobId) => {
        try {
            await deleteJob(jobId);
            toast.success('Job deleted successfully!');
            setSelectedJob(null);
            loadJobs();
        } catch (err) {
            console.error("Error deleting job:", err);
            toast.error('Failed to delete job.');
        }
    };

    const handleAddConfirm = async (jobData) => {
        try {
            await createJob(jobData);
            toast.success('Job added successfully!');
            setSelectedJob(null);
            setModalMode(null);
            loadJobs();
        } catch (err) {
            console.error("Add error:", err);
            toast.error("Failed to add job.");
        }
    };


    return (
        <>
            <NavBar />

            <Container fluid>
                <Row>
                    <Col md={12} className="p-4">
                        <div className='job_listing'>
                            <h2>Job Listings</h2>
                            <Button onClick={() => {
                                setModalMode('add');
                                setSelectedJob(null);
                            }}>Add Job</Button>
                        </div>

                        <Row xs={1} md={2} lg={3} className="g-4" >
                            {jobs.map((job) => (
                                <Col key={job._id}>
                                    <div className="card">
                                        <div>
                                            <h5>{job.title}</h5>
                                            <p className="mb-1"><strong>Company:</strong> {job.company}</p>
                                            <p className="mb-1"><strong>Location:</strong> {job.location}</p>
                                            <p className="mb-1"><strong>Salary:</strong> ₹{job.salary}</p>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <Button
                                                variant="primary"
                                                onClick={() => {
                                                    setModalMode('view');
                                                    setSelectedJob(job);
                                                }}
                                            >
                                                View
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => {
                                                    setModalMode('delete');
                                                    setSelectedJob(job);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                    </Col>
                </Row>
            </Container>

            <JobModal
                job={selectedJob}
                mode={modalMode}
                onClose={() => {
                    setSelectedJob(null);
                    setModalMode(null);
                }}
                onDeleteConfirm={handleDeleteConfirm}
                onAddConfirm={handleAddConfirm}
            />

            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}
