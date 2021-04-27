import React, { useState } from "react";  // { useEffect, }
// import { Link } from 'gatsby'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import PortfolioModal from '../components/portfolio-modal.js'

export default function PortfolioPreview({node}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="menu-item-description col-12 col-lg-6  d-flex flex-column flex-lg-row justify-content-between">
        <div className="portfolio-container text-center d-flex flex-column justify-content-between align-items-center flex-fill flex-grow-1 position-relative overflow-hidden my-4">
          {node.logo.file.url ?
          <div className="d-flex center-img project-container">
            <div className="project-logo-container p-1 background-white rounded-lg shadow-lg">
              <Button className="background-white" variant="btn-outline-light" onClick={handleShow}>
                <img src={node.logo.file.url}
                  className="d-flex project-logo"
                  alt={node.title}
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </Button>
            </div>
          </div>
          : undefined }

          {node.featuredImage ?
          <img src={node.featuredImage.file.url}
            className="project-background-img d-flex w-100"
            alt={node.featuredImage.description} loading="lazy" />
          : undefined }

          <div className="project-info-container position-absolute fixed-bottom py-1 px-3">
            {node.featuredImage ?
            <div>
              <h2 className="fs-8">{node.title}</h2>
              <p
              dangerouslySetInnerHTML={{ __html: node.featuredImage.description}}>
              </p>
            </div>
            : undefined }

            <Button className="project-view-button" variant="primary my-2" onClick={handleShow}>
            View {node.title}
            </Button>
          </div>
        </div>
      </div>

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

          {node.image02 ? <img src={node.image02.file.url} className="w-100 my-2" alt={node.image02.description} loading="lazy" /> : undefined }

          {node.image03 ? <img src={node.image03.file.url} className="w-100 my-2" alt={node.image03.description} loading="lazy" /> : undefined }

          {node.image04 ? <img src={node.image04.file.url} className="w-100 my-2" alt={node.image04.description} loading="lazy" /> : undefined }

        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  )
}
