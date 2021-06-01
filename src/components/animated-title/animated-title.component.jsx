import React from "react"
import { motion } from "framer-motion"
import "./animated-title.styles.scss"

const AnimatedTitle = ({ timing, title, wordLength }) => {
  const containerAnimation = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: timing,
        when: "afterChildren",
        type: "spring",
        mass: 1,
        damping: 15,
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
    <div>
      <motion.h2
        className="animated-title"
        variants={containerAnimation}
        initial="initial"
        animate="animate"
      >
        {title.split(" ").map((word, index) => (
          <>
            <motion.span variants={textAnimation}>{word}</motion.span>
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </motion.h2>
    </div>
  )
}

export default AnimatedTitle
