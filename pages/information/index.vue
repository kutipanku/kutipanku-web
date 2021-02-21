<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card dark tile class="information-banner">
        <v-card-title>
          <v-layout wrap text-center>
            <v-flex xs12
              ><small class="version-label">Versi Applikasi</small></v-flex
            >
            <v-flex xs12><span class="version">1.0.0</span></v-flex>
            <v-flex xs12
              ><p class="last-updated-label">Terakhir diperbarui pada</p>
              <p class="last-updated">7 Februari 2021</p></v-flex
            >
          </v-layout>
        </v-card-title>

        <v-card-text class="white--text">
          <v-layout text-center justify-center align-center wrap class="pa-2">
            <v-flex xs12 class="database-label" mb-2>
              Saat ini database Kutipanku menyimpan
            </v-flex>
            <v-flex xs12>
              <v-layout justify-center align-center>
                <v-flex xs5>
                  <v-layout wrap text-center class="bordered-box box" pa-2>
                    <v-flex xs12 class="value">
                      7.456
                    </v-flex>
                    <v-flex class="label">
                      Kutipan
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 class="author-and-category-label" mb-2 mt-3>
              Dan terdiri dari
            </v-flex>
            <v-flex xs12 mb-2>
              <v-layout justify-center align-center>
                <v-flex xs5 px-1>
                  <v-layout wrap text-center class="bordered-box box" pa-2>
                    <v-flex xs12 class="value">
                      945
                    </v-flex>
                    <v-flex class="label">
                      Sumber
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs5 px-1>
                  <v-layout wrap text-center class="bordered-box box" px-1 py-2>
                    <v-flex xs12 class="value">
                      46
                    </v-flex>
                    <v-flex class="label">
                      Kategori
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm8 md6 class="information-container" pa-3>
      <v-layout wrap>
        <v-flex xs12 text-center mt-2>
          Dukung pengembangan applikasi ini dengan cara follow akun media sosial
          <b class="primary--text"><i>instagram/kutipanku.app</i></b>
        </v-flex>
        <v-flex xs12 class="content-title primary--text" mt-3 mb-1>
          Tentang Applikasi
        </v-flex>
        <v-flex xs12>
          <p class="content-paragraph">
            Applikasi ini dubuat bertujuan untuk menjadi sarana hiburan, mencari
            inspirasi dan membantu proses pendewasaan diri.
          </p>

          <p class="content-paragraph">
            Applikasi ini menampung kutipan-kutipan dari seluruh penjuru dunia
            kemudian disajikan dalam bahasa Indonesia atau Inggris.
          </p>
        </v-flex>
        <v-flex xs12 text-center mt-2>
          <b><i>Tech Stack</i></b> yang dipakai untuk proyek ini:
        </v-flex>
        <v-flex xs12 text-center mt-2>
          <v-layout wrap>
            <v-flex xs6>
              <v-img
                contain
                height="50"
                width="110"
                :src="require(`../../assets/images/svg/icon-nuxtjs.svg`)"
                class="stack-logo"
              />
            </v-flex>
            <v-flex xs6>
              <v-img
                contain
                height="50"
                width="110"
                :src="require(`../../assets/images/svg/icon-typescript.svg`)"
                class="stack-logo"
              />
            </v-flex>
            <v-flex xs6>
              <v-img
                contain
                height="50"
                width="110"
                :src="require(`../../assets/images/svg/icon-expressjs.svg`)"
                class="stack-logo"
              />
            </v-flex>
            <v-flex xs6>
              <v-img
                contain
                height="50"
                width="110"
                :src="require(`../../assets/images/svg/icon-graphql.svg`)"
                class="stack-logo"
              />
            </v-flex>
            <v-flex xs8>
              <v-img
                contain
                height="50"
                width="170"
                :src="require(`../../assets/images/svg/icon-postgresql.svg`)"
                class="stack-logo"
              />
            </v-flex>
            <v-flex xs4>
              <v-img
                contain
                height="50"
                width="60"
                :src="require(`../../assets/images/svg/icon-vuetify.svg`)"
                class="stack-logo"
              />
            </v-flex>
            <v-flex xs6>
              <v-img
                contain
                height="50"
                width="110"
                :src="require(`../../assets/images/svg/icon-github.svg`)"
                class="stack-logo"
              />
            </v-flex>
            <v-flex xs6>
              <v-img
                contain
                height="50"
                width="110"
                :src="require(`../../assets/images/svg/icon-heroku.svg`)"
                class="stack-logo"
              />
            </v-flex>
            <v-flex xs12>
              <v-img
                contain
                height="50"
                width="110"
                :src="require(`../../assets/images/svg/icon-figma.svg`)"
                class="stack-logo"
              />
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 class="content-title primary--text" mt-3 mb-1>
          Tentang Pengembang
        </v-flex>
        <v-flex xs12>
          <p class="content-paragraph">
            Applikasi ini dikembangkan oleh:
          </p>
        </v-flex>
        <v-flex xs12 mt-2>
          <v-layout wrap>
            <v-flex xs3 pt-5>
              <v-row justify="space-around">
                <v-avatar mx-auto>
                  <v-img
                    :src="require(`../../assets/images/svg/mae.svg`)"
                    alt="Mae Trastanechora"
                  />
                </v-avatar>
              </v-row>
            </v-flex>
            <v-flex xs9>
              <v-layout wrap>
                <v-flex xs12 class="content-title" mt-3 mb-1>
                  Mae Trastanechora
                </v-flex>
                <v-flex xs12 mt-2>
                  <p class="content-paragraph">
                    Adalah satu-satunya pengembang untuk proyek applikasi
                    Kutipanku.id ini. Memiliki peran sebagai Software Engineer
                    di sebuah perusahaan SAAS.
                  </p>

                  <p class="content-paragraph">
                    Untuk penawaran kerjasama atau penawaran bisnis bisa
                    dihubungi via
                    <b class="primary--text"><i>linkedin/trastanechora</i></b>
                  </p>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Quote } from '~/@types';
import QuoteCard from '~/components/QuoteCard.vue';

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
  title: string = 'Informasi Kutipanku';
  image: string = `${process.env.DOMAIN_URL}/og-image.png`;
  quoteList: Quote[] = [];
  showScrollToTop: boolean = false;
  description: string =
    'Applikasi ini dubuat bertujuan untuk menjadi sarana hiburan, mencari inspirasi dan membantu proses pendewasaan diri.';

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
.information-banner {
  background-image: url(../../assets/images/svg/home_ellipse_1.svg), url(../../assets/images/svg/home_ellipse_2.svg), url(../../assets/images/svg/home_ellipse_3.svg), linear-gradient(246.25deg, #FB6161 0%, #C12C36 98.86%);
  background-position: bottom right;
  >>> .v-card__text {
    padding-bottom: 0;
  }
  .bordered-box {
    border: 1px solid var(--v-active-lighten1);
    border-radius: 3px !important;
  }
  .version-label {
    font-weight: normal;
    font-size: 18px;
  }
  .version {
    font-weight: 900;
    font-size: 24px;
  }
  .last-updated-label {
    font-weight: normal;
    font-size: 9px;
    margin-bottom: 0;
  }
  .last-updated {
    font-weight: bold;
    font-size: 9px;
    margin-bottom: 0;
    margin-top: -16px;
  }
  .database-label, .author-and-category-label {
    font-weight: normal;
    font-size: 12px;
  }
  .box {
    .value {
      font-weight: bold;
      font-size: 24px;
    }
    .label {
      font-weight: 300;
      font-size: 10px;
    }
  }
}
.v-card__text {
  line-height: 1rem;
}
.information-container {
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: -0.05em;
  min-height: 400px;
  background-image: url(../../assets/images/svg/information-ellipses.svg);
  background-position: left;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  .content-title {
    font-weight: bold;
    font-size: 16px;
  }
  .content-paragraph {
    margin-bottom: 4px;
  }
  .stack-logo {
    margin: auto;
  }
}
</style>
