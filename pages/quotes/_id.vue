<template>
  <v-layout column justify-center align-center class="random-page-layout">
    <v-flex xs12 sm8 md6 class="full-height">
      <v-card
        :dark="!$vuetify.theme.dark"
        :light="$vuetify.theme.dark"
        tile
        class="random-banner"
      >
        <v-card-title class="card-header">
          <v-layout wrap>
            <v-flex xs12>
              <v-tooltip top>
                <template #activator="{ on }">
                  <v-btn icon class="mr-2" v-on="on">
                    <v-icon>
                      mdi-arrow-left
                    </v-icon>
                  </v-btn>
                </template>
                <span>Kembali</span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </v-card-title>

        <v-card-text :class="!$vuetify.theme.dark ? 'white--text' : ''">
          <v-layout wrap class="random-content pa-2">
            <v-flex xs12>
              {{ content }}
            </v-flex>
            <v-flex xs12 class="author font-weight-bold mt-4">
              - {{ author }}
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-actions class="card-footer">
          <v-list-item class="grow">
            <v-row align="center" justify="end">
              <v-tooltip top>
                <template #activator="{ on }">
                  <v-btn icon class="mr-2" v-on="on">
                    <v-icon>
                      mdi-alert
                    </v-icon>
                  </v-btn>
                </template>
                <span>Lapor Kekeliruan</span>
              </v-tooltip>
              <v-tooltip top>
                <template #activator="{ on }">
                  <v-btn icon class="mr-2" v-on="on">
                    <v-icon>
                      mdi-share
                    </v-icon>
                  </v-btn>
                </template>
                <span>Bagikan</span>
              </v-tooltip>
              <v-tooltip top>
                <template #activator="{ on }">
                  <v-btn icon class="mr-2" v-on="on">
                    <v-icon>
                      mdi-star
                    </v-icon>
                  </v-btn>
                </template>
                <span>Simpan ke Favorit</span>
              </v-tooltip>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getQuoteById } from '~/@utils';

@Component({
  head(this: QuotesDetailPage) {
    const title = 'Kutipanku';
    const meta = [
      {
        hid: 'title',
        name: 'title',
        content: this.content
      },
      {
        hid: 'description',
        name: 'description',
        content: this.author
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.content
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: this.author
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: this.image
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: this.content
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: this.content
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: this.author
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
        content: this.content
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
export default class QuotesDetailPage extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  id: string = this.$nuxt.$route.params.id;
  content: string = '';
  author: string = '';
  image: string = `${process.env.DOMAIN_URL}/og-image.png`;

  /* ------------------------------------
  => asyncData (Lifecycle)
  ------------------------------------ */
  // asyncData(): void {
  //   const quote = getQuoteById(this.id);
  //   this.content = quote.content;
  //   this.author = quote.author;
  // }

  /* ------------------------------------
  => created (Lifecycle)
  ------------------------------------ */
  created(): void {
    const quote = getQuoteById(this.id);
    this.content = quote.content;
    this.author = quote.author;
  }

  /* ------------------------------------
  => fetch (Lifecycle)
  ------------------------------------ */
  // fetch(): void {
  //   const quote = getQuoteById(this.id);
  //   this.content = quote.content;
  //   this.author = quote.author;
  // }

  /* ------------------------------------
  => Mounted (Lifecycle)
  ------------------------------------ */
  // mounted(): void {
  //   console.warn("Loading Quote's Detail Page!", this.$route.path);
  //   const quote = getQuoteById(this.id);
  //   this.content = quote.content;
  //   this.author = quote.author;
  // }
}
</script>

<style lang="stylus" scoped>
.random-page-layout {
  height: 100%;
  flex-direction: row;
}
.random-banner {
  height: 100%;
  background-image: url(../../assets/images/svg/random-ellipse.svg), url(../../assets/images/svg/random-quote-mark.svg), linear-gradient(246.25deg, #FB6161 0%, #C12C36 98.86%);
  background-position: top right, 20% 10%;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  >>> .v-card__text {
    padding-bottom: 0;
  }
  >>> .greetings {
    margin-top: -8px;
  }
  .daily-quote {
    border: 1px solid var(--v-active-lighten1);
    border-radius: 3px !important;
  }
  .card-header {
    align-items: start;
  }
  .card-footer {
    align-items: flex-end;
    width: 100%;
  }
  .random-content {
    font-style: italic;
    font-weight: 900;
    font-size: 24px;
    line-height: 25px;
    .author {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 17px;
      text-align: right;
    }
  }
}
.full-height {
  height: 100%;
  flex-grow: inherit;
}
</style>
