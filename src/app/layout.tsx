import type { Metadata } from 'next'
import GoogleAnalytics from '../components/GoogleAnalytics'
import './globals.css'

export const metadata: Metadata = {
  title: 'Miami Kombucha Festival',
  description: 'Join us for the ultimate kombucha celebration in South Florida! Discover local vendors, taste amazing flavors, and connect with the kombucha community.',
  keywords: 'kombucha, festival, Miami, South Florida, vendors, health, probiotics',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en">
      <head>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}
