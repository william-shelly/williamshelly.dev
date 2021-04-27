import React from "react"
import SEO from '../components/seo.js'
import { Gatsby, Javascript, Git, CssThree, Mysql } from '@icons-pack/react-simple-icons';
import IntroArea from "../components/intro-area.js"
import Default from "../layouts/default.js"
import BackgroundImage from '../images/markus-spiske-hvSr_CVecVI-unsplash.jpg'

const Cheatsheets = () => {
	const title = "Cheat Sheets"
	const pageName = title.replace(/ /g,'-').toLowerCase();
	const photoCredit = 'Markus Spiske';
	const photoLink = 'https://unsplash.com/photos/hvSr_CVecVI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink';

	function gatsbyIcon() {
		return <Gatsby className="gatsby-icon color-primary my-4" />;
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

	function mySQLIcon() {
		return <Mysql className="color-primary my-4" />;
	}

	return (
		<Default>
			<SEO title={title}></SEO>
			<IntroArea title={title} pageName={pageName} photoLink={photoLink} photoCredit={photoCredit} BackgroundImage={BackgroundImage} />
			<div className="container my-5">
				<div className="row">
					<div className="col-12">
						<p>My little repository for code snippets or little reminders for how I got stuff to work.</p>
					</div>
				</div>
				<div className="row">
				<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div class="card-body">
								<h4 style={{ fontSize: "92px", margin: "1.5rem 0", color: "#cf2192" }}>A11Y</h4>
								<h5 class="card-title"><strong>A11Y</strong></h5>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item text-center">
									<a className="color-primary" href="https://www.digitala11y.com/accessibility-cheat-sheets/" rel="noopener noreferrer" target="_blank">A11y Cheat Sheets</a> 
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div class="card-body">
								{ cssThreeIcon() }
								<h5 class="card-title"><strong>CSS</strong></h5>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item text-center">
									<a className="color-primary" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" rel="noopener noreferrer" target="_blank">CSS Tricks: Flexbox</a> 
									<a className="color-primary" href="https://css-tricks.com/snippets/css/complete-guide-grid/" rel="noopener noreferrer" target="_blank">CSS Tricks: Grid</a> 
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div class="card-body">
								{ gatsbyIcon() }
								<h5 class="card-title"><strong>Gatsby</strong></h5>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item text-center">
									<a className="color-primary" href="https://www.gatsbyjs.com/docs/cheat-sheet/" rel="noopener noreferrer" target="_blank">Gatsby Cheat Sheet</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div class="card-body">
								{ gitIcon() }
								<h5 class="card-title"><strong>Git</strong></h5>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item text-center">
									<a className="color-primary" href="https://williamshelly.com/git/git-cheat-sheet.txt" rel="noopener noreferrer" target="_blank">Git Cheat Sheet</a> </li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div class="card-body">
								{ javascriptIcon() }
								<h5 class="card-title"><strong>Vanilla JavaScript</strong></h5>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item text-center">
									<a className="color-primary" href="https://williamshelly.com/javascript/js-cheat-sheet.txt" rel="noopener noreferrer" target="_blank">JS Cheat Sheet</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="card mb-4">
							<div class="card-body">
								{ mySQLIcon() }
								<h5 class="card-title"><strong>MySQL</strong></h5>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item text-center">
									<a className="color-primary" href="https://williamshelly.com/sql/sql-cheat-sheet.txt" rel="noopener noreferrer" target="_blank">SQL Cheat Sheet</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Default>
	)
}

export default Cheatsheets
