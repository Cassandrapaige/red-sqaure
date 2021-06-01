import React from "react"
import "./footer.styles.scss"
import { motion } from "framer-motion"

import useObserver from "../../hooks/useObserver"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const AnimatedContainer = ({ children }) => {
    const [isVisible, domRef] = useObserver()

    const slideUpAnimation = {
      initial: {
        y: 50,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
        },
      },
    }

    return (
      <motion.div
        variants={slideUpAnimation}
        initial={isVisible ? "initial" : "animate"}
        animate={isVisible ? "animate" : "initial"}
        ref={domRef}
        style={{
          opacity: 0,
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <footer>
      <AnimatedContainer>
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
      </AnimatedContainer>
    </footer>
  )
}

export default Footer
