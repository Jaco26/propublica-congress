<template>
  <v-container>
    <v-layout>
      <v-flex sm3>
          <secondary-nav :items="items" class="secondary" />
      </v-flex>
      <v-flex xs12 sm9>
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SecondaryNav from '@/components/SecondaryNav';
export default {
  components: {
    SecondaryNav,
  },
  computed: {
    items () {
      return this.$store.getters['bills/navItems'];
    } 
  },

}
</script>

<style>

</style>