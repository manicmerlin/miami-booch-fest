'use client'

const kombuchaData = {
  'Brewers (South Florida)': [
    {
      name: "Counter Culture Kombucha",
      location: "Homestead, FL",
      description: "Dedicated to sustainability, operating out of Redland Community Farm & Market. Found at local cafes like Myapapaya Juicery + Kitchen (Fort Lauderdale).",
      website: "http://drinkliveculture.com",
      instagram: "https://www.instagram.com/drinkliveculture",
      facebook: null
    },
    {
      name: "Radiate Kombucha",
      location: "Miami, FL",
      description: "Women-owned brand with a unique triple-fermentation process, available in cans and kegs. Flavors include Pina Caliente, Flower Power, and Pollinator.",
      website: "https://radiate.online",
      instagram: "https://www.instagram.com/radiatebooch",
      facebook: "https://www.facebook.com/radiatebooch"
    },
    {
      name: "Brewing Life Kombucha",
      location: "Miami, FL",
      description: "Offers 15+ creative flavors with local delivery across Miami-Dade & Broward. Found at Coconut Grove Organic Market (Saturdays) and Pinecrest Gardens Farmers Market (Sundays).",
      website: "https://brewinglifemiami.com",
      instagram: "https://www.instagram.com/brewinglifemiami",
      facebook: null
    },
    {
      name: "Angry Booch Kombucha",
      location: "16936 S Dixie Hwy, Miami (Palmetto Bay), FL 33157",
      description: "Small-batch kombucha brewer with a taproom and local ferments. Found weekly at Legion Park Farmers Market (Miami).",
      website: "http://www.angrybooch.com",
      instagram: "https://www.instagram.com/angrybooch",
      facebook: "https://www.facebook.com/angrybooch"
    },
    {
      name: "Betta Bucha",
      location: "Miami Beach, FL",
      description: "Boutique kombucha brewer crafting creative blends for local markets and cafes.",
      website: null,
      instagram: "https://www.instagram.com/bettabucha",
      facebook: null
    },
    {
      name: "Mucha Bucha",
      location: "Miami Beach, FL",
      description: "Local kombucha brand focusing on tropical-inspired ferments.",
      website: null,
      instagram: "https://www.instagram.com/muchabucha",
      facebook: null
    },
    {
      name: "Scobucha – The Kombucha Tea",
      location: "Fort Lauderdale, FL",
      description: "Kombucha company specializing in traditional brewing methods with a modern twist.",
      website: null,
      instagram: "https://www.instagram.com/scobucha",
      facebook: null
    },
    {
      name: "Kombucha Cocktails",
      location: "West Palm Beach, FL",
      description: "Ready-to-drink kombucha-based cocktails blending booch culture with mixology.",
      website: null,
      instagram: "https://www.instagram.com/kombuchacocktails",
      facebook: "https://www.facebook.com/kombuchacocktails"
    },
    {
      name: "Tealixir Herbal Kombucha",
      location: "West Palm Beach, FL",
      description: "Founded 2014, blending teas and medicinal herbs, canned for wide distribution. Once Florida's largest kombucha brewery; sold nationwide via Amazon.",
      website: "http://www.tealixirkombucha.com",
      instagram: "https://www.instagram.com/tealixirkombucha",
      facebook: "https://www.facebook.com/tealixirkombucha"
    },
    {
      name: "Pure Gold Kombucha",
      location: "West Palm Beach, FL",
      description: "Small-batch kombucha available at local markets. Regular vendor at the West Palm Beach GreenMarket and Royal Palm Beach Green Market.",
      website: null,
      instagram: "https://www.instagram.com/puregoldkombucha",
      facebook: null
    }
  ],
  'Brewers (Florida West Coast)': [
    {
      name: "Flying Eagle Kombucha",
      location: "Fort Myers, FL",
      description: "Southwest Florida's first kombucha brewery (est. 2019), known for small-batch cans and community events.",
      website: "https://www.flyingeaglekombucha.com",
      instagram: "https://www.instagram.com/flyingeaglekombucha",
      facebook: "https://www.facebook.com/flyingeaglekombucha"
    },
    {
      name: "I Booch U Kombucha",
      location: "Fort Myers, FL",
      description: "Small local kombucha brand with seasonal flavors and local market presence.",
      website: null,
      instagram: "https://www.instagram.com/iboochu",
      facebook: "https://www.facebook.com/iboochu"
    },
    {
      name: "Kombucha 221 BC",
      location: "Sarasota, FL",
      description: "Founded 2014, offering bottled kombucha in multiple flavors and widely available on draft.",
      website: "https://www.kombucha221bc.com",
      instagram: "https://www.instagram.com/kombucha221bc",
      facebook: "https://www.facebook.com/kombucha221bc"
    },
    {
      name: "Mother Kombucha",
      location: "St. Petersburg, FL",
      description: "Leading Florida kombucha brand with distribution in Whole Foods and Publix statewide.",
      website: "https://www.motherkombucha.com",
      instagram: "https://www.instagram.com/mother_kombucha",
      facebook: "https://www.facebook.com/motherkombucha"
    },
    {
      name: "Boombacha Kombucha",
      location: "Sarasota, FL",
      description: "Launched 2018, craft kombucha brewery with fun branding and four core flavors.",
      website: "https://www.boombacha.com",
      instagram: "https://www.instagram.com/boombachakombucha",
      facebook: "https://www.facebook.com/boombachakombucha"
    },
    {
      name: "Flobucha",
      location: "Sarasota, FL",
      description: "Operates a kombucha brewery and taproom in Gulf Gate, serving kombucha flights and growlers.",
      website: "https://www.flobucha.com",
      instagram: "https://www.instagram.com/flobucha",
      facebook: "https://www.facebook.com/flobucha"
    },
    {
      name: "CBDB Cannabis Kombucha Co.",
      location: "St. Petersburg, FL",
      description: "Kombucha infused with CBD, pioneering cannabis-kombucha blends in Florida.",
      website: null,
      instagram: "https://www.instagram.com/cbdbkombucha",
      facebook: null
    }
  ],
  'Brewers (Northern & Central Florida)': [
    {
      name: "Noli South Kombucha",
      location: "Panama City Beach, FL",
      description: "Small-batch organic kombucha founded in 2016, with creative, mystical branding. Offers kombucha and single-cultivar CBD blends.",
      website: "https://www.nolisouth.com",
      instagram: "https://www.instagram.com/nolisouth",
      facebook: "https://www.facebook.com/nolisouth"
    },
    {
      name: "Gnarbucha Kombucha",
      location: "Jacksonville, FL",
      description: "Local kombucha brand with a strong community following, offering bold flavors.",
      website: null,
      instagram: "https://www.instagram.com/gnarbucha",
      facebook: "https://www.facebook.com/gnarbucha"
    },
    {
      name: "Living Vitalitea Kombucha",
      location: "Orlando, FL",
      description: "Brewery and wholesale-focused kombucha maker offering tours by appointment.",
      website: "https://www.livingvitalitea.com",
      instagram: "https://www.instagram.com/livingvitalitea",
      facebook: "https://www.facebook.com/livingvitalitea"
    },
    {
      name: "Krazy Kombucha",
      location: "Lakeland, FL",
      description: "Taproom featuring up to 19 rotating kombucha flavors, bottled for retail as well.",
      website: "https://krazykombucha.life",
      instagram: "https://www.instagram.com/krazykombucha",
      facebook: "https://www.facebook.com/krazykombucha"
    },
    {
      name: "King's Kombucha",
      location: "Lake Worth, FL",
      description: "Local kombucha brewer known for small-batch production and tropical notes.",
      website: null,
      instagram: "https://www.instagram.com/kingskombucha",
      facebook: null
    }
  ]
}

