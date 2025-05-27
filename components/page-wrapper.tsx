import type React from "react"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return <div className={`w-full mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}
