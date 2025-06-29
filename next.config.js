/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/me-page',
  assetPrefix: '',
  images: {
    unoptimized: true, 
  },
  trailingSlash: true, 
}

module.exports = nextConfig
