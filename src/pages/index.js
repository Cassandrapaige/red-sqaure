import * as React from "react"
import AnimatedTitle from "../components/animated-title/animated-title.component"
import Seo from "../components/seo"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"

import useObserver from "../hooks/useObserver"

import "../styles/index.styles.scss"
import Carousel from "../components/carousel/carousel.component"

const AnimatedContainer = ({ children }) => {
  const [isVisible, domRef] = useObserver()

  const slideUpAnimation = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        mass: 1,
        damping: 15,
      },
    },
  }

  return (
    <motion.div
      variants={slideUpAnimation}
      initial={isVisible ? "initial" : "animate"}
      animate={isVisible ? "animate" : "initial"}
      ref={domRef}
    >
      {children}
    </motion.div>
  )
}
const SlideContainer = ({ children }) => {
  const [isVisible, domRef] = useObserver()

  const slideInAnimation = {
    initial: {
      opacity: 0,
      x: -30,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
      },
    },
  }

  return (
    <motion.div
      variants={slideInAnimation}
      initial={isVisible ? "initial" : "animate"}
      animate={isVisible ? "animate" : "initial"}
      ref={domRef}
    >
      {children}
    </motion.div>
  )
}

const IndexPage = () => {
  const title = "The agency for what comes next."
  const wordLength = title.split(" ").length
  const timing = 0.3

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
        delay: timing,
        type: "spring",
        mass: 1,
        damping: 15,
      },
    },
  }

  return (
    <motion.div>
      <Seo title="Home" />
      <div className="tagline">
        <AnimatedTitle title={title} wordLength={wordLength} timing={timing} />
      </div>
      <motion.div
        className="image"
        style={{
          margin: `0px -100px`,
        }}
        variants={variants}
      >
        <Carousel data={data.allProjectsJson.nodes} />
      </motion.div>
      <section className="about">
        <AnimatedContainer>
          <h3>
            We deal in ideas, design and media that are category defying. When
            the world Millis, you’ve got to Vanilli.
          </h3>
        </AnimatedContainer>
        <AnimatedContainer>
          <p>
            Red Square believes in rigorous development of brand strategy and
            whip-smart execution. We make all sorts of things. Things that move
            markets, compel audiences and sell product. We help great brands
            create what comes next.
          </p>
        </AnimatedContainer>
      </section>

      <section className="clients">
        <div className="clients--title">
          <h4>Select Clients</h4>
        </div>
        {Object.keys(CLIENT_DATA).map(key => (
          <ul className="clients--list">
            {CLIENT_DATA[key].map(client => (
              <SlideContainer>
                <li>{client}</li>
              </SlideContainer>
            ))}
          </ul>
        ))}
      </section>
    </motion.div>
  )
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

export default IndexPage
