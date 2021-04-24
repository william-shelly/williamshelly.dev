import React from "react"
// import { Link } from "gatsby"
import IntroArea from "../components/intro-area.js"
import Default from "../layouts/default.js"
import BackgroundImage from '../images/thomas-tastet-hSODeSbvzE0-unsplash.jpg'

export default function Javascript() {
    const title = "JavaScript"
    const pageName = title.replaceAll(' ','-').toLowerCase();
    const photoCredit = 'Thomas Tastet';
	const photoLink = 'https://unsplash.com/photos/hSODeSbvzE0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink';
    return (
        <Default>
            <IntroArea title={title} pageName={pageName} photoLink={photoLink} photoCredit={photoCredit} BackgroundImage={BackgroundImage} />
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </Default>
    )
}
