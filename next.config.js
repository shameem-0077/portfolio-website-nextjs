/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'portfolio-website-shameem.s3.ap-south-1.amazonaws.com',
            port: '',
            pathname: '/what-i-do/**',
          },
          {
            protocol: 'https',
            hostname: 'portfolio-website-shameem.s3.ap-south-1.amazonaws.com',
            port: '',
            pathname: '/featured-projects/**',
          },
          {
            protocol: 'https',
            hostname: 'shameembucket.s3.ap-south-1.amazonaws.com',
            port: '',
            pathname: '/profilepics/**',
          },
        ],
      },
}

module.exports = nextConfig

