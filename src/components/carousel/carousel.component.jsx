import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useCarousel from "../../hooks/useCarousel"
import "./carousel.styles.scss"

const Carousel = ({ data }) => {
  const activeLink = useCarousel(data, 300)
  const image = getImage(data[activeLink].main_img)
  return (
    <div className="carousel">
      <GatsbyImage image={image} alt="image" />
    </div>
  )
}

export default Carousel
