<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card dark tile class="home-banner">
        <v-card-title>
          <span class="title font-weight-bold">Selamat Pagi!</span> <br />
          <small class="font-weight-light">Semoga harimu indah :)</small>
        </v-card-title>

        <v-card-text class="font-weight-bold">
          “The first step is to establish that something is possible; then
          probability will occur.”
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-row align="center" justify="end">
              <v-btn icon class="mr-2">
                <v-icon>
                  mdi-emoticon-happy
                </v-icon>
              </v-btn>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm8 md6 class="quotes-container">
      <v-card
        v-for="(item, i) in quoteList"
        :key="i"
        tile
        class="quote-card pa-2 mt-1 mb-1"
      >
        <v-card-text>
          <v-row>
            <p align="center">
              {{ item.content }}
            </p>
          </v-row>
          <v-row align="center" justify="space-between" class="mt-2">
            <small class="primary--text">
              {{ item.category }}
            </small>
            <span class="font-weight-bold primary--text">
              - {{ item.author }}
            </span>
          </v-row>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Quote } from '../@types';
import { getHomeQuotes } from '../@utils';

@Component({
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
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
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
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Kutipanku'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'id_ID'
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'en_US'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.DOMAIN_URL + this.$route.path
      }
    ];
    const link = [
      {
        rel: 'canonical',
        href: process.env.DOMAIN_URL + this.$route.path
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
  image: string = `${process.env.DOMAIN_URL}/og-image.png`;
  quoteList: Quote[] = [];

  /* ------------------------------------
  => Mounted (Lifecycle)
  ------------------------------------ */
  mounted(): Promise<void> {
    try {
      (this as IndexPage).$axios
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
    this.quoteList = getHomeQuotes();
  }
}
</script>

<style lang="stylus" scoped>
.home-banner {
  background-image: url(../assets/images/svg/home_ellipse_1.svg), url(../assets/images/svg/home_ellipse_2.svg), url(../assets/images/svg/home_ellipse_3.svg), linear-gradient(246.25deg, #FB6161 0%, #C12C36 98.86%);
  background-position: bottom right;
  >>> .v-card__text {
    padding-bottom: 0;
  }
}
.quote-card {
  width: 100%;
  background-image: url(../assets/images/svg/quote-ellipse.svg), url(../assets/images/svg/quote-mark.svg);
  background-position: left bottom, right top;
}
.v-card__text {
  line-height: 1rem;
}
.quotes-container {
  min-height: 400px;
}
</style>
