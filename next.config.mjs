/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [
      {
        // When you call /v1/api-endpoint in Axios...
        source: "/v1/:path*",
        // ...it actually fetches from your Express app
        destination: "https://vercel.app*",
      },
    ];
  },
};

export default nextConfig;
