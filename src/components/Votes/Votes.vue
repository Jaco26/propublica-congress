<template>
  <v-container>
    <v-layout >
      
      <v-flex xs12 sm9>
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
  components: {
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
