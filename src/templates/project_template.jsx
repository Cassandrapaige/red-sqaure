import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import ProjectHeader from "../components/project-header/project-header.component"

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
        project => project.slug === path && <ProjectHeader project={project} />
      )}
    </div>
  )
}

export default Project
