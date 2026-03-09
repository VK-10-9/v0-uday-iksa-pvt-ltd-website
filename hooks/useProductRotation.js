"use client"

import { useState, useEffect } from "react"

export function useProductRotation(productsLength, interval = 4000) {
  const [activeProduct, setActiveProduct] = useState(0)

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % productsLength)
    }, interval)

    return () => clearInterval(rotationInterval)
  }, [productsLength, interval])

  return [activeProduct, setActiveProduct]
}
