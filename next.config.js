/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
  images: {
    unoptimized: true
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL ? process.env.BASE_API_URL :'https://torktest.vercel.app/api'
  },
  publicRuntimeConfig: {
    BASE_API_URL: process.env.BASE_API_URL ? process.env.BASE_API_URL : 'https://torktest.vercel.app/api'
  },

}

module.exports = nextConfig
