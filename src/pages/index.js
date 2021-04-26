import * as React from "react"
import Homepage from '../layouts/homepage.js'
import SEO from '../components/seo.js'
import hero from '../images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.css'
import { ReactJs, Gatsby, Javascript, Jquery, Adobephotoshop, Adobeillustrator, Adobexd, Visualstudiocode, Bootstrap, Tailwindcss, Git, Github, Xcode, Json, Wordpress, Googlechrome, Safari, Applemusic, Applepodcasts, Googlecalendar, Netlify, Contentful, Php, CssThree, Npm, NodeDotJs, Apple } from '@icons-pack/react-simple-icons';
import '../../styles.scss'

function gatsbyIcon() {
  return <Gatsby className="text-secondary m-4 opacity-0 delay-65" />;
}

function reactIcon() {
  return <ReactJs className="text-secondary m-4 opacity-0 delay-110" />;
}

function javascriptIcon() {
  return <Javascript className="text-secondary m-4 opacity-0 delay-15" />;
}

function jqueryIcon() {
  return <Jquery className="text-secondary m-4 opacity-0 delay-55" />;
}

function photoshopIcon() {
  return <Adobephotoshop className="text-secondary m-4 opacity-0 delay-60" />;
}

function illustratorIcon() {
  return <Adobeillustrator className="text-secondary m-4 opacity-0 delay-105" />;
}

function xdIcon() {
  return <Adobexd className="text-secondary m-4 opacity-0 delay-35" />;
}


function vsCodeIcon() {
  return <Visualstudiocode className="text-secondary m-4 opacity-0 delay-40" />;
}

function bootstrapIcon() {
  return <Bootstrap className="text-secondary m-4 opacity-0 delay-45" />;
}

function tailwindcssIcon() {
  return <Tailwindcss className="text-secondary m-4 opacity-0 delay-130" />;
}

function gitIcon() {
  return <Git className="text-secondary m-4 opacity-0 delay-90" />;
}

function githubIcon() {
  return <Github className="text-secondary m-4 opacity-0 delay-115" />;
}

function xcodeIcon() {
  return <Xcode className="text-secondary m-4 opacity-0 delay-145" />;
}

function jsonIcon() {
  return <Json className="text-secondary m-4 opacity-0 delay-70" />;
}

function wordPressIcon() {
  return <Wordpress className="text-secondary m-4 opacity-0 delay-125" />;
}

function googleChromeIcon() {
  return <Googlechrome className="text-secondary m-4 opacity-0 delay-80" />;
}

function safariIcon() {
  return <Safari className="text-secondary m-4 opacity-0 delay-140" />;
}

function appleMusicIcon() {
  return <Applemusic className="text-secondary m-4 opacity-0 delay-120" />;
}

function applePodcasts() {
  return <Applepodcasts className="text-secondary m-4 opacity-0 delay-100" />;
}

function googlecalendarIcon() {
  return <Googlecalendar className="text-secondary m-4 opacity-0 delay-30" />;
}

function netlifyIcon() {
  return <Netlify className="text-secondary m-4 opacity-0 delay-10" />;
}

function contentfulIcon() {
  return <Contentful className="text-secondary m-4 opacity-0 delay-135" />;
}

function phpIcon() {
  return <Php className="text-secondary m-4 opacity-0 delay-95" />;
}

function cssThreeIcon() {
  return <CssThree className="text-secondary m-4 opacity-0 delay-05" />;
}

function npmIcon() {
  return <Npm className="text-secondary m-4 opacity-0 delay-25" />;
}

function nodeJsIcon() {
  return <NodeDotJs className="text-secondary m-4 opacity-0 delay-20" />;
}

function appleIcon() {
  return <Apple className="text-secondary m-4 opacity-0 delay-50" />;
}

// function myFunction() {
//   heroIconContainer = document.querySelector('hero-icon-container')
//   console.log(heroIconContainer)
// }

// markup
const IndexPage = () => {

  const heroAlt = 'html code';
  const site="williamshelly.dev";
  const subheadline="designer/developer";
  const content="Hello! My name is William.";
  const content2="I design and create digital stuff.";
  const photoCredit="Florian Olivo";
  const photoLink="https://unsplash.com/photos/4hbJ-eymZ1o?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink";
  const title = "Homepage"

  return (
    <Homepage>
      <SEO title={title}></SEO>
      <section className="hero">
        <div className="hero-img-container">
          <img className="hero-img" src={hero} alt={heroAlt} />
          <div className="hero-icon-container d-flex flex-wrap">
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
            { appleIcon() }
          </div>
        </div>
        <div className="hero-content">
          <h1 className="fs-0 text-uppercase monofont color-primary">{site}</h1>
          <h2 className="fs-6 text-uppercase monofont mb-4 color-primary">{subheadline}</h2>
          <h3 className="fs-6 text-white">{content}</h3>
          <h4 className="fs-6 text-white">{content2}</h4>
          <div className="photo-credit background-color-primary p-3">
            <a className="text-white" href={photoLink} target="_blank" rel="noopener noreferrer">Thank you <strong>{photoCredit}</strong>! For such a wonderful photo!</a>
          </div>
        </div>
      </section>
      {/* {myFunction()} */}
    </Homepage>
  )
}

export default IndexPage
