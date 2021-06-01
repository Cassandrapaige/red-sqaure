import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
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
    </motion.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
