<template>
  <v-app id="app">
    <responsive-nav></responsive-nav>
    <main>
       <router-view/>
    </main>
  </v-app>   
</template>

<script>
import ResponsiveNav from './components/ResponsiveNav/ResponsiveNav';
export default {
  name: 'App',
  components: {
    'responsive-nav': ResponsiveNav, 
  },
  data () {
    return {
    }
  },
  created(){
    this.$store.dispatch('FETCH_CONGRESS_MEMBERS', {congress: 115, chamber: 'senate'});
    this.$store.dispatch('FETCH_CONGRESS_MEMBERS', {congress: 115, chamber: 'house'});
    this.$store.dispatch('votes/FETCH_RECENT_EXPLANATIONS', {congress: 115});
  }
};
</script>

<style>

</style>
