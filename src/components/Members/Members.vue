<template>
 <v-container>
    <v-layout >
      
      <v-flex xs12 sm9>
        <router-view></router-view>
      </v-flex>
    </v-layout>
      <!-- <v-btn router :to="'/members/senate'">Senate</v-btn>
      <v-btn router :to="'/members/house'">House</v-btn> -->
  </v-container>
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