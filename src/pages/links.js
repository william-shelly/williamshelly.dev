import React from "react"
import { Link } from "gatsby"
import SEO from '../components/seo.js'
import IntroArea from "../components/intro-area.js"
import Default from "../layouts/default.js"

export default function Links() {
	const title = "Links"
	const pageName = title.replace(' ','-').toLowerCase();
	return (
		<Default>
			<SEO title={title}></SEO>
			<IntroArea title={title} pageName={pageName} />
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
