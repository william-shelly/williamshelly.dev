import React, { useState } from "react"; //useEffect,
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

export default function PortfolioModal({node}) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);
	return (
		<Modal
			show={show}
			onHide={handleClose}
			backdrop="static"
			keyboard={true}
		>
			<Modal.Header closeButton>
				<Modal.Title><h2>{node.title}</h2></Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{node.featuredImage ? <img src={node.featuredImage.file.url} className="w-100 my-2" alt={node.featuredImage.description} loading="lazy" /> : undefined }

				{node.featuredImage ? <p><span dangerouslySetInnerHTML={{ __html: node.featuredImage.description}}></span></p> : undefined }

			</Modal.Body>
			<Modal.Footer>
			</Modal.Footer>
		</Modal>
	)
}
