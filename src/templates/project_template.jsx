import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectHeader from "../components/project-header/project-header.component"
import { motion } from "framer-motion"

const Project = ({ data: { projectsJson: project }, pageContext }) => {
  const {
    slug,
    next: { title: nextTitle, slug: nextSlug },
  } = pageContext

  return (
    <motion.div>
      <ProjectHeader project={project} key={project.id} />
    </motion.div>
  )
}

export default Project

export const query = graphql`
  query GetAllProjects($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
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
`
