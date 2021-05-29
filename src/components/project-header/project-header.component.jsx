import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./project-header.styles.scss"
import { motion } from "framer-motion"

const ProjectHeader = ({ isThumbnail, project }) => {
  // animations
  const hoverAnimation = {
    rest: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      scale: 0.98,
      opacity: 0.3,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      },
    },
  }

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
    <article
      className="project"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div className="project--container">
        <motion.div
          className="project--image"
          variants={isThumbnail && hoverAnimation}
        >
          <GatsbyImage image={image} alt={project.title} />
        </motion.div>
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
