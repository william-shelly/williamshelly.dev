import React from "react"
import { Link } from "gatsby"
import SEO from '../components/seo.js'
import IntroArea from "../components/intro-area.js"
import Default from "../layouts/default.js"
import BackgroundImage from '../images/dlanor-s-2xEQDxB0ss4-unsplash.jpg'

export default function Links() {
	const title = "Links"
	const pageName = title.replace(/ /g,'-').toLowerCase();
	const photoCredit = 'Dlanor S';
	const photoLink = 'https://unsplash.com/photos/2xEQDxB0ss4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink';
	return (
		<Default>
			<SEO title={title}></SEO>
			<IntroArea title={title} pageName={pageName} photoLink={photoLink} photoCredit={photoCredit} BackgroundImage={BackgroundImage} />
			<div className="container my-5">
				<div className="row">
					<div className="col">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

						<ul>
							<li>
								<Link to="../javascript">JavaScript</Link>
							</li>
							<li>
								<Link to="../react">React</Link>
							</li>
							<li>
								<Link to="../gatsby">Gatsby</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Default>
	)
}
