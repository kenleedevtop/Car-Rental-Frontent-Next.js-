/** @type {import('next').NextConfig} */
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const { i18n } = require('./next-i18next.config');

module.exports = withCSS();
module.exports = withFonts({
  reactStrictMode: true,
  i18n,
  images: {
    domains: [
      'patients-influence-dev.s3.eu-central-1.amazonaws.com',
      'patients-influence-dev.s3.amazonaws.com',
    ],
  },
});
