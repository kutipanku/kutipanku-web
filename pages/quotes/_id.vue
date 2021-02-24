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
              <v-btn icon class="mr-2">
                <v-icon>
                  mdi-menu
                </v-icon>
              </v-btn>
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
              <v-btn icon class="mr-2">
                <v-icon>
                  mdi-alert
                </v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>
                  mdi-share
                </v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>
                  mdi-star
                </v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>
                  mdi-arrow-left
                </v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>
                  mdi-arrow-right
                </v-icon>
              </v-btn>
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

@Component
export default class QuotesDetailPage extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  id: string = window.$nuxt.$route.params.id;
  content: string = '';
  author: string = '';

  /* ------------------------------------
  => Mounted (Lifecycle)
  ------------------------------------ */
  mounted(): void {
    console.warn("Loading Quote's Detail Page!");
    const quote = getQuoteById(this.id);
    this.content = quote.content;
    this.author = quote.author;
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
