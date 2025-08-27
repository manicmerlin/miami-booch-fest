'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  gaId: string
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  // Debug: Log to verify GA ID is being passed
  console.log('Google Analytics ID:', gaId)
  
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          console.log('Google Analytics script loading for ID: ${gaId}');
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
          console.log('Google Analytics configured successfully');
        `}
      </Script>
    </>
  )
}
