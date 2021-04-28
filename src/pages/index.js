import * as React from "react"
import { Link } from "gatsby"
import Homepage from '../layouts/homepage.js'
import SEO from '../components/seo.js'
import hero from '../images/florian-olivo-4hbJ-eymZ1o-unsplash.webp'
import IconGallery from '../components/icon-gallery'
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles.scss'
import h1WS from '../images/h1-ws.svg'
import h1Freelance from '../images/h1-freelance.svg'

// markup
const IndexPage = () => {

  const heroAlt = 'html code';
  const site="williamshelly.dev";
  const subheadline="freelance designer / front-end developer";
  const content="Hello! My name is William.";
  const content2="I design and create digital stuff.";
  const photoCredit="Florian Olivo";
  const photoLink="https://unsplash.com/photos/4hbJ-eymZ1o?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink";
  const title = "Freelance Designer and Front End Developer · WilliamShelly.dev"

  return (
    <Homepage>
      <SEO title={title}></SEO>
      <section className="hero">
        <div className="hero-img-container">
          <img className="hero-img" src={hero} alt={heroAlt} />
          <div className="hero-icon-container d-flex flex-wrap">
            <IconGallery />
          </div>
        </div>
        <div className="hero-content">
          <img className="h1-ws" src={h1WS} alt={site} />
          <img className="h1-freelance" src={h1Freelance} alt={subheadline} />
          <h1 className="sr-only">{site}</h1>
          <h2 className="sr-only">{subheadline}</h2>
          <h3 className="fs-6 text-white">{content}</h3>
          <h4 className="fs-6 text-white">{content2}</h4>
          <div className="photo-credit background-color-primary p-3">
            <a className="text-white" href={photoLink} target="_blank" rel="noopener noreferrer">Thank you <strong>{photoCredit}</strong>! For such a wonderful photo!</a>
          </div>
        </div>
      </section>
      <div className="jumbotron text-center bg-white">
        <h2 className="fs-4 my-4 text-center color-primary">
          Do you need help with Design Work<br />
          or a Developer to Code your Site?</h2>
        <p className="text-base my-4 text-center">Let's discuss your project and how I can help you meet your goals.</p>
        <Link className="btn btn-primary d-sm-inline-block m-0-auto align-center mr-2" to="/contact">Let's Talk!</Link>
      </div>
    </Homepage>
  )
}

export default IndexPage
