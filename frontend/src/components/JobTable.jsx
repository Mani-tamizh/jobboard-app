import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaEye, FaTrash } from 'react-icons/fa';

export default function JobTable({ jobs, onView, onDelete }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map(job => (
                    <tr key={job._id}>
                        <td>{job.company}</td>
                        <td>{job.title}</td>
                        <td>
                            <Button variant="info" onClick={() => onView(job)}>
                                <FaEye />
                            </Button>
                            <Button variant="danger" className="ms-2" onClick={() => onDelete(job)}>
                                <FaTrash />
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
