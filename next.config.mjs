/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingExcludes: {
    '*': ['public/images/**/*'],
  },
};

export default nextConfig;
