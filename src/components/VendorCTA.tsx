'use client'

import Link from 'next/link'

export default function VendorCTA() {
  return (
    <section className="py-16 px-4 bg-accent-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-4xl font-bold text-primary-500 mb-6 headline-caps tracking-headline">
          Are You a Kombucha Artisan?
        </h2>
        <p className="text-xl text-primary-500 mb-8 font-body leading-relaxed-body">
          Join the festival as a vendor! Share your amazing kombucha creations with hundreds of wellness enthusiasts.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <h3 className="font-headline text-xl font-semibold mb-3 text-primary-500">Perfect for:</h3>
            <ul className="text-primary-500 space-y-2 font-body">
              <li>🍃 Local kombucha breweries</li>
              <li>🥤 Health food artisans</li>
              <li>🌱 Wellness entrepreneurs</li>
              <li>✨ Fermentation enthusiasts</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <h3 className="font-headline text-xl font-semibold mb-3 text-primary-500">Benefits:</h3>
            <ul className="text-primary-500 space-y-2 font-body">
              <li>🎯 Direct customer access</li>
              <li>📈 Brand exposure</li>
              <li>🤝 Networking opportunities</li>
              <li>🌟 Community building</li>
            </ul>
          </div>
        </div>

        <Link 
          href="/vendor-signup"
          className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-headline font-semibold text-lg hover:bg-secondary-600 transition-colors inline-block shadow-md"
        >
          Apply to Be a Vendor
        </Link>
      </div>
    </section>
  )
}
