<template>
  <v-container>
    <v-layout>
     
      <v-flex xs12 sm9>
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
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