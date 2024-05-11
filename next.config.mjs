/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com']
    },
    env: {
        customKey: 'my-value',
    },
};

export default nextConfig;
