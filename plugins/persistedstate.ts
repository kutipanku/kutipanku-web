import createPersistedState from 'vuex-persistedstate';

export default (persist: any): void => {
  createPersistedState({
    key: 'kutipanku',
    paths: ['ui']
  })(persist.store);
};
