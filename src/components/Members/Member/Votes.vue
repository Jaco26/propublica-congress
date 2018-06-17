<template>
  <div>
    <v-layout v-if="votesLoading" >
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </v-layout>
    <v-container grid-list-md v-if="!votesLoading">
      <h1>Recent Votes</h1>
      <v-container grid-list-sm mt-5>
        <v-layout column>
          <v-flex class="grey lighten-3" xs6 sm6 md6 pa-2 mb-2 v-for="(vote, i) in votes" :key="i" v-if="vote.description">
            <v-layout>
              <v-flex  class="text-xs-left">
                <strong>Vote: <router-link 
                  :to="{name: 'specificVote', params: {rollCall: vote.roll_call, sessionNumber: vote.session, chamber: vote.chamber, congress: vote.congress}}"
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
                <small><b>Bill:</b></small> <router-link :to="`/bills/${vote.bill.bill_id}`"> <strong> {{vote.bill.number}}</strong> </router-link> {{vote.bill.title}}
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
            <v-layout justify-start>
              <v-flex>
                <app-vote-dialog 
                  :propVotePayload="{
                    rollCall: vote.roll_call,
                    sessionNumber: vote.session, 
                    chamber: vote.chamber, 
                    congress: vote.congress
                  }" 
                ></app-vote-dialog>
              </v-flex>
              <v-flex>
                <app-bill-dialog
                  v-if="vote.bill.bill_id"
                  :propBillId="vote.bill.bill_id"
                ></app-bill-dialog>
              </v-flex>
            </v-layout>
            

          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
  
</template>

<script>
// Dialogs
import VoteDialog from '@/components/Dialogs/Vote/VoteDialog'
import BillDialog from '@/components/Dialogs/Bill/BillDialog'
// Vuex
import {mapGetters} from 'vuex'
export default {
  props: ['votes', 'votesLoading'],
  components: {
    appVoteDialog: VoteDialog,
    appBillDialog: BillDialog,
  },
  

}
</script>

<style>

</style>
