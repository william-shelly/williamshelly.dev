import React, { useState } from "react"; //useEffect,
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

const PortfolioModal = ({node}) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	return (
		<Modal
				node={node}
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

          {node.image02 ? <img src={node.image02.file.url} className="w-100 my-2" alt={node.image02.description} className="w-full" loading="lazy" /> : undefined }

          {node.image03 ? <img src={node.image03.file.url} className="w-100 my-2" alt={node.image03.description} className="w-full" loading="lazy" /> : undefined }

          {node.image04 ? <img src={node.image04.file.url} className="w-100 my-2" alt={node.image04.description} className="w-full" loading="lazy" /> : undefined }

        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
	)
}
export default PortfolioModal
