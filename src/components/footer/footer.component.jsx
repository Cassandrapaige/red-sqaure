import React from "react"
import "./footer.styles.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <div className="contact--email">
          <h1 className="title">
            Let's talk.
            <br />
            <a href="mailto:hi@rsq.com">hi@rsq.com</a>
          </h1>
        </div>
        <div className="contact--info">
          <ul className="social-links">
            <li>
              <FontAwesomeIcon icon={faInstagram} width="0" />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} width="0" />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} width="0" />
            </li>
          </ul>
          <ul className="locations">
            <li>Mobile, AL</li>
            <li>Chicago, IL</li>
            <li>Tulsa, OK</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
