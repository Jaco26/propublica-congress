<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/Navbar/Navbar';
import { 
  FETCH_BOOKMARKED_MEMBERS, 
  FETCH_SENATE_MEMBERS, 
  FETCH_HOUSE_MEMBERS } from './store/action-types';


export default {
  name: 'App',
  components: {
    Navbar,
  },
  created(){
    this.$store.dispatch('FETCH_CONGRESS_MEMBERS', {congress: 115, chamber: 'senate'});
    this.$store.dispatch('FETCH_CONGRESS_MEMBERS', {congress: 115, chamber: 'house'});
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
