<template>
  <v-container grid-list-sm>
    <v-layout wrap>
      <v-flex xs6 md4 lg3 v-for="mem in senateMembers" :key="mem.member_id">
        <v-card>
          <v-card-title class="title">{{mem.first_name}} {{mem.last_name}} </v-card-title>
          <v-card-actions>
            <v-btn small :href="`#/member/${mem.id}`">Details</v-btn>
          </v-card-actions>
        </v-card> 
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import {mapState} from 'vuex';

export default {
 
  data () {
    return {
      showModal: false,
    }
  },
  computed: mapState({
    senateMembers: state => state.senateMembers,
  }),
  methods: {

  },
  watch: {

  }
}
</script>

<style>


</style>
