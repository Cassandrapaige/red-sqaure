import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import "./project-header.styles.scss"

const ProjectHeader = ({ isThumbnail, project }) => {
  // animations
  const titleAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  }

  const image = getImage(project.main_img)

  return (
    <article className="project">
      <motion.div className="project--content">
        <div className="project--image">
          <GatsbyImage image={image} alt={project.title} />
        </div>
        <h2
          className="project--title"
          variants={titleAnimation}
          initial="initial"
          animate="animate"
        >
          {project.title}
        </h2>
      </motion.div>
    </article>
  )
}

export default ProjectHeader
