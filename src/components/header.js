import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import atW from '../images/atW.svg'
import MainNav from "../components/mainnav.js"

export default function Header() {
    return (
		<header>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="/"><img src={atW} atl="williamshelly.dev W logo" style={{width: "1.75rem", height: "auto"}} /></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<MainNav></MainNav>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
    )
}
