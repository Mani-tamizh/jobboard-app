import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import JobForm from './JobForm';

export default function JobModal({ job, onClose, mode, onDeleteConfirm, onAddConfirm }) {
    if (!job && mode !== 'add') return null;

    return (
        <Modal show={!!job || mode === 'add'} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {mode === 'delete' ? 'Confirm Delete' :
                        mode === 'add' ? 'Add New Job' : job.title}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {mode === 'delete' ? (
                    <>
                        <p>Are you sure you want to delete this job?</p>
                        <p><strong>{job.title}</strong> at <strong>{job.company}</strong></p>
                    </>
                ) : mode === 'add' ? (
                    <JobForm onSubmit={onAddConfirm} />
                ) : (
                    <>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Description:</strong> {job.description}</p>
                        <p><strong>Salary:</strong> {job.salary}</p>
                    </>
                )}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                {mode === 'delete' && (
                    <Button variant="danger" onClick={() => onDeleteConfirm(job._id)}>Delete</Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}
