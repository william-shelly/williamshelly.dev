import React from "react"
import MainNav from "../components/mainnav.js"

export default function Header() {
    return (
        <header className="container-fluid position-absolute bg-gray-gradient-70-to-0 top-0">
            <div className="row ml-4 mr-4">
                    <div className="col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-start align-items-center p-4">
                        {/* <img src={logo} className="logo" alt="williamshelly.dev Restaurant" width="298" height="137" /> */}
                    </div>
                    <div className="col-sm-12 col-lg-8 px-4 py-2 d-flex justify-content-center justify-content-lg-end align-items-center">
                        <MainNav></MainNav>
                    </div>
                </div>
        </header>
    )
}
