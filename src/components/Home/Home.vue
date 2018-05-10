<template>
  <div class="home-page">
    <h1>Hello!</h1>
    <p>This is the home page!</p>
    <house-member-list />
    <senate-member-list /> 
  </div>
</template>

<script>

import {mapState} from 'vuex';
import HouseList from './HouseList';
import SenateList from './SenateList';

export default {
  data () {
    return {

    }
  },
  computed: mapState({

  }),
  components: {
    'house-member-list': HouseList,
    'senate-member-list': SenateList,
  },
  watch: {

  },
  methods: {
  
  },
  mounted () {
    
  }
}
</script>

<style>

</style>

