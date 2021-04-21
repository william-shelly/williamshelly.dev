import React from 'react'
import { Link } from 'gatsby'
import Default from "../layouts/default.js"

export default function PortfolioPage({pageContext}) {
	const { pageContent } = pageContext;

	return (
		<Default>
			<div className="menu-content-page container">
				<div className="row mx-0 px-0 mb-4 text-center text-lg-left">
					<div className="col-12 col-lg-4">
						<h1>{pageContent.name}</h1>
						{/* <p><span dangerouslySetInnerHTML={{ __html: pageContent.description.description}}></span></p> */}


						{pageContent.featuredImage ? <img src={pageContent.featuredImage.file.url} alt={pageContent.featuredImage.description} loading="lazy" /> : undefined }

            {pageContent.featuredImage ? <p><span dangerouslySetInnerHTML={{ __html: pageContent.featuredImage.description}}></span></p> : undefined }

            {pageContent.image02 ? <img src={pageContent.image02.file.url} alt={pageContent.image02.description} loading="lazy" /> : undefined }

            {pageContent.image03 ? <img src={pageContent.image03.file.url} alt={pageContent.image03.description} loading="lazy" /> : undefined }

            {pageContent.image04 ? <img src={pageContent.image04.file.url} alt={pageContent.image04.description} loading="lazy" /> : undefined }

            <Link className="btn btn-secondarycolor d-sm-inline-block text-white" to={"/portfolio/" + pageContent.id}>Test {pageContent.title}</Link>

            {pageContent.link ? <a className="btn btn-primarycolor d-sm-inline-block text-white mt-2" href={pageContent.link} target="_blank" rel="noreferrer">View {pageContent.title}</a> : undefined }

					</div>
				</div>
			</div>
		</Default>
	)
}
