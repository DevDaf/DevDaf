import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Dafina Gashi \u2014 Frontend Developer",
  description:
    "Frontend developer specializing in building modern web applications and e-commerce experiences with Next.js, React, and Tailwind CSS.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#050505",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${_inter.variable} ${_jetbrainsMono.variable}`}>
      <body className="scanline-overlay noise-overlay font-sans antialiased">{children}</body>
    </html>
  )
}
