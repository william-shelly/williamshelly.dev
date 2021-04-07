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
    </Default>
  )
}

export default IndexPage
