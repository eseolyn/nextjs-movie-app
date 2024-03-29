// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
// };

// module.exports = nextConfig

const API_KEY = process.env.API_KEY;

module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/test/:path*",
                destination: "/dest/:path*",
                permanent: false,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            },
        ];
    },
};
