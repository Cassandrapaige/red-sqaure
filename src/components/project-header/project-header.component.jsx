import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  StyledProjectContainer,
  StyledProjectContent,
  StyledTitle,
  StyledImageContainer,
} from "./project-header.styles"

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
    <StyledProjectContainer initial="rest" whileHover="hover" animate="rest">
      <StyledProjectContent>
        <StyledImageContainer variants={isThumbnail && hoverAnimation}>
          <GatsbyImage image={image} alt={project.title} />
        </StyledImageContainer>
        <StyledTitle
          variants={titleAnimation}
          initial="initial"
          animate="animate"
        >
          {project.title}
        </StyledTitle>
      </StyledProjectContent>
    </StyledProjectContainer>
  )
}

export default ProjectHeader
