'use client'

import { useState } from 'react'

const farmersMarkets = {
  'Miami-Dade County': [
    {
      name: "Miami Lakes Farmers Market",
      address: "15450 New Barn Rd., Miami Lakes, FL 33014",
      schedule: "Saturdays, 10 AM – 5 PM",
      link: "https://www.facebook.com/MiamiLakesFarmersMarket",
      linkText: "Facebook"
    },
    {
      name: "Legion Park Farmers Market (Miami)",
      address: "6601 Biscayne Blvd., Miami, FL 33138",
      schedule: "Saturdays, 9 AM – 2 PM",
      link: "https://www.instagram.com/urban_oasis_project",
      linkText: "Instagram"
    },
    {
      name: "Coconut Grove Organic Farmers Market",
      address: "3300 Grand Ave., Coconut Grove, FL 33133",
      schedule: "Saturdays, 10 AM – 6 PM",
      link: "https://www.instagram.com/glaserorganic",
      linkText: "Instagram"
    },
    {
      name: "Miami Springs Farmers Market",
      address: "118 Curtiss Pkwy., Miami Springs, FL 33166",
      schedule: "Saturdays, 10 AM – 3 PM (Oct–March)",
      link: "https://www.facebook.com/miamispringsfarmersmarket",
      linkText: "Facebook"
    },
    {
      name: "Aventura Farmers Market (at Aventura Mall)",
      address: "19501 Biscayne Blvd., Aventura, FL 33180",
      schedule: "Saturdays, 10 AM – 9:30 PM; Sundays, 11 AM – 8 PM",
      link: "https://www.instagram.com/aventurafarmersmarket",
      linkText: "Instagram"
    },
    {
      name: "Vizcaya Village Farmers Market (Miami)",
      address: "3250 S. Miami Ave., Miami, FL 33129",
      schedule: "Sundays, 9:30 AM – 3:30 PM",
      link: "https://www.instagram.com/urban_oasis_project",
      linkText: "Instagram"
    },
    {
      name: "Zoo Miami Farmers Market (South Dade)",
      address: "12400 SW 152nd St., Miami, FL 33177",
      schedule: "1st & 3rd Sat/Sun monthly, 10 AM – 5 PM",
      link: "https://www.instagram.com/zoomiami",
      linkText: "Instagram"
    },
    {
      name: "Lincoln Road Farmers Market (Miami Beach)",
      address: "Lincoln Road (between Washington Ave. & Meridian Ave.), Miami Beach, FL",
      schedule: "Sundays, 9 AM – 6 PM",
      link: null,
      linkText: null
    },
    {
      name: "Pinecrest Gardens Farmers Market",
      address: "11000 S. Red Rd., Pinecrest, FL 33156",
      schedule: "Sundays, 9 AM – 2 PM",
      link: "https://www.instagram.com/pinecrest_gardens",
      linkText: "Instagram"
    },
    {
      name: "Surfside Farmers Market",
      address: "Atlantic Way & 96th St., Surfside, FL 33154",
      schedule: "Saturdays & Sundays, 9:30 AM – 3:30 PM",
      link: "https://www.facebook.com/TheSurfsideFarmersMarket",
      linkText: "Facebook"
    },
    {
      name: "Coral Gables Farmers Market",
      address: "405 Biltmore Way, Coral Gables, FL 33134",
      schedule: "Saturdays, 8 AM – 2 PM (Jan–Mar)",
      link: "https://www.facebook.com/coralgables",
      linkText: "Facebook"
    }
  ],
  'Broward County': [
    {
      name: "Yellow Green Farmers Market",
      address: "1940 N 30th Rd, Hollywood, FL 33020",
      schedule: "Saturdays & Sundays, 8 AM – 4 PM",
      link: "https://www.ygfarmersmarket.com",
      linkText: "Website"
    },
    {
      name: "Plantation Farmers Market",
      address: "500 N Fig Tree Ln, Plantation, FL 33317",
      schedule: "Saturdays, 9 AM – 2 PM",
      link: "https://www.plantation.org",
      linkText: "Website"
    },
    {
      name: "Las Olas Farmers Market",
      address: "1 E Las Olas Blvd, Fort Lauderdale, FL 33301",
      schedule: "Saturdays, 9 AM – 3 PM",
      link: "https://www.facebook.com/LasolasSaturdays",
      linkText: "Facebook"
    },
    {
      name: "Pompano Beach Green Market",
      address: "50 W Atlantic Blvd, Pompano Beach, FL 33060",
      schedule: "Saturdays, 8 AM – 2 PM",
      link: "https://www.pompanobeachfl.gov",
      linkText: "Website"
    },
    {
      name: "Coconut Creek Farmers Market",
      address: "4400 W. Sample Rd., Coconut Creek, FL 33073",
      schedule: "1st & 3rd Saturdays, 9 AM – 2 PM (Oct–Apr)",
      link: null,
      linkText: null
    },
    {
      name: "City of Parkland Farmers Market",
      address: "8350 Ranch Rd. (Equestrian Center), Parkland, FL 33067",
      schedule: "Sundays, 9 AM – 1 PM (Nov–Apr)",
      link: null,
      linkText: null
    },
    {
      name: "Flamingo Road Nursery & Farmers Market",
      address: "1655 S. Flamingo Rd., Davie, FL 33325",
      schedule: "Daily, 8 AM – 6 PM",
      link: "https://www.instagram.com/flamingoroadnursery",
      linkText: "Instagram"
    },
    {
      name: "Farmers Market at Pembroke Gardens",
      address: "527 SW 145th Terrace, Pembroke Pines, FL 33027",
      schedule: "Sundays, 10:30 AM – 7 PM",
      link: "https://www.facebook.com/profile.php?id=100063607417749",
      linkText: "Facebook"
    },
    {
      name: "Green Market Pompano Beach",
      address: "50 W. Atlantic Blvd., Pompano Beach, FL 33060",
      schedule: "2nd & 4th Saturdays, 9 AM – 1 PM (Nov–Apr)",
      link: "https://www.instagram.com/greenmarketpompanobeach",
      linkText: "Instagram"
    },
    {
      name: "Lauderdale-by-the-Sea Farmers Market",
      address: "El Prado Park, 4500 El Mar Dr., Lauderdale-by-the-Sea, FL 33308",
      schedule: "Sundays, 9 AM – 2 PM (Dec–May)",
      link: null,
      linkText: null
    },
    {
      name: "New River Open Air Market",
      address: "231 SW 2nd Ave., Fort Lauderdale, FL 33301",
      schedule: "Sundays, 9 AM – 5 PM",
      link: null,
      linkText: null
    },
    {
      name: "Southwest Ranches Farmers Market",
      address: "5150 S. Flamingo Rd., Southwest Ranches, FL 33330",
      schedule: "Tue–Sat, 10 AM – 5:30 PM; Sun, 10 AM – 4:30 PM",
      link: "https://www.instagram.com/thefloridamarketplacegroup",
      linkText: "Instagram"
    },
    {
      name: "Sunny Side Up Market",
      address: "844 NE 4th Ave., Fort Lauderdale, FL 33304",
      schedule: "Main Market: 2nd Sunday each month, 12 PM – 4 PM",
      link: "https://www.instagram.com/sunnysideupmarket",
      linkText: "Instagram"
    },
    {
      name: "Tamarac Community Farmers Market",
      address: "7825 Southgate Blvd., Tamarac, FL 33068",
      schedule: "Sundays, 9 AM – 2 PM",
      link: null,
      linkText: null
    },
    {
      name: "The MKT at Las Olas Oceanside Park",
      address: "3000 E. Las Olas Blvd., Fort Lauderdale, FL 33316",
      schedule: "Sat, 9 AM – 5 PM; Sun, 10 AM – 5 PM",
      link: "https://www.instagram.com/oceansideparkmarket",
      linkText: "Instagram"
    }
  ],
  'Palm Beach County': [
    {
      name: "West Palm Beach GreenMarket",
      address: "100 N. Clematis St., West Palm Beach, FL 33401",
      schedule: "Saturdays, 8:30 AM – 1:30 PM (October through April)",
      link: "https://www.instagram.com/wpbgreenmarket",
      linkText: "Instagram"
    },
    {
      name: "Delray Beach GreenMarket",
      address: "51 N. Swinton Ave., Delray Beach, FL 33444",
      schedule: "Saturdays, 9 AM – 2 PM (October–May); 9 AM – 1 PM (June–July)",
      link: "https://www.instagram.com/delraygreenmarket",
      linkText: "Instagram"
    },
    {
      name: "Swank Farmers Market",
      address: "14311 North Rd, Loxahatchee Groves, FL 33470",
      schedule: "Sundays, 10 AM – 1 PM (October through May)",
      link: "https://www.instagram.com/swankspecialtyproduce",
      linkText: "Instagram"
    },
    {
      name: "Market at Harbourside Place",
      address: "200 N. US-1, Jupiter, FL 33477",
      schedule: "2nd & 4th Sundays, 10 AM – 3 PM",
      link: "https://www.facebook.com/HarboursidePlace",
      linkText: "Facebook"
    },
    {
      name: "Tanger Outlets Farmers & Artisans Market",
      address: "1751 Palm Beach Lakes Blvd., West Palm Beach, FL 33401",
      schedule: "Sundays, 11 AM – 7 PM",
      link: null,
      linkText: null
    },
    {
      name: "Gardens GreenMarket",
      address: "10500 N. Military Tr., Palm Beach Gardens, FL 33410",
      schedule: "Sundays, 8 AM – 1 PM (year-round)",
      link: null,
      linkText: null
    },
    {
      name: "Lake Worth Beach Waterside Market",
      address: "1 S. Ocean Blvd., Lake Worth Beach, FL 33460",
      schedule: "Saturdays, 9 AM – 1 PM (October–April)",
      link: "https://www.facebook.com/lakeworthmarket",
      linkText: "Facebook"
    },
    {
      name: "Royal Palm Beach Green Market & Bazaar",
      address: "1050 Royal Palm Beach Blvd., Royal Palm Beach, FL 33411",
      schedule: "Saturdays, 9 AM – 1 PM (October–April)",
      link: "https://www.facebook.com/RPBGreenMarket",
      linkText: "Facebook"
    },
    {
      name: "Tequesta Farmers Market",
      address: "361 Tequesta Dr., Tequesta, FL 33469",
      schedule: "3rd Saturday each month, 8 AM – 12 PM",
      link: "https://www.instagram.com/tequestafarmersmarket",
      linkText: "Instagram"
    },
    {
      name: "TikiMarket at Marina Village",
      address: "190 E. 13th St., Riviera Beach, FL 33404",
      schedule: "Sundays, 10 AM – 3 PM (seasonal)",
      link: "https://www.instagram.com/tikimarket_rivierabeach",
      linkText: "Instagram"
    },
    {
      name: "Wellington Lakeside Market",
      address: "12100 Forest Hill Blvd., Wellington, FL 33414",
      schedule: "Thursdays, 5 PM – 9 PM (September through May)",
      link: "https://www.instagram.com/wellingtonlakesidemarket",
      linkText: "Instagram"
    },
    {
      name: "GreenMarket at CityPlace",
      address: "700 S Rosemary Ave, West Palm Beach, FL 33401",
      schedule: "Saturdays, 8 AM – 1 PM",
      link: "https://www.cityplace.com",
      linkText: "Website"
    },
    {
      name: "Jupiter Community Farmers Market",
      address: "200 E Indiantown Rd, Jupiter, FL 33477",
      schedule: "Sundays, 8 AM – 1 PM",
      link: "https://www.jupiter.fl.us",
      linkText: "Website"
    },
    {
      name: "Boca Raton GreenMarket",
      address: "Royal Palm Pl, 101 Plaza Real S, Boca Raton, FL 33432",
      schedule: "Saturdays, 8 AM – 1 PM",
      link: "https://www.royalpalmplace.com",
      linkText: "Website"
    }
  ]
}

