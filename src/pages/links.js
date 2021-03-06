import React from "react"
import SEO from '../components/seo.js'
import { ReactJs, Gatsby, Javascript, Git, CssThree, Npm, NodeDotJs } from '@icons-pack/react-simple-icons';
import IntroArea from "../components/intro-area.js"
import Default from "../layouts/default.js"
import BackgroundImage from '../images/dlanor-s-2xEQDxB0ss4-unsplash.webp'

const Links = () => {
	const title = "Links"
	const pageName = title.replace(/ /g,'-').toLowerCase();
	const photoCredit = 'Dlanor S';
	const photoLink = 'https://unsplash.com/photos/2xEQDxB0ss4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink';

	function gatsbyIcon() {
		return <Gatsby className="gatsby-icon color-primary my-4" />;
	}

	function reactIcon() {
		return <ReactJs className="react-icon color-primary my-4" />;
	}

	function javascriptIcon() {
		return <Javascript className="javascript-icon color-primary my-4" />;
	}

	function gitIcon() {
		return <Git className="git-icon color-primary my-4" />;
	}

	function cssThreeIcon() {
		return <CssThree className="css-icon color-primary my-4" />;
	}

	function npmIcon() {
		return <Npm className="color-primary my-4" />;
	}

	function nodeJsIcon() {
		return <NodeDotJs className="color-primary my-4" />;
	}

	return (
		<Default>
			<SEO title={title}></SEO>
			<IntroArea title={title} pageName={pageName} photoLink={photoLink} photoCredit={photoCredit} BackgroundImage={BackgroundImage} />
			<div className="container my-5">
				<div className="row">
					<div className="col-12">
					<p className="text-base text-center">References that I consult repeatedly throughout the day.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div className="card-body">
								<h4 style={{ fontSize: "92px", margin: "1.5rem 0", color: "#cf2192" }}>A11Y</h4>
								<h5 className="card-title"><strong>A11Y</strong></h5>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://a11yweekly.com/" rel="noopener noreferrer" target="_blank">A11Y weekly</a>
								</li>
								<li className="list-group-item text-center"><a className="color-primary" href="https://a11y-style-guide.com/style-guide/" rel="noopener noreferrer" target=
									"_blank">A11Y Style Guide</a>
								</li>
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://www.a11yproject.com/content-style-guide/" rel="noopener noreferrer" target="_blank">The A11Y Project</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div className="card-body">
								{ cssThreeIcon() }
								<h5 className="card-title"><strong>CSS</strong></h5>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://tailwindcss.com/docs/" rel="noopener noreferrer" target="_blank">Tailwind Docs</a>
								</li>
								<li className="list-group-item text-center"><a className="color-primary" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" rel="noopener noreferrer" target=
									"_blank">Bootstrap: Docs</a>
								</li>
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://css-tricks.com/newsletter/" rel="noopener noreferrer" target="_blank">A CSS-Tricks: Newsletter</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div className="card-body">
								{ gatsbyIcon() }
								<h5 className="card-title"><strong>Gatsby</strong></h5>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://www.gatsbyjs.com/docs" rel="noopener noreferrer" target="_blank">GatsbyJS: Docs</a>
								</li>
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://tailwindcss.com/docs/guides/gatsby" rel="noopener noreferrer" target="_blank">Install Tailwind CSS with Gatsby</a>
								</li>
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://www.gatsbyjs.com/starters/?" rel="noopener noreferrer" target="_blank">A Gatsby Starters</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div className="card-body">
								{ gitIcon() }
								<h5 className="card-title"><strong>Git</strong></h5>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item text-center"><a className="color-primary" href="https://www.atlassian.com/git/tutorials" rel="noopener noreferrer" target="_blank">Git Tutorials</a></li>
								<li className="list-group-item text-center"><a className="color-primary" href="https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/" rel="noopener noreferrer" target="_blank">FreeCodeCamp: Git</a></li>
								<li className="list-group-item text-center"><a className="color-primary" href="https://ohshitgit.com/" rel="noopener noreferrer" target="_blank">Oh Shit, Git!?!</a></li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div className="card-body">
								{ javascriptIcon() }
								<h5 className="card-title"><strong>Vanilla JavaScript</strong></h5>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://plainjs.com/javascript/" rel="noopener noreferrer" target="_blank">Plain JS</a>
								</li>
								<li className="list-group-item text-center"><a className="color-primary" href="https://caniuse.com/" rel="noopener noreferrer" target=
									"_blank">Can I Use???</a>
								</li>
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://eloquentjavascript.net/" rel="noopener noreferrer" target="_blank">Eloquent JavaScript</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div className="card-body">
								{ reactIcon() }
								<h5 className="card-title"><strong>React</strong></h5>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://reactjs.org/docs/getting-started.html" rel="noopener noreferrer" target="_blank">React: Docs</a>
								</li>
								<li className="list-group-item text-center"><a className="color-primary" href="https://reactnewsletter.com/issues" rel="noopener noreferrer" target="_blank">React Newsletter</a>
								</li>
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" rel="noopener noreferrer" target="_blank">Mozilla: Getting Started with React</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div className="card-body">
								{ npmIcon() }
								<h5 className="card-title"><strong>NPM</strong></h5>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://www.npmjs.com/" rel="noopener noreferrer" target="_blank">NPM</a>
								</li>
								<li className="list-group-item text-center"><a className="color-primary" href="https://docs.npmjs.com/about-npm/" rel="noopener noreferrer" target=
									"_blank">NPM Docs</a>
								</li>
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://www.w3schools.com/nodejs/nodejs_npm.asp" rel="noopener noreferrer" target="_blank">W3Schools: NPM</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div className="card-body">
								{ nodeJsIcon() }
								<h5 className="card-title"><strong>NodeJS</strong></h5>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">Node.js</a>
								</li>
								<li className="list-group-item text-center"><a className="color-primary" href="https://nodejs.org/en/docs/" rel="noopener noreferrer" target=
									"_blank">Node.js Docs</a>
								</li>
								<li className="list-group-item text-center">
									<a className="color-primary" href="https://www.w3schools.com/nodejs/" rel="noopener noreferrer" target="_blank">W3Schools: Node.js</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Default>
	)
}

export default Links
