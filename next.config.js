/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Limit prerender parallelism to keep memory usage low on constrained machines
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

module.exports = nextConfig;
