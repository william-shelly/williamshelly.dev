import React from "react"
import { graphql } from 'gatsby'
import IntroArea from "../components/intro-area.js"
import PortfolioPreview from '../components/portfolio-preview.js'
// import { Link } from "gatsby"
import Default from "../layouts/default.js"

const Portfolio = ({data}) => {
  const title = "Portfolio"
  return (
      <Default>
        <IntroArea title={title}></IntroArea>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    {data.allContentfulPortfolio.edges.map( ({ node, index}) => (
                    <PortfolioPreview node={node}></PortfolioPreview>
                    ))}

                </div>
            </div>
        </div>
      </Default>
  )
}

export const query = graphql`
  query PortfolioQuery {
    allContentfulPortfolio {
      edges {
        node {
          featuredImage {
            file {
              url
            }
            description
          }
          title
          logo {
            file {
              url
            }
            id
          }
          link
          logoWidth
        }
      }
    }
  }
`
export default Portfolio