export default function LocalVendors() {
  return (
    <>
      {/* Hero Section with same structure as home page */}
      <section className="bg-gradient-to-br from-neutral-100 to-accent-100 py-12 sm:py-20 px-4 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-bold text-primary-500 mb-4 sm:mb-6 headline-caps tracking-headline leading-tight">
            Kombucha in Florida
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-500 mb-6 sm:mb-8 max-w-3xl mx-auto font-body leading-relaxed-body px-2">
            Discover the vibrant kombucha community across Florida, from local South Florida artisans to statewide brewers and specialty retailers.
          </p>
          
          {/* Decorative elements */}
          <div className="mt-8 sm:mt-12 flex justify-center space-x-4 sm:space-x-8 text-2xl sm:text-4xl opacity-60">
            <span>🥤</span>
            <span>🍃</span>
            <span>🌱</span>
            <span>✨</span>
            <span>🏪</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          {Object.entries(kombuchaData).map(([category, vendors]) => (
            <div key={category} className="mb-12">
              <h2 className="font-headline text-3xl font-bold text-primary-500 mb-8 headline-caps tracking-headline border-b-2 border-accent-200 pb-2">
                {category}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vendors.map((vendor, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-neutral-200">
                  <h3 className="font-headline text-xl font-bold text-primary-500 mb-3">
                    {vendor.name}
                  </h3>
                  
                  <div className="space-y-3 font-body text-primary-500">
                    <p className="flex items-start">
                      <span className="text-secondary-500 mr-2">📍</span>
                      <span className="text-sm">{vendor.location}</span>
                    </p>
                    
                    <p className="text-sm leading-relaxed-body">
                      {vendor.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {vendor.website && (
                        <a 
                          href={vendor.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-secondary-600 transition-colors"
                        >
                          Website
                        </a>
                      )}
                      {vendor.instagram && (
                        <a 
                          href={vendor.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-accent-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-accent-600 transition-colors"
                        >
                          Instagram
                        </a>
                      )}
                      {vendor.facebook && (
                        <a 
                          href={vendor.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-primary-400 text-white px-3 py-1 rounded text-sm font-medium hover:bg-primary-500 transition-colors"
                        >
                          Facebook
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="bg-accent-100 rounded-lg p-8 text-center border-2 border-accent-200 mt-12">
          <h3 className="font-headline text-2xl font-bold text-primary-500 mb-4 headline-caps tracking-headline">
            Join the Florida Kombucha Community!
          </h3>
          <p className="text-lg text-primary-500 mb-6 font-body leading-relaxed-body">
            From South Florida artisans to statewide brewers, Florida&apos;s kombucha scene is thriving. 
            Connect with these amazing producers and discover your new favorite brew!
          </p>
          <a 
            href="#email-signup"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-headline font-semibold text-lg hover:bg-secondary-600 transition-colors inline-block shadow-md cursor-pointer"
          >
            Get Festival Updates
          </a>
        </div>
        </div>
      </section>
    </>
  )
}
