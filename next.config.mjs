import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],
        deviceSizes: [640, 768, 1024, 1280, 1920],
        formats: ["image/webp"],
        minimumCacheTTL: 60,
        unoptimized: true
      },
};

export default withNextIntl(nextConfig);
