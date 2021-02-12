import { UiState } from '../@types';

/* ------------------------------------------------
  => State
  ----------------------------------------------- */
export const state = (): UiState => ({
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
      icon: 'mdi-magnify',
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
      to: '/favorite'
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
export const mutations = {};

/* ------------------------------------------------
  => Actions
  ----------------------------------------------- */
export const actions = {};
