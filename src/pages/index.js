import * as React from "react"
import AnimatedTitle from "../components/animated-title/animated-title.component"
import Seo from "../components/seo"
import { motion } from "framer-motion"

const IndexPage = () => {
  return (
    <motion.div>
      <Seo title="Home" />
      <AnimatedTitle title="The agency for what comes next." />
    </motion.div>
  )
}

export default IndexPage
