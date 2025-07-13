import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Ignore all ESLint errors during builds (e.g., unused vars, require(), etc.)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Allow builds to succeed even with TypeScript errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

