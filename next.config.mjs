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
          hostname: 'res.cloudinary.com',
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
        {
          protocol: 'https',
          hostname: 'media.licdn.com',
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
        },
        {
          protocol: 'https',
          hostname:`next.config.js`,
        },

        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
        },
        {
          protocol: 'https',
          hostname: 'w7.pngwing.com',
        },

        {
          protocol: 'https',
          hostname: 'static.vecteezy.com',
        },
        {
          protocol:'https',
          hostname:'cdn-icons-png.flaticon.com'
        },
        {
          protocol: 'https',
          hostname: 'media.istockphoto.com'
        },
        {
          protocol:'https',
          hostname:'iro.medium.com'
        },
        {
          protocol: 'https',
          hostname: 'miro.medium.com'
        },
        {
          protocol:'https',
          hostname:'www.scholarhat.com'
        },
        {
          protocol:'https',
          hostname:'cdni.iconscout.com'

        },
        {
          protocol:'https',
          hostname:'utfs.io'

        },
        {
          protocol:'https',
          hostname:'avatars.githubusercontent.com'
        },{
          protocol:'https',
          hostname:'d3l4smlx4vuygm.cloudfront.net'
        }
      ],
    },
  };
  
  export default nextConfig;