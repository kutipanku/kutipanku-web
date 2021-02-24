<template>
  <v-card tile class="overflow-hidden card-container full-height">
    <v-layout wrap>
      <v-app-bar
        color="primary"
        class="feedback-banner"
        :dark="!$vuetify.theme.dark"
        :light="$vuetify.theme.dark"
        prominent
        dense
      >
        <v-layout ma-auto px-2>
          <h5>Pengaturan</h5>
        </v-layout>
      </v-app-bar>
      <v-flex xs12 class="feedback-container" pa-2>
        <v-layout wrap pa-3>
          <v-flex xs12>
            <v-layout>
              <v-flex xs8 class="align-self-center">
                <v-layout wrap>
                  <v-flex xs12 md12 sm12><h4>Mode Gelap</h4></v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs4>
                <v-switch v-model="darkMode"></v-switch>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 mb-2>
            <v-layout>
              <v-flex xs8 class="align-self-center">
                <v-layout wrap>
                  <v-flex xs12 md12 sm12><h4>Bahasa Tampilan</h4></v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs4 text-center>
                <v-menu offset-y transition="scale-transition" disabled>
                  <template #activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                      {{ selectedLanguage }}
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title @click="selectedLanguage = 'ID'"
                        >ID</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title @click="selectedLanguage = 'EN'"
                        >EN</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 my-2>
            <v-layout>
              <v-flex xs8 class="align-self-center">
                <v-layout wrap>
                  <v-flex xs12 md12 sm12><h4>Tema Warna</h4></v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs4 text-center>
                <v-menu offset-y transition="scale-transition" disabled>
                  <template #activator="{ on, attrs }">
                    <v-btn text color="primary" dark v-bind="attrs" v-on="on">
                      {{
                        themeColor === 'RED'
                          ? 'Merah'
                          : themeColor === 'GREEN'
                          ? 'Hijau'
                          : 'Biru'
                      }}
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title @click="themeColor = 'RED'"
                        >Merah</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title @click="themeColor = 'GREEN'"
                        >Hijau</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title @click="themeColor = 'BLUE'"
                        >Biru</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 my-2>
            <v-layout>
              <v-flex xs8 class="align-self-center">
                <v-layout wrap>
                  <v-flex xs12 md12 sm12><h4>Ukuran Text</h4></v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs4 text-center>
                <v-menu offset-y transition="scale-transition" disabled>
                  <template #activator="{ on, attrs }">
                    <v-btn text color="primary" dark v-bind="attrs" v-on="on">
                      {{
                        fontSize === 'SMALL'
                          ? 'Kecil'
                          : fontSize === 'MEDIUM'
                          ? 'Sedang'
                          : 'Besar'
                      }}
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title @click="fontSize = 'SMALL'"
                        >Kecil</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title @click="fontSize = 'MEDIUM'"
                        >Sedang</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title @click="fontSize = 'BIG'"
                        >Besar</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import { generateHeaderMetaTag, generateCanonicalLink } from '~/@utils';

@Component({
  head(this: SettingPage) {
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
  }
})
export default class SettingPage extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  title: string = 'Pengaturan Applikasi Kutipanku';
  description: string = 'Sesuaikan applikasi Kutipanku dengan keinginanmu';
  image: string = `${process.env.DOMAIN_URL}/og-image.png`;
  darkMode: boolean = false;
  selectedLanguage: string = 'ID';
  themeColor: string = 'RED';
  fontSize: string = 'MEDIUM';

  created(): void {
    this.darkMode = this.$store.state.ui.darkMode;
  }

  /* ------------------------------------
  => Mounted (Lifecycle)
  ------------------------------------ */
  // mounted(): void {
  //   console.warn('Loading Setting Page!');
  //   this.darkMode = this.$store.state.ui.darkMode;
  // }

  /* ------------------------------------
  => Watcher
  ------------------------------------ */
  @Watch('darkMode')
  handleDarkModeChange(newValue: boolean): void {
    this.$vuetify.theme.dark = newValue;
    this.$store.dispatch('ui/changeDarkMode', newValue);
    (this as any).$cookies.set('darkMode', newValue);
  }
}
</script>

<style lang="stylus" scoped>
.feedback-banner {
  background-image: url(../../assets/images/svg/home_ellipse_1.svg), url(../../assets/images/svg/home_ellipse_2.svg), url(../../assets/images/svg/home_ellipse_3.svg), linear-gradient(246.25deg, #FB6161 0%, #C12C36 98.86%);
  background-position: bottom right;
}
.feedback-container {
  letter-spacing: -0.05em;
  >>> h4 {
    opacity: 0.6;
  }
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
* >>> .v-input__slot {
  place-content: center;
  text-align: center;
}
</style>
