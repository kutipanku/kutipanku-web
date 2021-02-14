<template>
  <v-app dark>
    <v-navigation-drawer :mini-variant="miniVariant" app permanent touchless>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar tile size="40">
            <KutipankuLogo :size="30" />
          </v-list-item-avatar>

          <v-list-item-title
            ><strong class="primary--text">Kutipanku</strong> <br />
            <small>Kumpulan kutipan terlengkap!</small></v-list-item-title
          >
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in drawerNavMenu"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <v-list>
          <v-list-item router exact @click.stop="miniVariant = !miniVariant">
            <v-list-item-action>
              <v-icon
                >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
              >
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="'Lipat Menu'" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main class="background-canvas">
      <v-layout justify-center>
        <v-flex class="content-wrapper">
          <v-container class="pa-0">
            <nuxt />
          </v-container>
        </v-flex>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MenuItem } from '../@types';
import KutipankuLogo from '../components/svg/KutipankuLogo.vue';

@Component({
  components: {
    KutipankuLogo
  }
})
export default class Default extends Vue {
  miniVariant: boolean = true;
  /* ------------------------------------
  => Methods
  ------------------------------------ */

  /* ------------------------------------
  => Setter and Getter
  ** (Adopt store variables to local state)
  ------------------------------------ */
  get drawerNavMenu(): MenuItem {
    return this.$store.state.ui.drawerNavMenu;
  }
}
</script>

<style lang="stylus" scoped>
.v-navigation-drawer >>> .v-list-item--active {
  color: var(--v-active-base);
}
.background-canvas {
  padding-left: 56px !important;
}
</style>
