import React from 'react'
import IntroArea from "../components/intro-area.js"
import Default from '../layouts/default.js'
import SEO from '../components/seo.js'
import BackgroundImage from '../images/alexander-sinn-KgLtFCgfC28-unsplash.jpg'

export default function Contact() {
    const title = "Contact"
    const headline = "Let's Talk!"
    const buttonLabel = "Send Message"
    const pageContent = "Ready to start your next project? Contact me and I will get back with you to discuss."
    const pageName = title.replace(/ /g,'-').toLowerCase();
    const photoCredit = 'Alexander Sinn';
	const photoLink = 'https://unsplash.com/photos/KgLtFCgfC28?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink';
    return (
        <Default>
            <SEO title={title}></SEO>
            <IntroArea title={headline} pageName={pageName} photoLink={photoLink} photoCredit={photoCredit} BackgroundImage={BackgroundImage} />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        <p className="text-base text-center">{pageContent}</p>

                        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/thankyou">
                            <input type="hidden" name="form-name" value="contact" />
                            <div class="hidden">
                                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" id="first_name" name="first_name" className="form-control" placeholder="Joe" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" id="last_name" name="last_name" className="form-control" placeholder="Smith" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email_address">Email</label>
                                <input type="email" name="email_address" id="email_address" className="form-control" placeholder="you@email.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telephone_number">Phone Number</label>
                                <input type="tel" name="telephone_number" id="telephone_number" className="form-control" placeholder="333-555-7777" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" className="form-control" rows="10" required></textarea>
                            </div>

                            <div className="button-container text-right">
                                <button className="btn btn-primary d-sm-inline-block m-0-auto align-center mr-2" type="submit">{buttonLabel}</button>
                                <input className="btn btn-primary d-sm-inline-block m-0-auto align-center" type="reset" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Default>
    )
}
