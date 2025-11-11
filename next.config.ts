import { NextConfig } from 'next';

const config: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
    domains: ['geniefood.rs'],
  },
};

export default config;
