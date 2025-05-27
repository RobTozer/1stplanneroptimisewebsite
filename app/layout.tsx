import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "1st Planner - School Estate Efficiency & Funding Identification",
  description:
    "We support education providers to create high quality school places for their pupils, without over spending against their capital and revenue budgets.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="flex flex-col min-h-screen items-center">
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.history.scrollRestoration = "manual";
  document.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
  });
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
`,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="w-full">
            <Header />
            <main className="flex-grow w-full">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
