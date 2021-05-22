import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { StyledTitle } from "./animated-title.styles"
import { useLocation } from "@reach/router"

const AnimatedTitle = ({ title }) => {
  const { pathname } = useLocation()
  const delay = 0.3,
    wordLength = title.split(" ").length

  const containerAnimations = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  }

  const textAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  const wrapperAnimation = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        delay: wordLength * delay,
      },
    },
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div variants={wrapperAnimation}>
        <StyledTitle
          variants={containerAnimations}
          initial="initial"
          animate="animate"
          exit="exit"
          key={pathname}
        >
          {title.split(" ").map(word => (
            <motion.span variants={textAnimation}>{word}</motion.span>
          ))}
        </StyledTitle>
      </motion.div>
    </AnimatePresence>
  )
}

export default AnimatedTitle
