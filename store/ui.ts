import Store, { UiState } from '../@types';

/* ------------------------------------------------
  => State
  ----------------------------------------------- */
export const state = (): UiState => ({
  darkMode: false,
  quoteLanguage: 'id',
  displayLanguage: 'id',
  drawerNavMenu: [
    {
      icon: 'mdi-home',
      title: 'Beranda',
      to: '/'
    },
    {
      icon: 'mdi-view-dashboard',
      title: 'Acak',
      to: '/random'
    },
    {
      icon: 'mdi-earth',
      title: 'Jelajah',
      to: '/explore'
    },
    {
      icon: 'mdi-star',
      title: 'Favorit',
      to: '/favorite'
    },
    {
      icon: 'mdi-information',
      title: 'Informasi',
      to: '/information'
    },
    {
      icon: 'mdi-chat-alert',
      title: 'Saran & Pengaduan',
      to: '/feedback'
    },
    {
      icon: 'mdi-cog',
      title: 'Pengaturan',
      to: '/setting'
    }
  ]
});

/* ------------------------------------------------
  => Mutations
  ----------------------------------------------- */
export const mutations = {
  setDarkMode(state: UiState, param: boolean): void {
    state.darkMode = param;
  },
  setQuoteLanguage(state: UiState, param: string): void {
    state.quoteLanguage = param;
  }
};

/* ------------------------------------------------
  => Actions
  ----------------------------------------------- */
export const actions: any = {
  changeDarkMode(store: Store<UiState> | any, param: boolean): void {
    store.commit('setDarkMode', param);
  },
  changeSelectedQuoteLanguage(
    store: Store<UiState> | any,
    param: string
  ): void {
    store.commit('setQuoteLanguage', param);
  }
};
