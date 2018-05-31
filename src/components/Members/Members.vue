<template>
 <!-- <v-container> -->
    <!-- <v-layout > -->
      <!-- <v-flex xs12 > -->
        <router-view></router-view>
      <!-- </v-flex> -->
    <!-- </v-layout> -->
  <!-- </v-container> -->
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  components: {
  },
  computed: {
    ...mapGetters({
      items: 'members/navItems',
      recentlyViewed: 'members/recentlyViewed',
    }),
  
  },
}
</script>

<style>

</style>