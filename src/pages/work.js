import * as React from "react"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ProjectHeader from "../components/project-header/project-header.component"
import { Link } from "gatsby"

const WorkPage = () => {
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
      <Seo title="Work" />
      {projects.map(project => (
        <Link to={`/work/${project.slug}`} key={project.id}>
          <ProjectHeader project={project} />
        </Link>
      ))}
    </div>
  )
}

export default WorkPage
