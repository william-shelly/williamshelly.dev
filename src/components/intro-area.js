import React from "react"

export default function IntroArea(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 p-0 intro-area">
                    <div className="text-container p-5 d-flex flex-column justify-content-end justify-content-lg-center align-items-center">
                        <h1 className="text-white">{props.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
