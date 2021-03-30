<template>
  <v-card v-ripple tile class="quote-card pa-2 my-1" @click="goToDetail">
    <v-card-text class="quote-content pa-5">
      <v-row>
        <p align="center">
          "{{ quoteLanguage === 'ID' ? content.id : content.en }}"
        </p>
      </v-row>
      <v-row align="center" justify="space-between" class="mt-2">
        <small class="primary--text">
          {{ category }}
        </small>
        <span class="font-weight-bold primary--text"> - {{ author }} </span>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { QuoteContent } from '~/@types';

@Component
export default class QuoteCard extends Vue {
  /* ------------------------------------
  => Props declaration
  ------------------------------------ */
  @Prop({
    required: true,
    type: String
  })
  id!: string;

  @Prop({
    required: true,
    type: Object
  })
  content!: QuoteContent;

  @Prop({
    required: true,
    type: String
  })
  author!: string;

  @Prop({
    required: true,
    type: String
  })
  category!: string;

  /* ------------------------------------
  => Setter and Getter
  ** (Adopt store variables to local state)
  ------------------------------------ */
  get quoteLanguage(): string {
    return this.$store.state.ui.quoteLanguage;
  }

  /* ------------------------------------ 
  => Methods
  ------------------------------------ */
  goToDetail(): void {
    this.$router.push(`/quotes/${this.id}?lang=${this.quoteLanguage}`);
  }
}
</script>

<style lang="stylus" scoped>
.quote-card {
  width: 100%;
  background-image: url(../assets/images/svg/quote-ellipse.svg), url(../assets/images/svg/quote-mark.svg);
  background-position: left bottom, right top;
  .quote-content {
    border: 1px solid var(--v-active-lighten4);
    border-radius: 3px !important;
  }
}
.v-card__text {
  line-height: 1rem;
}
</style>
