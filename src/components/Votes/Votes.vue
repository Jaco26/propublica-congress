<template>
  <v-container>
    <v-layout >
      <v-flex>
        <secondary-nav :items="navItems"  />
      </v-flex>
      <v-flex xs12 sm9>
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import SecondaryNav from '@/components/SecondaryNav';
import {mapGetters} from 'vuex';
export default {
  components: {
    SecondaryNav,
  },
  computed:{
    ...mapGetters({
      navItems: 'votes/navItems'
    }),

  },
}
</script>

<style>

</style>
