import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
// import logo from '../img/williamshelly.dev-logo-white.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons'


export default function Default({children}) {
	return (
		<>
			<div className="wrapper">
				<div className="wrapper-inside">
					<Header></Header>

					<div className="container-fluid px-0">
						{children}
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	)
}
