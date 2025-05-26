"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Check, AlertCircle } from "lucide-react"
import { parseKML } from "@/lib/kml-parser"

interface KMLUploaderProps {
  onKMLLoaded: (data: any) => void
  className?: string
}

export function KMLUploader({ onKMLLoaded, className = "" }: KMLUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setUploadSuccess(false)
    setUploadError(null)

    try {
      // Check if it's a KML file
      if (!file.name.toLowerCase().endsWith(".kml")) {
        throw new Error("Please upload a valid KML file")
      }

      const fileContent = await file.text()
      const kmlData = await parseKML(fileContent)

      onKMLLoaded(kmlData)
      setUploadSuccess(true)
    } catch (error) {
      console.error("Error parsing KML file:", error)
      setUploadError(error instanceof Error ? error.message : "Failed to parse KML file")
    } finally {
      setIsUploading(false)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={`${className}`}>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".kml" className="hidden" />

      <div className="flex items-center gap-2">
        {uploadSuccess && (
          <div className="flex items-center text-green-600 text-sm">
            <Check className="h-4 w-4 mr-1" />
            KML loaded successfully
          </div>
        )}

        {uploadError && (
          <div className="flex items-center text-red-600 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {uploadError}
          </div>
        )}
      </div>
    </div>
  )
}
