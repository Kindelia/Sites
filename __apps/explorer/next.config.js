/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@kindelia/shared'], {
  // debug: true,
});

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
