import * as React from "react"
import AnimatedTitle from "../components/animated-title/animated-title.component"
import Seo from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "@reach/router"

const IndexPage = () => {
  const title = "The agency for what comes next.",
    wordLength = title.split(" ").length

  const { pathname } = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={pathname}>
        <Seo title="Home" />
        <AnimatedTitle title={title} wordLength={wordLength} />
      </motion.div>
    </AnimatePresence>
  )
}

export default IndexPage
