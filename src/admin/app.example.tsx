import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      //  'ua',
      // 'en',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
