<template>
   <v-container grid-list-md>
    <h1>Votes!</h1>
    <v-layout wrap>
      <v-flex v-for="vote in votes" :key="vote.vote_id">
        <v-card>
          <v-card-title class="body-2">
            {{vote.description}} {{vote.position}}
          </v-card-title>
          <v-card-text>
            
          </v-card-text>
        </v-card>
    

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters({
      votes: 'specificMemberVotes',
    }),

  },

}
</script>

<style>

</style>
