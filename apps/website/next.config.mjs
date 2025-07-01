/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Temporarily ignore during builds
    ignoreDuringBuilds: true,
  },
}

export default nextConfig