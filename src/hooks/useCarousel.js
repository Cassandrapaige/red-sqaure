import { useState, useEffect } from "react"

const useCarousel = (slides, time) => {
  const [activeLink, setActiveLink] = useState(0)

  useEffect(() => {
    const next = (activeLink + 1) % slides.length
    const slider = setTimeout(() => setActiveLink(next), time)
    return () => clearTimeout(slider)
  }, [activeLink])

  return activeLink
}

export default useCarousel
