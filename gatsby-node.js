const path = require("path")


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queryResults = await graphql(`
    query PortfolioQuery {
        allContentfulPortfolio {
            nodes {
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
  `)

  const productTemplate = path.resolve(`src/templates/portfolio.js`)
  queryResults.data.allContentfulPortfolio.nodes.forEach(node => {
    createPage({
      path: `/portfolio/${node.id}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        pageContent: node,
      },
    })
  })
}
