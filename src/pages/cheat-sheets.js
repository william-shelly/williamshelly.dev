import React from "react"
import { Link } from "gatsby"
import IntroArea from "../components/intro-area.js"
import Default from "../layouts/default.js"

export default function Cheatsheets() {
    const title = "Cheat Sheets"
    return (
        <Default>
            <IntroArea title={title}></IntroArea>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <p>My little repository for code snippets or little reminders for how I got stuff to work.</p>

                        <ul>
                            <li>
                                <Link to="../css">CSS</Link>
                            </li>
                            <li>
                                <Link to="../git">Git</Link>
                            </li>
                            <li>
                                <Link to="../gatsby">Gatsby</Link>
                            </li>
                            <li>
                                <Link to="../javascript">JavaScript</Link>
                            </li>
                            <li>
                                <Link to="../react">React</Link>
                            </li>
                            <li>
                                <Link to="../swift-ui">SwiftUI</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Default>
    )
}
