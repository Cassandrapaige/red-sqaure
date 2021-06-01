import { useEffect, useState, useRef } from "react"

const useObserver = () => {
  const domRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let currentRef = domRef.current

    const observer = new IntersectionObserver(targetNodes => {
      targetNodes.forEach(node => setIsVisible(node.isIntersecting))
    })
    observer.observe(currentRef)
    return () => observer.unobserve(currentRef)
  }, [isVisible])

  return [isVisible, domRef]
}

export default useObserver
