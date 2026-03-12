"use client"

import { useState, useEffect } from "react"

export function useProductRotation(productsLength, interval = 4000) {
  const [activeProduct, setActiveProduct] = useState(0)
  const [isRotating, setIsRotating] = useState(true)

  useEffect(() => {
    if (!isRotating) return

    const rotationInterval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % productsLength)
    }, interval)

    return () => clearInterval(rotationInterval)
  }, [productsLength, interval, isRotating])

  const handleManualSelect = (index) => {
    setActiveProduct(index)
    setIsRotating(false)
  }

  return [activeProduct, handleManualSelect]
}
