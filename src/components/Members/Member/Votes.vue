<template>
   <v-container grid-list-md>
    <h1>Recent Votes</h1>
    <v-container grid-list-sm mt-5>
      <v-layout column>
        <v-flex class="grey lighten-3" xs6 sm6 md6 pa-2 mb-2 v-for="(vote, i) in votes" :key="i" v-if="vote.description">
          <v-layout>
            <v-flex  class="text-xs-left">
              <strong>Vote: <router-link :to="`/votes/vote/${vote.vote_uri}`">{{vote.description}}</router-link> </strong>
            </v-flex>
            <v-flex offset-xs1 class="text-xs-right date"> 
              Date: {{vote.date}}
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout column v-if="vote.nomination">
            <v-flex xs12>
              <small><b>Question:</b></small> {{vote.question}}
            </v-flex>
            <v-flex xs12>
              <small><b>Position:</b></small> {{vote.position}}
            </v-flex>
            <v-flex xs12>
              <small><b>Result:</b></small> {{vote.result}}
            </v-flex>
            
          </v-layout>
          <v-layout column v-if="vote.bill.title">
            <v-flex xs12>
              <small><b>Bill:</b></small> <router-link to="/bills/bill"> <strong> {{vote.bill.number}}</strong> </router-link> {{vote.bill.title}}
            </v-flex>
            <v-flex xs12>
              <small><b>Latest Action:</b></small> {{vote.bill.latest_action}}
            </v-flex>
            <v-flex xs12>
              <small><b>Question:</b></small> {{vote.question}}
            </v-flex>
            <v-flex xs12>
              <small><b>Position:</b></small> {{vote.position}}
            </v-flex>
            <v-flex xs12>
              <small><b>Result:</b></small> {{vote.result}}
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  props: ['votes'],
  // computed: {
  //   ...mapGetters({
  //     votes: 'specificMemberVotes',
  //   }),

  // },

}
</script>

<style>

</style>
