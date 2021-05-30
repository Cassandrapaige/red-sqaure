import * as React from "react"
import AnimatedTitle from "../components/animated-title/animated-title.component"
import Seo from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "@reach/router"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/index.styles.scss"

const IndexPage = () => {
  const title = "The agency for what comes next."
  const wordLength = title.split(" ").length
  const delay = 0.3

  const { pathname } = useLocation()

  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: (wordLength - 1) * delay,
        type: "spring",
        bounce: 0.25,
        mass: 0.25,
      },
    },
  }

  const CLIENT_DATA = {
    0: [
      "Cedars-Sinai",
      "Cherokee Casinos",
      "Flipboard",
      "Foxwoods",
      "Glanbia Nutritionals",
      "Google",
      "Hard Rock",
      "Hibbett Sports",
      "Hilton Worldwide",
    ],
    1: [
      "Jack Daniel's",
      "Nescafe",
      "New York Pride",
      "Rivers Casino",
      "Snickers",
      "Southern Comfort",
      "Uniti Fiber",
      "The University of Alabama",
      "Wind Creek Hospitality",
    ],
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={pathname}>
        <Seo title="Home" />
        <AnimatedTitle title={title} wordLength={wordLength} delay={delay} />
        <motion.div
          className="image"
          style={{
            margin: `60px -100px`,
          }}
          variants={variants}
        >
          <StaticImage src="../images/flipboard/flipboard0.jpeg" alt="image" />
        </motion.div>
        <section className="about">
          <h3 className="">
            We deal in ideas, design and media that are category defying. When
            the world Millis, you’ve got to Vanilli.
          </h3>
          <p>
            Red Square believes in rigorous development of brand strategy and
            whip-smart execution. We make all sorts of things. Things that move
            markets, compel audiences and sell product. We help great brands
            create what comes next.
          </p>
        </section>

        <section className="clients">
          <div className="clients--title">
            <h3>Select Clients</h3>
          </div>
          {Object.keys(CLIENT_DATA).map(key => (
            <ul className="clients--list">
              {CLIENT_DATA[key].map(client => (
                <li>{client}</li>
              ))}
            </ul>
          ))}
        </section>
      </motion.div>
    </AnimatePresence>
  )
}

export default IndexPage
