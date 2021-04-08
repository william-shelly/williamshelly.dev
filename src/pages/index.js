import * as React from "react"
import { graphql } from 'gatsby'
import Default from '../layouts/default.js'
import SEO from '../components/seo.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles.scss'

// markup
const IndexPage = () => {

  const site="williamshelly.dev"

  return (
    <Default>
      <SEO description="test"></SEO>
      <h1>{site}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Default>
  )
}

export default IndexPage
