import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "@reach/router"
import { getImage } from "gatsby-plugin-image"

//styles
import "../../styles/global.styles.scss"
import "./layout.styles.scss"

import Header from "../header/header.component"
import Footer from "../footer/footer.component"
import NavBanner from "../nav-banner/nav-banner.component"

const Layout = ({ children, project }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      projectsJson(slug: { eq: "flipboard" }) {
        title
        slug
        id
        main_img {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  const { pathname } = useLocation()

  const animations = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  }

  const image = getImage(data.projectsJson.main_img)

  return (
    <motion.div className="container">
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animations}
          key={pathname}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      {pathname === "/" && <NavBanner image={image} />}
    </motion.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
