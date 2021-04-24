import React from "react"
import { Link } from "gatsby"
import SEO from '../components/seo.js'
import IntroArea from "../components/intro-area.js"
import Default from "../layouts/default.js"
import BackgroundImage from '../images/markus-spiske-hvSr_CVecVI-unsplash.jpg'

export default function Cheatsheets() {
	const title = "Cheat Sheets"
	const pageName = title.replaceAll(' ','-').toLowerCase();
	const photoCredit = 'Markus Spiske';
	const photoLink = 'https://unsplash.com/photos/hvSr_CVecVI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink';

	return (
		<Default>
			<SEO title={title}></SEO>
			<IntroArea title={title} pageName={pageName} photoLink={photoLink} photoCredit={photoCredit} BackgroundImage={BackgroundImage} />
			<div className="container my-5">
				<div className="row">
					<div className="col">
						<p>My little repository for code snippets or little reminders for how I got stuff to work.</p>

						<ul>
							<li>
								<Link to="../css">CSS</Link>
							</li>
							<li>
								<Link to="../git">Git</Link>
							</li>
							<li>
								<Link to="../gatsby">Gatsby</Link>
							</li>
							<li>
								<Link to="../javascript">JavaScript</Link>
							</li>
							<li>
								<Link to="../react">React</Link>
							</li>
							<li>
								<Link to="../swift-ui">SwiftUI</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Default>
	)
}
