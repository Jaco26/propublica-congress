<template>
  <v-app id="app">
    <app-bar ></app-bar>
    <app-nav-drawer ></app-nav-drawer>
      <v-flex pa-2 class="title warning elevation-1" id="note-banner">
        <strong>NOTE:</strong> This site is in active development. New pages and features will be added on a regular basis and some layouts will change.  
      </v-flex>
    <v-container fluid fill-height>
      <v-layout>
        <v-flex offset-xs3 offset->
          <router-view ></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>   
</template>

<script>
import NavDrawer from './components/Shared/NavDrawer';
import AppBar from './components/Shared/AppBar';
export default {
  name: 'App',
  components: {
    'app-bar': AppBar,
    'app-nav-drawer': NavDrawer,
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
