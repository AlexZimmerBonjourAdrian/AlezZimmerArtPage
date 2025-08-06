/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
        unoptimized: true, // For development
    },
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig