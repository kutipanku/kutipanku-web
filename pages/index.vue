<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template || {{ greetings }}
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a href="https://vuetifyjs.com" target="_blank"> documentation </a>.
          </p>
          <p>
            If you have questions, please join the official
            <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">
              discord </a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              title="contribute"
            >
              issue board </a
            >.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a href="https://vuetifyjs.com" target="_blank"> documentation </a>.
          </p>
          <p>
            If you have questions, please join the official
            <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">
              discord </a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              title="contribute"
            >
              issue board </a
            >.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a href="https://nuxtjs.org/" target="_blank">
            Nuxt Documentation
          </a>
          <br />
          <a href="https://github.com/nuxt/nuxt.js" target="_blank">
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Logo from '~/components/Logo.vue';
import VuetifyLogo from '~/components/VuetifyLogo.vue';

@Component({
  components: {
    Logo,
    VuetifyLogo
  },
  head(this: IndexPage) {
    const title = 'Kutipanku';
    const meta = [
      {
        hid: 'title',
        name: 'title',
        content: this.title
      },
      {
        hid: 'description',
        name: 'description',
        content: this.description
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: this.description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: this.image
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: this.title
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: this.title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: this.description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: this.image
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: this.image
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: this.title
      }
    ];
    const link = [
      {
        rel: 'canonical',
        href: 'https://kutipanku.id' + this.$route.path
      }
    ];
    return {
      title,
      meta,
      link
    };
  }
})
export default class IndexPage extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  greetings: string = '';
  title: string = 'Kutipanku';
  description: string = 'Kumpulan kutipan terlengkap!';
  image: string = '/nuxt-card.png';

  /* ------------------------------------
  => Mounted (Lifecycle)
  ------------------------------------ */
  async mounted(): Promise<void> {
    console.warn('path', this.$route);
    try {
      await (this as any).$axios
        .post(`https://portal-inspirasi-be.herokuapp.com/graphql`, {
          query: `query {
          hello
        }`
        })
        .then((res: any) => {
          console.warn(res);
          this.greetings = res.data.data.hello;
        });
    } catch (err) {
      console.warn(err);
    }
  }
}
</script>
