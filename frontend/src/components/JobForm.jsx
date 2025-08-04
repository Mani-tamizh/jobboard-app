import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function JobForm({ onSubmit }) {
    const [job, setJob] = useState({
        title: '',
        company: '',
        location: '',
        salary: '',
        description: '',
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(job);
        setJob({ title: '', company: '', location: '', salary: '', description: '' });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div style={{ display: flex }}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                        name="title"
                        value={job.title}
                        onChange={handleChange}
                        placeholder="Enter job title"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                        name="company"
                        value={job.company}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        required
                    />
                </Form.Group>

            </div>
            <Form.Group className="mb-3" controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    name="location"
                    value={job.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                    name="salary"
                    value={job.salary}
                    onChange={handleChange}
                    placeholder="Enter salary (optional)"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={job.description}
                    onChange={handleChange}
                    placeholder="Enter job description"
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Post Job
            </Button>
        </Form>
    );
}
