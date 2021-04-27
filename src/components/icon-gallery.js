import React from "react"
import { ReactJs, Gatsby, Javascript, Jquery, Adobephotoshop, Adobeillustrator, Adobexd, Visualstudiocode, Bootstrap, Tailwindcss, Git, Github, Xcode, Json, Wordpress, Googlechrome, Safari, Applemusic, Applepodcasts, Googlecalendar, Netlify, Contentful, Php, CssThree, Npm, NodeDotJs, Sass } from '@icons-pack/react-simple-icons';

const IconGallery = () => {
	function gatsbyIcon() {
		return <Gatsby className="gatsby-icon text-secondary m-4 opacity-0 delay-65" />;
	}

	function reactIcon() {
		return <ReactJs className="react-icon text-secondary m-4 opacity-0 delay-110" />;
	}

	function javascriptIcon() {
		return <Javascript className="javascript-icon text-secondary m-4 opacity-0 delay-15" />;
	}

	function jqueryIcon() {
		return <Jquery className="jquery-icon text-secondary m-4 opacity-0 delay-55" />;
	}

	function photoshopIcon() {
		return <Adobephotoshop className="photoshop-icon text-secondary m-4 opacity-0 delay-60" />;
	}

	function illustratorIcon() {
		return <Adobeillustrator className="text-secondary m-4 opacity-0 delay-105" />;
	}

	function xdIcon() {
		return <Adobexd className="xd-icon text-secondary m-4 opacity-0 delay-35" />;
	}


	function vsCodeIcon() {
		return <Visualstudiocode className="vscode-icon text-secondary m-4 opacity-0 delay-40" />;
	}

	function bootstrapIcon() {
		return <Bootstrap className="bootstrap-icon text-secondary m-4 opacity-0 delay-45" />;
	}

	function tailwindcssIcon() {
		return <Tailwindcss className="text-secondary m-4 opacity-0 delay-130" />;
	}

	function gitIcon() {
		return <Git className="git-icon text-secondary m-4 opacity-0 delay-90" />;
	}

	function githubIcon() {
		return <Github className="github-icon text-secondary m-4 opacity-0 delay-115" />;
	}

	function xcodeIcon() {
		return <Xcode className="xcode-icon text-secondary m-4 opacity-0 delay-145" />;
	}

	function jsonIcon() {
		return <Json className="json-icon text-secondary m-4 opacity-0 delay-70" />;
	}

	function wordPressIcon() {
		return <Wordpress className="wordpress-icon text-secondary m-4 opacity-0 delay-125" />;
	}

	function googleChromeIcon() {
		return <Googlechrome className="chrome-icon text-secondary m-4 opacity-0 delay-80" />;
	}

	function safariIcon() {
		return <Safari className="safari-icon text-secondary m-4 opacity-0 delay-140" />;
	}

	function appleMusicIcon() {
		return <Applemusic className="music-icon text-secondary m-4 opacity-0 delay-120" />;
	}

	function applePodcasts() {
		return <Applepodcasts className="podcasts-icon text-secondary m-4 opacity-0 delay-100" />;
	}

	function googlecalendarIcon() {
		return <Googlecalendar className="calendar-icon text-secondary m-4 opacity-0 delay-30" />;
	}

	function netlifyIcon() {
		return <Netlify className="netlify-icon text-secondary m-4 opacity-0 delay-10" />;
	}

	function contentfulIcon() {
		return <Contentful className="contentful-icon text-secondary m-4 opacity-0 delay-135" />;
	}

	function phpIcon() {
		return <Php className="php-icon text-secondary m-4 opacity-0 delay-95" />;
	}

	function cssThreeIcon() {
		return <CssThree className="css-icon text-secondary m-4 opacity-0 delay-05" />;
	}

	function npmIcon() {
		return <Npm className="text-secondary m-4 opacity-0 delay-25" />;
	}

	function nodeJsIcon() {
		return <NodeDotJs className="text-secondary m-4 opacity-0 delay-20" />;
	}

	function sassIcon() {
		return <Sass className="sass-icon text-secondary m-4 opacity-0 delay-50" />;
	}

	return (
		<>
			{ gatsbyIcon() }
			{ reactIcon() }
			{ javascriptIcon() }
			{ jqueryIcon() }
			{ photoshopIcon() }
			{ illustratorIcon() }
			{ xdIcon() }
			{ vsCodeIcon() }
			{ bootstrapIcon() }
			{ tailwindcssIcon() }
			{ gitIcon() }
			{ githubIcon() }
			{ xcodeIcon() }
			{ jsonIcon() }
			{ wordPressIcon() }
			{ googleChromeIcon() }
			{ safariIcon() }
			{ appleMusicIcon() }
			{ applePodcasts() }
			{ googlecalendarIcon() }
			{ netlifyIcon() }
			{ contentfulIcon() }
			{ phpIcon() }
			{ cssThreeIcon() }
			{ npmIcon() }
			{ nodeJsIcon() }
			{ sassIcon() }
		</>
	)
}

export default IconGallery
