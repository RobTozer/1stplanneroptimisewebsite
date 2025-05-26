"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ZoomIn } from "lucide-react"

interface ImageMagnifierProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  magnifierSize?: number
  magnificationLevel?: number
}

export function ImageMagnifier({
  src,
  alt,
  width,
  height,
  className = "",
  magnifierSize = 150,
  magnificationLevel = 2,
}: ImageMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 })
  const [touchActive, setTouchActive] = useState(false)
  const [fullscreenMode, setFullscreenMode] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const { left, top, width, height } = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setMagnifierPosition({ x, y })
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!imageRef.current || !touchActive) return

    const touch = e.touches[0]
    const { left, top, width, height } = imageRef.current.getBoundingClientRect()
    const x = ((touch.clientX - left) / width) * 100
    const y = ((touch.clientY - top) / height) * 100

    setMagnifierPosition({ x, y })
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchActive(true)
    handleTouchMove(e)
  }

  const handleTouchEnd = () => {
    setTouchActive(false)
    setShowMagnifier(false)
  }

  const toggleFullscreen = () => {
    setFullscreenMode(!fullscreenMode)
    if (!fullscreenMode) {
      setShowMagnifier(false)
    }
  }

  // Close fullscreen when ESC is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullscreenMode) {
        setFullscreenMode(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [fullscreenMode])

  return (
    <>
      <div className="relative group">
        <div
          ref={imageRef}
          className={`relative cursor-zoom-in ${className}`}
          onMouseEnter={() => setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className="w-full h-auto rounded-lg border border-black"
            style={{ width: width || "100%", height: height || "auto" }}
          />

          <button
            onClick={toggleFullscreen}
            className="absolute top-2 right-2 bg-white/80 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="View full size"
          >
            <ZoomIn className="h-5 w-5 text-gray-700" />
          </button>

          {showMagnifier && !fullscreenMode && (
            <div
              className="absolute pointer-events-none border-2 border-blue-500 bg-white rounded-full shadow-[3px_4px_10px_rgba(0,0,0,0.3)] overflow-hidden z-10"
              style={{
                width: `${magnifierSize}px`,
                height: `${magnifierSize}px`,
                top: `${Math.min(Math.max(0, magnifierPosition.y - (magnifierSize / 200) * 100), 100 - (magnifierSize / 100) * 100)}%`,
                left: `${Math.min(Math.max(0, magnifierPosition.x - (magnifierSize / 200) * 100), 100 - (magnifierSize / 100) * 100)}%`,
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundPosition: `${magnifierPosition.x}% ${magnifierPosition.y}%`,
                  backgroundSize: `${magnificationLevel * 100}%`,
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          )}
        </div>
        <div className="absolute bottom-2 left-2 bg-white/80 px-2 py-1 rounded text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
          Hover to zoom, click for fullscreen
        </div>
      </div>

      {fullscreenMode && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={toggleFullscreen}>
          <button
            className="absolute top-4 right-4 text-white bg-gray-800/50 p-2 rounded-full"
            onClick={toggleFullscreen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-w-full max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={src || "/placeholder.svg"}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-black shadow-[10px_12px_20px_rgba(0,0,0,0.35)]"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-3 py-1 rounded-full text-sm">
            Press ESC or click outside to close
          </div>
        </div>
      )}
    </>
  )
}
