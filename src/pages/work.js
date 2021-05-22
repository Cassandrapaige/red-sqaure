import * as React from "react"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import ProjectHeader from "../components/project-header/project-header.component"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const WorkPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
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
    }
  `)

  const projects = data.allProjectsJson.nodes

  return (
    <motion.div>
      <Seo title="Work" />
      {projects.map(project => (
        <Link to={`/work/${project.slug}`} key={project.id}>
          <ProjectHeader isThumbnail project={project} />
        </Link>
      ))}
    </motion.div>
  )
}

export default WorkPage
