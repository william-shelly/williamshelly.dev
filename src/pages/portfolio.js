import React from "react"
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo.js'
import IntroArea from "../components/intro-area.js"
import PortfolioPreview from '../components/portfolio-preview.js'
import Default from "../layouts/default.js"
import BackgroundImage from '../images/pankaj-patel-ruiU36AR5zo-unsplash.webp'

const Portfolio = ({data}) => {
  const title = "Portfolio"
  const pageName = title.replace(/ /g,'-').toLowerCase();
  const photoCredit = 'Pankaj Patel';
	const photoLink = 'https://unsplash.com/photos/ruiU36AR5zo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink';
  return (
      <Default>
        <SEO title={title}></SEO>
        <IntroArea title={title} pageName={pageName} photoLink={photoLink} photoCredit={photoCredit} BackgroundImage={BackgroundImage} />
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <p className="text-base text-center">Here are a few design projects I've worked on. Want to see more? <Link className="color-primary" to="/contact">Contact me</Link>.</p>

                    <div className="col-12 mb-4">
                      <div className="row">
                        {data.allContentfulPortfolio.edges.map( ({ node, index}) => (
                          <PortfolioPreview key={node.id.toString()} node={node}></PortfolioPreview>
                        ))}
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </Default>
  )
}

export const query = graphql`
query PortfolioQuery {
  allContentfulPortfolio(sort: {fields: order}) {
    edges {
      node {
        id
        title
        order
        logo {
          file {
            url
          }
        }
        logoWidth
        link
        featuredImage {
          file {
            url
          }
          description
          title
        }
        image02 {
          file {
            url
          }
          description
          title
        }
        image03 {
          file {
            url
          }
          description
          title
        }
        image04 {
          file {
            url
          }
          description
          title
        }
        projectDescription {
          projectDescription
        }
      }
    }
  }
}
`
export default Portfolio
