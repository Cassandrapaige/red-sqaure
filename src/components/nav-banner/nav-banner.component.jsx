import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./nav-banner.scss"
import NavLink from "../nav-link/nav-link.component"

const NavBanner = ({ image }) => {
  return (
    <div className="banner">
      <GatsbyImage image={image} alt="image" />
      <div className="banner--content">
        <h2>All Projects</h2>
        <NavLink link="/work" text="work" />
      </div>
    </div>
  )
}

export default NavBanner
