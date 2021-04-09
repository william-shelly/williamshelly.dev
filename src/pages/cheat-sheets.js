import React from "react"
import { Link } from "gatsby"
import Default from "../layouts/default.js"

export default function Cheatsheets() {
    return (
        <Default>
            <div className="container-fluid intro-area-container">
                <div className="row">
                    <div className="col-sm-12 p-0 drop-area">
                        <div className="text-container p-5 d-flex flex-column justify-content-end justify-content-lg-center align-items-center">
                            <p className="d-none d-lg-block text-center text-white text-shadow">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1>Code Cheat Sheets</h1>
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
