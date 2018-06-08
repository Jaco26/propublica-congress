<template>
  <div>
    <v-layout v-if="billsLoading">
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </v-layout>

    <v-container grid-list-md v-if="!billsLoading">
      <h1>Recent Cosponsored Bills</h1>
      <v-container grid-list-sm mt-5>
          <v-layout column>
            <v-flex class="grey lighten-3" xs6 sm6 md6 pa-2 mb-2 v-for="(bill, i) in bills" :key="i">
              <v-layout>
                <v-flex  class="text-xs-left">
                  <small><b>Sponsor:</b></small> <router-link :to="`/members/member/${bill.sponsor_id}`"><strong>{{bill.sponsor_name}}</strong></router-link> 
                  <small> {{bill.sponsor_party}}, {{bill.sponsor_state}} </small> 
                </v-flex>
                <v-flex offset-xs1 class="text-xs-right date"> 
                  Last Major Action Date: {{bill.latest_major_action_date}}
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
              <v-layout v-if="bill.title">
                <v-flex v-if="bill.title">
                  <small><b>Bill Title:</b></small> {{bill.title}}
                </v-flex>
              </v-layout>
              <v-layout v-if="bill.latest_major_action">
                <v-flex>
                  <small><b>Latest Major Action:</b></small> {{bill.latest_major_action}}
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
            <small>Learn more on</small> <a target="_blank" :href="`${bill.govtrack_url}`">Govtrack</a>
            </v-flex>
          </v-layout>
        </v-container>
    </v-container>
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  props: ['bills', 'billsLoading'],

}
</script>

<style>

</style>
