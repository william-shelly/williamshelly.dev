import React from "react"
import SEO from '../components/seo.js'
import IntroArea from "../components/intro-area.js"
import Default from "../layouts/default.js"
import IconGallery from '../components/icon-gallery'
import BackgroundImage from '../images/marius-niveri-rfg4l6_lu3c-unsplash.webp'
import profileImage from '../images/profile.webp'
export default function About(props) {
	const title = 'About Me';
	const pageName = title.replace(/ /g,'-').toLowerCase();
	const photoCredit = 'Marius Niveri';
	const photoLink = 'https://unsplash.com/photos/rfg4l6_lu3c?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink';
	return (
		<Default>
			<SEO title={title}></SEO>
			<IntroArea title={title} pageName={pageName} photoLink={photoLink} photoCredit={photoCredit} BackgroundImage={BackgroundImage} />
			<div className="container my-5">
				<div className="row">
					<div className="col">
						<img className="profile-pic rounded-circle d-block mx-auto mb-4 delay-20" src={profileImage} alt="William Shelly - freelance designer / front-end developer" />
						<p className="text-base">I am a freelance designer and front-end developer. I have worked as a designer for 25 years. I have gained experience in many different worlds: agency, corporate, startup, and freelance.</p>

						<p>I completed a 6-month <strong>Front-End Web Development</strong> course from the University of Arkansas Professional and Workforce Development program.</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div>
							<p className="text-base">Here are some of the tools that I work with daily:</p>
						</div>
						<div className="icon-gallery">
							<IconGallery />
						</div>
					</div>
				</div>
			</div>
		</Default>
	)
}
