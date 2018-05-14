<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1>Welcome</h1>
        <p><i>KnowThyCongress</i> is a user interface for data from the Propublica Congress API. </p>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
       <h1>Recent Votes</h1>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <h1>Recent Bills</h1>
      </v-flex>
    </v-layout>

     <v-layout>
      <v-flex>
        <h1>Recent Statements</h1>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
  data () {
    return {

    }
  },
  computed:{
    ...mapGetters({
      
    }),
  },
  methods: {

  },
 
}
</script>

<style>


</style>
