<template>
  <v-app id="app">

    <v-navigation-drawer temporary absolute v-model="sideNav">
      <v-list class="p1-1">
        <v-list-tile>
          <v-list-tile-content>
             <v-btn flat>
              View Senate Members
            </v-btn>
            <v-btn flat>
              View House Members
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar dark class="primary">
      <v-toolbar-title>KnowThyCongress</v-toolbar-title>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          View Senate Members
        </v-btn>
        <v-btn flat>View House Members</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
       <router-view/>
    </main>
   

  </v-app>
    <!-- <Navbar /> -->
   
    
</template>

<script>
import Navbar from './components/Navbar/Navbar';
export default {
  name: 'App',
  // components: {
  //   Navbar, 
  // },
  data () {
    return {
      sideNav: false,
      menuItem
    }
  },
  created(){
    this.$store.dispatch('FETCH_CONGRESS_MEMBERS', {congress: 115, chamber: 'senate'});
    this.$store.dispatch('FETCH_CONGRESS_MEMBERS', {congress: 115, chamber: 'house'});
  }
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
