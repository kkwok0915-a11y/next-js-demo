/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/v1/:path*",
        destination: "https://vercel.app*", // Double check this URL is right!
      },
    ];
  },
};
export default nextConfig;
