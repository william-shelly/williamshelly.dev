import React from "react"
import { Link } from "gatsby"

export default function MainNav() {
    return (
        <ul className="main-nav text-center text-lg-left">
            <li><Link to="/" className="">Home</Link></li>
            <li><Link to="/about" className="">About</Link></li>
            <li><a href="/portfolio" className="">Portfolio</a></li>
            <li><a href="/cheat-sheets" className="">Cheat Sheets</a></li>
            <li><a href="/links" className="">Links</a></li>
            <li><a href="/contact" className="">Contact</a></li>
        </ul>
    )
}