const retailStores = {
  'Retail Stores & Markets (Miami-Dade, Broward, Palm Beach)': [
    {
      name: "Nutrition Smart",
      location: "Locations in Miami Lakes, Pembroke Pines, and across South Florida",
      description: "Known for kombucha on tap as well as bottled selections from local brands.",
      website: "https://www.nutritionsmart.com",
      instagram: "https://www.instagram.com/nutritionsmart",
      facebook: "https://www.facebook.com/NutritionSmart"
    },
    {
      name: "Verde Market: Zero Waste Shop",
      location: "South Miami, Little Haiti (Miami), and Fort Lauderdale",
      description: "Miami's first zero-waste grocery store, offering bulk organic food and kombucha refills.",
      website: "https://www.verdemarket.com",
      instagram: "https://www.instagram.com/verde.market",
      facebook: "https://www.facebook.com/verdemarketmiami"
    },
    {
      name: "One World Zero Waste",
      location: "Tequesta (Jupiter area) & Delray Beach, Palm Beach County",
      description: "Sustainable refill market with kombucha on tap for growler refills.",
      website: "https://oneworld-zerowaste.com",
      instagram: "https://www.instagram.com/oneworldzerowaste",
      facebook: "https://www.facebook.com/oneworldzerowaste"
    },
    {
      name: "Living Green Fresh Market",
      location: "Oakland Park / Fort Lauderdale & Pompano Beach",
      description: "Local organic market and café with kombucha on tap alongside organic produce and prepared foods.",
      website: "https://livinggreenmarket.com",
      instagram: "https://www.instagram.com/livinggreenfreshmarket",
      facebook: "https://www.facebook.com/LivingGreenFreshMarket"
    },
    {
      name: "Zen Mystery",
      location: "Dania Beach, FL",
      description: "Wellness-focused shop offering kombucha, health foods, and holistic products for mind and body balance.",
      website: "https://www.zenmystery.com",
      instagram: "https://www.instagram.com/zenmystery",
      facebook: "https://www.facebook.com/zenmystery"
    },
    {
      name: "Tunie's Natural Grocery & Vitamin Market",
      location: "Coral Springs (formerly Palm Beach Gardens as well)",
      description: "Large independent health-food market historically stocking kombucha and other ferments.",
      website: "https://www.tunies.com",
      instagram: "https://www.instagram.com/tuniesmarket",
      facebook: "https://www.facebook.com/tuniesmarket"
    },
    {
      name: "Whole Foods Market",
      location: "Multiple locations across South Florida",
      description: "Broadest kombucha selection, including Florida-based brewers, often with kombucha on tap.",
      website: "https://www.wholefoodsmarket.com",
      instagram: "https://www.instagram.com/wholefoods",
      facebook: "https://www.facebook.com/wholefoods"
    },
    {
      name: "Sprouts Farmers Market",
      location: "Newly expanded into South Florida",
      description: "Carries bottled kombucha and, in select locations, has kombucha on tap.",
      website: "https://www.sprouts.com",
      instagram: "https://www.instagram.com/sprouts",
      facebook: "https://www.facebook.com/sproutsfarmersmarket"
    }
  ]
}

