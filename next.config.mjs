/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn3d.iconscout.com',
        },
        {
          protocol: 'https',
          hostname: 'www.shutterstock.com',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn.dribbble.com',
        },
      ],
    },
  };
  
  export default nextConfig;