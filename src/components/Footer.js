import React from "react"

function Footer() {
    return (
        <div className="footer-container">
            <img className="footer-icon" src={require("../images/twitter-icon.jpg")} alt="Twitter icon"></img>
            <img className="footer-icon" src={require("../images/facebook-icon.jpg")} alt="Facebook icon"></img>
            <img className="footer-icon" src={require("../images/instagram-icon.jpg")} alt="Instagram icon"></img>
            <img className="footer-icon" src={require("../images/github-icon.jpg")} alt="Github icon"></img>
        </div>
    )
}

export default Footer