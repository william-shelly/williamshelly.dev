import React from "react"
import { Link } from "gatsby"

export default function MainNav() {
    return (
			<ul className="main-nav text-lg-left">
				<li><Link to="/about" className="">About</Link></li>
				<li><Link to="/portfolio" className="">Portfolio</Link></li>
				<li><Link to="/cheat-sheets" className="">Cheat Sheets</Link></li>
				<li><Link to="/links" className="">Links</Link></li>
				<li><Link to="/contact" className="">Contact</Link></li>
			</ul>
    )
}
