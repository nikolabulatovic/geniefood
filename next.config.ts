import { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const config: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? '/geniefood' : '',
  assetPrefix: isProd ? '/geniefood/' : '',
  images: {
    unoptimized: true,
    domains: ['geniefood.rs'],
  },
};

export default config;
