import React from 'react'
// import { Link } from 'gatsby'

export default function PortfolioPreview({node}) {
    return (
        <>
            <div className="col-12 mb-4">
                <div className="row">
                    {node.logo.file.url ? <div className="col-12 col-lg-6"><img src={node.logo.file.url} alt={node.title} loading="lazy" width={node.logoWidth} /></div> : undefined }
                    <div className="menu-item-description col-12 col-lg-6 text-center text-lg-left">
                        <h2>{node.title}</h2>
                        {node.featuredImage.file.url ? <img src={node.featuredImage.file.url} alt={node.featuredImage.description} loading="lazy" /> : undefined }

                        {node.featuredImage.description ? <p><span dangerouslySetInnerHTML={{ __html: node.featuredImage.description}}></span></p> : undefined }

                        {node.link ? <a className="btn btn-primarycolor d-sm-inline-block text-white mt-2" href={node.link} target="_blank" rel="noreferrer">View {node.title}</a> : undefined }

                    </div>
                </div>
            </div>
        </>
    )
}
