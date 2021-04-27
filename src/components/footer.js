import React from "react"
import MainNav from "./mainnav.js"

export default function Footer() {
    return (
        <footer className="container-fluid bg-dark">
            <div className="row">
                <div className="col-sm-12 col-lg-8 d-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-center p-4">
                    <MainNav></MainNav>
                </div>
                <div className="col-sm-12 col-lg-2 px-4 py-2 d-flex justify-content-center align-items-center justify-content-lg-end text-white">
                {/* <a href="#0" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a> */}
                {/* <a href="#0" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a> */}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 p-2 pb-3 d-flex justify-content-center align-items-center text-white">
                        &copy; 2021 All Right Reserved.
                    </div>
            </div>
        </footer>
    )
}
