<template>
  <v-app dark class="text-center error-wrapper">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  name: 'error',
  head(this: Error) {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
})
export default class Error extends Vue {
  pageNotFound: string = '404 Halaman Tidak Ditemukan';
  otherError: string = 'An error occurred';

  @Prop()
  error: any;
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.error-wrapper {
  padding-top: 200px;
}
</style>
