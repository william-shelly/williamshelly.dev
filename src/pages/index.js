import * as React from "react"
import { graphql } from 'gatsby'
import Default from '../layouts/default.js'

// markup
const IndexPage = () => {

  const site="williamshelly.dev"

  return (
    <Default>
      <h1>{site}</h1>
    </Default>
  )
}

export default IndexPage
