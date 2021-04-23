import React, { useState } from "react"; //useEffect,
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const PortfolioModal = ({node}) => {
	const [show, setShow] = useState(true);
	const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	return (
		<Modal
        show={true}
        // show={handleShow}
        onHide={handleClose}
        keyboard={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title><h2>{node.title}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {node.featuredImage ? <img src={node.featuredImage.file.url} className="w-100 my-2" alt={node.featuredImage.description} loading="lazy" /> : undefined }

          {node.featuredImage ? <p><span dangerouslySetInnerHTML={{ __html: node.featuredImage.description}}></span></p> : undefined }

          {node.image02 ? <img src={node.image02.file.url} className="w-100 my-2" alt={node.image02.description} className="w-full" loading="lazy" /> : undefined }

          {node.image03 ? <img src={node.image03.file.url} className="w-100 my-2" alt={node.image03.description} className="w-full" loading="lazy" /> : undefined }

          {node.image04 ? <img src={node.image04.file.url} className="w-100 my-2" alt={node.image04.description} className="w-full" loading="lazy" /> : undefined }

        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
              onClick={ () => {
                console.log(show);
                handleShow();
                console.log(show);
                setShow(true);
                console.log(show);
            }}
          >
          Close
          </Button>
        </Modal.Footer>
      </Modal>
	)
}
export default PortfolioModal
