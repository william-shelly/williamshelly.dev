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
      <div key={node.id} className="menu-item-description col-12 col-lg-6 text-center d-flex justify-content-between align-items-center">
        <h2>{node.title}</h2>

        {node.logo.file.url ? <img src={node.logo.file.url} className="d-flex" alt={node.title} loading="lazy" width={node.logoWidth} /> : undefined }

        {node.featuredImage ? <img src={node.featuredImage.file.url} className="d-flex w-100 my-2" alt={node.featuredImage.description} loading="lazy" /> : undefined }

        {node.featuredImage ? <p><span dangerouslySetInnerHTML={{ __html: node.featuredImage.description}}></span></p> : undefined }
{/* 
        {node.image02 ? <img src={node.image02.file.url} alt={node.image02.description} loading="lazy" /> : undefined }

        {node.image03 ? <img src={node.image03.file.url} alt={node.image03.description} loading="lazy" /> : undefined }

        {node.image04 ? <img src={node.image04.file.url} alt={node.image04.description} loading="lazy" /> : undefined } */}

        {/* <Link className="btn btn-primarycolor d-sm-inline-block text-white" to={"/portfolio/" + node.id}>View {node.title}</Link> */}

        <Button variant="primary my-2" onClick={handleShow}>
          View {node.title}
        </Button>

        {/* {node.link ? <a className="btn btn-primarycolor d-sm-inline-block text-white mt-2" href={node.link} target="_blank" rel="noreferrer">View {node.title}</a> : undefined } */}
      </div>

      {/* <PortfolioModal
        node={node}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}>
      </PortfolioModal> */}

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
          {/* {node.featuredImage ? <img src={node.featuredImage.file.url} alt={node.featuredImage.description} className="w-full" loading="lazy" /> : undefined } */}

          {node.featuredImage ? <img src={node.featuredImage.file.url} className="w-100 my-2" alt={node.featuredImage.description} loading="lazy" /> : undefined }

          {node.featuredImage ? <p><span dangerouslySetInnerHTML={{ __html: node.featuredImage.description}}></span></p> : undefined }

          {node.image02 ? <img src={node.image02.file.url} className="w-100 my-2" alt={node.image02.description} className="w-full" loading="lazy" /> : undefined }

          {node.image03 ? <img src={node.image03.file.url} className="w-100 my-2" alt={node.image03.description} className="w-full" loading="lazy" /> : undefined }

          {node.image04 ? <img src={node.image04.file.url} className="w-100 my-2" alt={node.image04.description} className="w-full" loading="lazy" /> : undefined }

          {/* <Button variant="primary" onClick={handleShow}>
            View {node.title}
          </Button>

          {node.link ? <a className="btn btn-primarycolor d-sm-inline-block text-white mt-2" href={node.link} target="_blank" rel="noreferrer">Go to Website</a> : undefined } */}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}
