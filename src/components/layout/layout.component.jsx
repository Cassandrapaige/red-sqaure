import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header.component"
import styled, { createGlobalStyle } from "styled-components"

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

  return (
    <div>
      <GlobalStyle />
      <StyledContainer>
        <Header siteTitle={data.site.siteMetadata.title || `Title`} />
        <main>{children}</main>
      </StyledContainer>
    </div>
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
  }
  `

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
