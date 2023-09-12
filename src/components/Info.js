import React from "react"

function Info() {
    return (
        <div className="info-container">
            <img className="info-image" src={require("../images/profile-pic-one.jpg")}
                alt="Gabe Hollifield"></img>
            <h2>Gabe Hollifield</h2>
            <h3>Frontend Developer</h3>
            <a href="https://gabholli.github.io">gabholli.github.io</a>
            <div className="links">
                <a className="email-link" href="mailto:gholl467@gmail.com"><img src={require("../images/mail.jpg")} alt="Small email logo"></img>Email</a>
                <a className="linkedin-link" href="https://www.linkedin.com/in/gabe-hollifield">
                    <img className="linkedin-logo"
                        src={require("../images/linkedin-logo.png")} alt="Small LinkedIn logo"></img>LinkedIn</a>
            </div>
        </div>
    )
}

export default Info