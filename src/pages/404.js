import * as React from "react"
import IntroArea from "../components/intro-area.js"
import Default from "../layouts/default.js"
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  const title = "Page not found"
  return (
    <Default>
        <IntroArea title={title}></IntroArea>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <p>Sorry{" "}
                      <span role="img" aria-label="Pensive emoji">
                        😔
                      </span>{" "}
                      &nbsp; we couldn’t find what you were looking for.</p>

                    <p><Link to="/">Back to Homepage</Link>.</p>
                </div>
            </div>
        </div>
    </Default>
  )
}

export default NotFoundPage
