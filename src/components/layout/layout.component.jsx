import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import { useLocation } from "@reach/router"

//styles
import "../../styles/global.styles.scss"
import "./layout.styles.scss"

import Header from "../header/header.component"
import Footer from "../footer/footer.component"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { pathname } = useLocation()

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
      },
    },
  }

  return (
    <motion.div className="container">
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <motion.main
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.main>
      <Footer />
    </motion.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
