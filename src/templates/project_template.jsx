import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useLocation } from "@reach/router"
import styled from "styled-components"

const Project = () => {
  const location = useLocation()
  const params = location.pathname.split("/")
  const path = params[params.length - 1]

  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          title
          slug
          main_img {
            childImageSharp {
              fluid(maxWidth: 300) {
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
      {projects.map(
        project =>
          project.slug === path && (
            <div>
              <h1>{project.title}</h1>
              <Img
                fluid={project.main_img.childImageSharp.fluid}
                alt={project.title}
              />
            </div>
          )
      )}
    </div>
  )
}

export default Project
