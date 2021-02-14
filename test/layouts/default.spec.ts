import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vue from 'vue';
import Vuex from 'vuex';
import Default from '~/layouts/default.vue';

Vue.use(Vuex);
Vue.use(Vuetify);

// Handle data-app warn
const app = document.createElement('div');
app.setAttribute('data-app', 'true');
document.body.appendChild(app);

describe('Default layout unit test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // cover <template>
  test('is instantiated', () => {
    const wrapper = shallowMount(Default, {
      vuetify: new Vuetify(),
      stubs: ['nuxt']
    });

    expect(wrapper).toBeTruthy();
  });
});
