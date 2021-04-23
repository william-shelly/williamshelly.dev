import React from "react"
import { graphql } from 'gatsby'
import SEO from '../components/seo.js'
import IntroArea from "../components/intro-area.js"
import PortfolioPreview from '../components/portfolio-preview.js'
import Default from "../layouts/default.js"

const Portfolio = ({data}) => {
  const title = "Portfolio"
  return (
      <Default>
        <SEO title={title}></SEO>
        <IntroArea title={title}></IntroArea>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

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
      }
    }
  }
}
`
export default Portfolio
