import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import { useLocation } from "@reach/router"

import Header from "../header/header.component"
import styled, { createGlobalStyle } from "styled-components"

const Layout = ({ children, ...rest }) => {
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
        duration: 0.5,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <StyledContainer>
      <GlobalStyle />
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
    </StyledContainer>
  )
}

// styles

const StyledContainer = styled.section`
  margin: 0 auto;
  max-width: 1230px;
  padding: 1rem 2rem;
`

// global styles

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      background: #111;
      color: #fefefe;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

  a {
    color: #fefefe;
    text-decoration: none;
  }
  `

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
