import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './main.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "GridGen",
  description: "Grid Generator",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  )
}
