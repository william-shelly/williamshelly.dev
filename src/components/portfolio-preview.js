import React, { useState } from "react";  // { useEffect, }
import Button from 'react-bootstrap/Button';
import PortfolioModal from '../components/portfolio-modal.js'

const PortfolioPreview = ({node}) => {

  const [show, setShow] = useState(false);
  const [work, setWork] = useState(null);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="menu-item-description col-12 col-lg-6 text-center d-flex justify-content-between align-items-center">
        <h2>{node.title}</h2>

        {node.logo.file.url ? <img src={node.logo.file.url} className="d-flex" alt={node.title} loading="lazy" width={node.logoWidth} /> : undefined }

        {node.featuredImage ? <img src={node.featuredImage.file.url} className="d-flex w-100 my-2" alt={node.featuredImage.description} loading="lazy" /> : undefined }

        {node.featuredImage ? <p><span dangerouslySetInnerHTML={{ __html: node.featuredImage.description}}></span></p> : undefined }

        <Button
          variant="primary my-2"
            onClick={ () => {
              setWork(node);
              console.log(node);
              handleShow();
              setShow(true);
              console.log(show);
          }}
        >
          View {node.title}
        </Button>

        { work && <PortfolioModal node={work} /> }
      </div>

    </>
  )
}

export default PortfolioPreview
