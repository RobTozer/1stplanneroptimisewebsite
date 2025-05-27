"use client"

import React from "react"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import the Leaflet map component with no SSR to avoid hydration issues
const LeafletMap = dynamic(() => import("@/components/leaflet-map").then((mod) => mod.LeafletMap), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] rounded-lg border border-gray-300 bg-gray-100 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  ),
})

// Fallback component in case of error
const StaticMap = dynamic(() => import("@/components/static-map").then((mod) => mod.StaticMap), {
  ssr: false,
})

export function MapContainer() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[400px] rounded-lg border border-gray-300 bg-gray-100 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      }
    >
      <ErrorBoundary fallback={<StaticMap />}>
        <LeafletMap />
      </ErrorBoundary>
    </Suspense>
  )
}

// Simple error boundary component
class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback: React.ReactNode }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error("Map error:", error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}
