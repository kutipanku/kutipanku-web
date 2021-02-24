<template>
  <v-card tile class="overflow-hidden full-height">
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-card
          :dark="!$vuetify.theme.dark"
          :light="$vuetify.theme.dark"
          tile
          class="home-banner"
        >
          <v-card-title>
            <v-layout wrap>
              <v-flex xs12
                ><span class="title font-weight-bold"
                  >Selamat Pagi!</span
                ></v-flex
              >
              <v-flex xs12 class="greetings"
                ><small class="font-weight-light"
                  >Semoga harimu indah :)</small
                ></v-flex
              >
            </v-layout>
          </v-card-title>

          <v-card-text>
            <v-layout wrap class="daily-quote pa-2">
              <v-flex xs12>
                “The first step is to establish that something is possible; then
                probability will occur.”
              </v-flex>
              <v-flex xs12 class="font-weight-bold mt-2">
                - Elon Musk
              </v-flex>
            </v-layout>
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
        <QuoteCard
          v-for="(item, i) in quoteList"
          :id="item.id"
          :key="i"
          :content="item.content"
          :author="item.author"
          :category="item.category"
        />
      </v-flex>
      <v-btn
        v-show="showScrollToTop"
        v-scroll="onScroll"
        fab
        dark
        fixed
        bottom
        right
        small
        color="primary"
        @click="toTop"
      >
        <v-icon small>mdi-arrow-up</v-icon>
      </v-btn>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Quote } from '../@types';
import { getHomeQuotes } from '../@utils';
import QuoteCard from '../components/QuoteCard.vue';

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
  },
  components: {
    QuoteCard
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
  showScrollToTop: boolean = false;

  /* ------------------------------------ 
  => Methods
  ------------------------------------ */
  onScroll(e: any): void {
    if (typeof window === 'undefined') return;
    const top = window.pageYOffset || e.target.scrollTop || 0;
    this.showScrollToTop = top > 20;
  }

  toTop(): void {
    this.$vuetify.goTo(0);
  }

  /* ------------------------------------
  => Mounted (Lifecycle)
  ------------------------------------ */
  mounted(): void {
    try {
      (this as any).$axios
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
  >>> .greetings {
    margin-top: -8px;
  }
  .daily-quote {
    border: 1px solid;
    border-radius: 3px !important;
  }
}
.v-card__text {
  line-height: 1rem;
}
.quotes-container {
  min-height: 400px;
}
.full-height {
  height: 100%;
}
</style>
