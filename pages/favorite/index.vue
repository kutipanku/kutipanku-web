<template>
  <v-card tile class="overflow-hidden full-height">
    <v-layout wrap>
      <v-app-bar
        color="primary"
        class="explore-banner"
        :dark="!$vuetify.theme.dark"
        :light="$vuetify.theme.dark"
        prominent
        dense
      >
        <v-text-field
          label="Cari"
          placeholder="Kutipan favoritku ..."
          prepend-icon="mdi-magnify"
          class="pt-12"
        ></v-text-field>
      </v-app-bar>
      <v-flex xs12 class="quotes-container">
        <QuoteCard
          v-for="(item, i) in quoteList"
          :id="item.id"
          :key="i"
          :content="item.content"
          :author="item.author"
          :category="item.category"
        />
      </v-flex>
    </v-layout>
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
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Quote } from '~/@types';
import {
  generateHeaderMetaTag,
  generateCanonicalLink,
  getHomeQuotes
} from '~/@utils';
import QuoteCard from '~/components/QuoteCard.vue';

@Component({
  head(this: FavoritePage) {
    const title = this.title;
    const meta: any = generateHeaderMetaTag(
      this.title,
      this.description,
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
  },
  components: {
    QuoteCard
  }
})
export default class FavoritePage extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  title: string = 'Kumpulan Kutipan Favoritmu';
  image: string = `${process.env.DOMAIN_URL}/og-image.png`;
  showScrollToTop: boolean = false;
  quoteList: Quote[] = [];
  description: string =
    'Simpan kutipan favoritmu dan buka kapan saja ketika kamu mau membacanya lagi';

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
    this.quoteList = getHomeQuotes();
  }
}
</script>

<style lang="stylus" scoped>
.explore-banner {
  background-image: url(../../assets/images/svg/home_ellipse_1.svg), url(../../assets/images/svg/home_ellipse_2.svg), url(../../assets/images/svg/home_ellipse_3.svg), linear-gradient(246.25deg, #FB6161 0%, #C12C36 98.86%);
  background-position: bottom right;
}
.full-height {
  height: 100%;
}
</style>
