import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./nav-banner.scss"

const NavBanner = ({ image }) => {
  return (
    <div className="banner">
      <GatsbyImage image={image} alt="image" />
      <div className="banner--content">
        <h2>All Projects</h2>
        <Link to="/">Work</Link>
      </div>
    </div>
  )
}

export default NavBanner