export default function FarmersMarkets() {
  const [selectedDay, setSelectedDay] = useState<string>('all')

  const daysOfWeek = [
    { value: 'all', label: 'All Days' },
    { value: 'monday', label: 'Monday' },
    { value: 'tuesday', label: 'Tuesday' },
    { value: 'wednesday', label: 'Wednesday' },
    { value: 'thursday', label: 'Thursday' },
    { value: 'friday', label: 'Friday' },
    { value: 'saturday', label: 'Saturday' },
    { value: 'sunday', label: 'Sunday' }
  ]

  const getDaysFromSchedule = (schedule: string): string[] => {
    const days: string[] = []
    const lowerSchedule = schedule.toLowerCase()
    
    if (lowerSchedule.includes('monday') || lowerSchedule.includes('mon')) days.push('monday')
    if (lowerSchedule.includes('tuesday') || lowerSchedule.includes('tue')) days.push('tuesday')
    if (lowerSchedule.includes('wednesday') || lowerSchedule.includes('wed')) days.push('wednesday')
    if (lowerSchedule.includes('thursday') || lowerSchedule.includes('thu')) days.push('thursday')
    if (lowerSchedule.includes('friday') || lowerSchedule.includes('fri')) days.push('friday')
    if (lowerSchedule.includes('saturday') || lowerSchedule.includes('sat')) days.push('saturday')
    if (lowerSchedule.includes('sunday') || lowerSchedule.includes('sun')) days.push('sunday')
    if (lowerSchedule.includes('daily')) days.push('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')
    
    return days
  }

  const filterMarketsByDay = (markets: any[]) => {
    if (selectedDay === 'all') return markets
    
    return markets.filter(market => {
      const marketDays = getDaysFromSchedule(market.schedule)
      return marketDays.includes(selectedDay)
    })
  }

  return (
    <section className="py-16 px-4 bg-neutral-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary-500 mb-6 headline-caps tracking-headline">
            Farmers Markets in South Florida
          </h1>
          <p className="text-xl text-primary-500 font-body leading-relaxed-body max-w-3xl mx-auto">
            Where sunshine, soil, and soul come together. Stroll through the markets, meet growers who care, and pick up flavors that vibe with your body&apos;s natural rhythm.
          </p>
        </div>

        {/* Day Filter */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="font-headline text-2xl font-bold text-primary-500 mb-4">
              Filter by Day
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {daysOfWeek.map((day) => (
              <button
                key={day.value}
                onClick={() => setSelectedDay(day.value)}
                className={`px-4 py-2 rounded-lg font-headline font-medium text-sm transition-colors ${
                  selectedDay === day.value
                    ? 'bg-secondary-500 text-white shadow-md'
                    : 'bg-white text-primary-500 border border-neutral-300 hover:bg-accent-100'
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>

        {Object.entries(farmersMarkets).map(([county, markets]) => {
          const filteredMarkets = filterMarketsByDay(markets)
          
          if (filteredMarkets.length === 0 && selectedDay !== 'all') {
            return null
          }

          return (
            <div key={county} className="mb-12">
              <h2 className="font-headline text-3xl font-bold text-primary-500 mb-8 headline-caps tracking-headline border-b-2 border-accent-200 pb-2">
                {county} {selectedDay !== 'all' && `(${filteredMarkets.length} markets)`}
              </h2>
              
              {filteredMarkets.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-lg text-primary-400 font-body">
                    No markets open on {daysOfWeek.find(d => d.value === selectedDay)?.label} in this county.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMarkets.map((market, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-neutral-200">
                      <h3 className="font-headline text-xl font-bold text-primary-500 mb-3">
                        {market.name}
                      </h3>
                      
                      <div className="space-y-3 font-body text-primary-500">
                        <p className="flex items-start">
                          <span className="text-secondary-500 mr-2">📍</span>
                          <span className="text-sm">{market.address}</span>
                        </p>
                        
                        <p className="flex items-start">
                          <span className="text-accent-500 mr-2">🕒</span>
                          <span className="text-sm">{market.schedule}</span>
                        </p>
                        
                        {market.link && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            <a 
                              href={market.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={`text-white px-3 py-1 rounded text-sm font-medium transition-colors ${
                                market.linkText === 'Instagram' 
                                  ? 'bg-accent-500 hover:bg-accent-600'
                                  : market.linkText === 'Facebook'
                                  ? 'bg-primary-400 hover:bg-primary-500'
                                  : 'bg-secondary-500 hover:bg-secondary-600'
                              }`}
                            >
                              {market.linkText}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}

        {/* Retail Stores Section */}
        {Object.entries(retailStores).map(([category, stores]) => (
          <div key={category} className="mb-12">
            <h2 className="font-headline text-3xl font-bold text-primary-500 mb-8 headline-caps tracking-headline border-b-2 border-accent-200 pb-2">
              {category}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stores.map((store, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-neutral-200">
                  <h3 className="font-headline text-xl font-bold text-primary-500 mb-3">
                    {store.name}
                  </h3>
                  
                  <div className="space-y-3 font-body text-primary-500">
                    <p className="flex items-start">
                      <span className="text-secondary-500 mr-2">📍</span>
                      <span className="text-sm">{store.location}</span>
                    </p>
                    
                    <p className="text-sm leading-relaxed-body">
                      {store.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {store.website && (
                        <a 
                          href={store.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-secondary-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-secondary-600 transition-colors"
                        >
                          Website
                        </a>
                      )}
                      {store.instagram && (
                        <a 
                          href={store.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-accent-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-accent-600 transition-colors"
                        >
                          Instagram
                        </a>
                      )}
                      {store.facebook && (
                        <a 
                          href={store.facebook} 
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
            Find Kombucha at These Markets!
          </h3>
          <p className="text-lg text-primary-500 mb-6 font-body leading-relaxed-body">
            Sip the culture of South Florida. Meet the brewers, taste the blends, and discover how every pour is crafted to balance your gut, your mood, and your day.
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
  )
}
