/** @type {import('next').NextConfig} */
const nextConfig = {
  // Netlify supports API routes, so no need for static export
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
