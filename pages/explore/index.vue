<template>
  <v-card tile class="overflow-hidden">
    <v-layout wrap>
      <v-app-bar color="primary" class="explore-banner" dark prominent dense>
        <v-text-field
          label="Cari"
          placeholder="Kutipan keren ..."
          prepend-icon="mdi-magnify"
          class="pt-12"
        ></v-text-field>

        <template #extension class="mt-4">
          <v-tabs align-with-title>
            <v-tab>Kutipan</v-tab>
            <v-tab>Kategori</v-tab>
            <v-tab>Sumber</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-flex xs12 class="quotes-container">
        <QuoteCard
          v-for="(item, i) in quoteList"
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
import { getHomeQuotes } from '~/@utils';
import QuoteCard from '~/components/QuoteCard.vue';

@Component({
  components: {
    QuoteCard
  }
})
export default class ExplorePage extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  showScrollToTop: boolean = false;
  quoteList: Quote[] = [];

  /* ------------------------------------
  => Mounted (Lifecycle)
  ------------------------------------ */
  mounted(): void {
    console.warn('Loading Explore Page!');
    this.quoteList = getHomeQuotes();
  }

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
}
</script>

<style lang="stylus" scoped>
.explore-banner {
  background-image: url(../../assets/images/svg/home_ellipse_1.svg), url(../../assets/images/svg/home_ellipse_2.svg), url(../../assets/images/svg/home_ellipse_3.svg), linear-gradient(246.25deg, #FB6161 0%, #C12C36 98.86%);
  background-position: bottom right;
}
</style>
