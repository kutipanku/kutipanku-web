import { Middleware } from '@nuxt/types';

const themeInit: Middleware = (context) => {
  if (process.server) {
    console.warn('check subdomain:', context.req.rawHeaders[1].split('.')[0]);
    const darkMode = context.app.$cookies.get('darkMode');
    context.store.dispatch('ui/changeDarkMode', darkMode);
    const quoteLanguage = context.app.$cookies.get('quoteLanguage');
    context.store.dispatch('ui/changeSelectedQuoteLanguage', quoteLanguage);
  }
};

export default themeInit;
