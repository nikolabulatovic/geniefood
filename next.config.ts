import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const config: NextConfig = {
  /* config options here */
  images: {
    domains: ['geniefood.rs'],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(config);
