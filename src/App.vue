<template>
  <v-app id="app">
    <app-responsive-nav></app-responsive-nav>
    <v-content>
      <v-flex pa-2 class="title warning elevation-1" id="note-banner">
        <strong>NOTE:</strong> This site is in active development. New pages and features will be added on a regular basis and some layouts will change.  
      </v-flex>
      <v-container fluid>
        <v-layout justify-center>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>   
</template>

<script>
import NavDrawer from './components/Shared/NavDrawer';
export default {
  name: 'App',
  components: {
    'app-responsive-nav': NavDrawer,
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
