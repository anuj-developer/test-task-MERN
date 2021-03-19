import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const CenteredModal = ({ show, email, message, setModalShow }) => {
	return (
		<Modal
			show={show}
			size="lg"
			onHide={() => setModalShow(false)}
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">{email}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{message}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={() => setModalShow(false)}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CenteredModal;
