"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function VideoUpload() {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [videoUrl, setVideoUrl] = useState("")
  const [error, setError] = useState("")

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const file = formData.get("video") as File

    if (!file) {
      setError("Please select a video file")
      return
    }

    if (file.size > 100 * 1024 * 1024) {
      // 100MB limit
      setError("File size must be under 100MB")
      return
    }

    setUploading(true)
    setError("")
    setProgress(0)

    try {
      const response = await fetch("/api/upload-video", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const data = await response.json()
      setVideoUrl(data.url)
      setProgress(100)
    } catch (err) {
      setError("Upload failed. Please try again.")
      console.error(err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Upload Video to Vercel Blob</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label htmlFor="video" className="block text-sm font-medium mb-2">
                Select Video File (Max 100MB)
              </label>
              <input
                type="file"
                id="video"
                name="video"
                accept="video/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                disabled={uploading}
              />
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            {uploading && (
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Uploading...</div>
                <Progress value={progress} className="w-full" />
              </div>
            )}

            {videoUrl && (
              <div className="space-y-2">
                <div className="text-green-600 text-sm">Upload successful!</div>
                <div className="text-xs text-gray-500 break-all">URL: {videoUrl}</div>
                <video controls className="w-full max-w-md">
                  <source src={videoUrl} type="video/mp4" />
                </video>
              </div>
            )}

            <Button type="submit" disabled={uploading} className="w-full">
              {uploading ? "Uploading..." : "Upload Video"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
