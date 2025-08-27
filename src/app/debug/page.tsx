'use client'

export default function DebugPage() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Debug Information</h1>
      <p><strong>GA Measurement ID:</strong> {gaId || 'NOT SET'}</p>
      <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
      <p><strong>All NEXT_PUBLIC vars:</strong></p>
      <pre>
        {JSON.stringify(
          Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC')).reduce((obj, key) => {
            const value = process.env[key]
            if (value) obj[key] = value
            return obj
          }, {} as Record<string, string>),
          null,
          2
        )}
      </pre>
    </div>
  )
}
