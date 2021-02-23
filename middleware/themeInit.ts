import { Middleware } from '@nuxt/types';

const themeInit: Middleware = (context) => {
  if (process.server) {
    const darkMode = context.app.$cookies.get('darkMode');
    context.store.dispatch('ui/changeDarkMode', darkMode);
  }
};

export default themeInit;
