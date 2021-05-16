import * as React from "react"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          title
          slug
          main_img {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.nodes

  return (
    <div>
      <Seo title="Home" />
      {projects.map(project => (
        <div key={project.id}>
          <h1>{project.title}</h1>
          <Img
            fluid={project.main_img.childImageSharp.fluid}
            alt={project.title}
          />
        </div>
      ))}
    </div>
  )
}

export default IndexPage
