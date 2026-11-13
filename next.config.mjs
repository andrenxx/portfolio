/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Site 100% estático, publicado no Cloudflare Pages (pasta out/).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
