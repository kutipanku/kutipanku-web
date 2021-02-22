<template>
  <v-card tile class="overflow-hidden card-container full-height">
    <v-layout wrap>
      <v-app-bar color="primary" class="feedback-banner" dark prominent dense>
        <v-layout ma-auto px-2>
          <h5>Saran & Pengaduan</h5>
        </v-layout>
      </v-app-bar>
      <v-flex xs12 class="feedback-container" pa-2>
        <v-layout wrap pa-3>
          <v-flex xs12>
            <v-textarea
              v-model="feedback"
              name="feedback-input"
              label="Tuliskan pendapatmu"
              placeholder="Menurutku ..."
              clearable
              clear-icon="mdi-close-circle"
              auto-grow
              rows="8"
              row-height="30"
              prepend-icon="mdi-chat-processing"
            ></v-textarea>
          </v-flex>
          <v-flex>
            <v-text-field
              label="Email"
              prepend-icon="mdi-email"
              clearable
              clear-icon="mdi-close-circle"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 text-center mt-3>
            Kamu tidak harus mencantumkan alamat email, namun jika kamu perlu
            balasan maka kami akan menghubungimu melalui email tersebut.
          </v-flex>
          <v-flex xs12 text-center my-3>
            <v-btn color="primary" dark class="full-width">
              Kirim
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class FeedbackPage extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  feedback: string = '';
  email: string = '';
}
</script>

<style lang="stylus" scoped>
.feedback-banner {
  background-image: url(../../assets/images/svg/home_ellipse_1.svg), url(../../assets/images/svg/home_ellipse_2.svg), url(../../assets/images/svg/home_ellipse_3.svg), linear-gradient(246.25deg, #FB6161 0%, #C12C36 98.86%);
  background-position: bottom right;
}
.feedback-container {
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: -0.05em;
}
.card-container {
  background-image: url(../../assets/images/svg/information-ellipses.svg);
  background-position: top left;
  background-repeat: repeat-y;
}
.full-height {
  height: 100%;
}
.full-width {
  width: 100%;
}
</style>
