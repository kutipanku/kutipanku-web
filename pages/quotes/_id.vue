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
              <v-tooltip bottom>
                <template #activator="{ on }">
                  <v-btn icon class="mr-2" v-on="on" @click="back">
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
            <v-flex v-if="translateTo !== ''" xs12>
              "{{ translateTo === 'id' ? quote.content.id : quote.content.en }}"
            </v-flex>
            <v-flex v-else xs12>
              "{{
                languageQuery === 'id' ? quote.content.id : quote.content.en
              }}"
            </v-flex>
            <v-flex xs12 class="author font-weight-bold mt-4">
              - {{ quote.author }}
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
              <v-tooltip top>
                <template #activator="{ on }">
                  <v-btn icon class="mr-2" v-on="on" @click="doTranslate">
                    <v-icon>
                      mdi-translate
                    </v-icon>
                  </v-btn>
                </template>
                <span>Terjemahkan</span>
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
import {
  generateHeaderMetaTag,
  generateCanonicalLink,
  getQuoteById
} from '~/@utils';
import { Quote } from '~/@types';

@Component({
  head(this: QuotesDetailPage) {
    const title = `Kutipanku | "${
      this.languageQuery === 'id'
        ? this.quote.content.id
        : this.quote.content.en
    }" -${this.quote.author}`;
    const meta: any = generateHeaderMetaTag(
      `${this.languageQuery === 'id' ? 'Kutipan dari' : 'Quote by'} ${
        this.quote.author
      }`,
      `"${
        this.languageQuery === 'id'
          ? this.quote.content.id
          : this.quote.content.en
      }"`,
      this.image,
      process.env.DOMAIN_URL + this.$route.path
    );
    const link: any = generateCanonicalLink(
      process.env.DOMAIN_URL || '',
      this.$route.path
    );
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
  translateTo: string = '';
  languageQuery: string = '';
  id: string = this.$nuxt.$route.params.id;
  image: string = `${process.env.DOMAIN_URL}/og-image.png`;
  quote: Quote = {
    id: '',
    category: '',
    author: '',
    content: {
      id: '',
      en: ''
    }
  };

  /* ------------------------------------
  => asyncData (Lifecycle)
  ------------------------------------ */
  asyncData(context: any): any {
    const quote = getQuoteById(context.params.id);
    return {
      languageQuery: context.query.lang,
      id: context.params.id,
      quote,
      image: `${process.env.DOMAIN_URL}/og-image.png`
    };
  }

  /* ------------------------------------ 
  => Methods
  ------------------------------------ */
  back(): void {
    this.$router.back();
  }

  doTranslate(): void {
    if (this.translateTo) {
      if (this.translateTo === 'id') {
        this.translateTo = 'en';
      } else {
        this.translateTo = 'id';
      }
    } else if (this.languageQuery === 'id') {
      this.translateTo = 'en';
    } else {
      this.translateTo = 'id';
    }
  }
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
