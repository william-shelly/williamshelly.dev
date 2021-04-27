import * as React from "react"
import IntroArea from "../components/intro-area.js"
import Default from "../layouts/default.js"
import { Link } from "gatsby"
import BackgroundImage from '../images/markus-spiske-PsRUMc7vilg-unsplash.jpg'

// markup
const NotFoundPage = () => {
  const title = "Page not found"
  const pageName = title.replace(/ /g,'-').toLowerCase();
  const photoCredit = "Markus Spiske";
  const photoLink = "https://unsplash.com/photos/PsRUMc7vilg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink";

  return (
    <Default>
        <IntroArea title={title} pageName={pageName} photoLink={photoLink} photoCredit={photoCredit} BackgroundImage={BackgroundImage} />
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <p className="text-base">Sorry{" "}
                      <span role="img" aria-label="Pensive emoji">
                        😔
                      </span>{" "}
                      &nbsp; we couldn’t find what you were looking for.</p>

                    <p className="text-base"><Link className="btn btn-primary" to="/">Back to Homepage</Link>.</p>
                </div>
            </div>
        </div>
    </Default>
  )
}

export default NotFoundPage
