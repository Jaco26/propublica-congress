<template>
  <div>
    <v-card>
      <v-layout v-if="votesLoading" >
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </v-layout>
    <v-container grid-list-md v-if="!votesLoading">
      <h1>Recent Votes</h1>
        <v-layout column>
          <v-flex class="grey lighten-3" xs6 sm6 md6 pa-2 mb-2 v-for="(vote, i) in votes" :key="i" v-if="vote.description">
            <v-layout>
              <v-flex  class="text-xs-left">
                <strong>Vote: <router-link 
                  :to="{name: `memberVoteDetails`, params: {rollCall: vote.roll_call, sessionNumber: vote.session, chamber: vote.chamber, congress: vote.congress}}"
                >{{vote.description}}</router-link> </strong>
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
                <small><b>Bill:</b></small> <router-link :to="{name: 'memberBillDetails', params: {billId: vote.bill.bill_id}}"> <strong> {{vote.bill.number}}</strong> </router-link> {{vote.bill.title}}
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
    </v-card>
    
  </div>
  
</template>

<script>
// Vuex
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState('members/specificMember', {
      votes: state => state.votes.list,
      votesLoading: state => state.votes.loading,
    })
  }
}
</script>

<style>

</style>
