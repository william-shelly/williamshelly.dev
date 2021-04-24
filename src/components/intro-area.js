import React from "react"

export default function IntroArea(props) {
	return (
		<div className={props.pageName + '-intro-area-container intro-area-container container-fluid'}>
			<div className="row">
				<div className={'intro-area col-sm-12 p-0'} style={{ backgroundImage: `url(${props.BackgroundImage})` }}>
					<div className="text-container p-5 d-flex flex-column justify-content-center align-items-center">
						<h1 className="text-white">{props.title}</h1>
						<div className="photo-credit background-color-primary p-3">
						<a className="text-white" href={props.photoLink} target="_blank" rel="noopener noreferrer">Thank you <strong>{props.photoCredit}</strong>! For such a wonderful photo!</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
