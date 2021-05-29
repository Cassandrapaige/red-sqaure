import React from "react"
import { motion } from "framer-motion"
import "./animated-title.styles.scss"

const AnimatedTitle = ({ title, wordLength }) => {
  const delay = 0.3

  const containerAnimation = {
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

  return (
    <motion.div variants={wrapperAnimation}>
      <motion.h2
        className="animated-title"
        variants={containerAnimation}
        initial="initial"
        animate="animate"
      >
        {title.split(" ").map(word => (
          <motion.span variants={textAnimation}>{word}</motion.span>
        ))}
      </motion.h2>
    </motion.div>
  )
}

export default AnimatedTitle
