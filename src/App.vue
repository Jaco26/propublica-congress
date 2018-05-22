<template>
  <v-app id="app">
    <responsive-nav></responsive-nav>
    <v-flex mt-1 pa-1 class="title warning">
      <strong>NOTE:</strong> This site is in active development. New pages and features will be added on a regular basis and some layouts will change.  
    </v-flex>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 xl10>
          <router-view />
        </v-flex>
      </v-layout>
       
    </v-container>

   
  
  </v-app>   
</template>

<script>
import ResponsiveNav from './components/ResponsiveNav/ResponsiveNav';
export default {
  name: 'App',
  components: {
    'responsive-nav': ResponsiveNav,
  },
  created(){
    this.$store.dispatch('members/FETCH_MEMBERS');
    this.$store.dispatch('votes/FETCH_RECENT_EXPLANATIONS', {congress: 115});
  }
};
</script>

<style>

  .date {
    color: #135458
  }

</style>
