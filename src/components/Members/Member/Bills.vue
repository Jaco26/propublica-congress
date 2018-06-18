<template>
  <div>
    <v-card>
      <v-layout v-if="billsLoading">
        <v-progress-linear indeterminate color="primary"></v-progress-linear>
      </v-layout>

      <v-container grid-list-md v-if="!billsLoading">
        <h1>Recent Cosponsored Bills</h1>
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
                  <small><b>Bill:</b></small> <router-link :to="`/members/member/${$route.params.id}/bills/${bill.bill_id}`"> <strong>{{bill.bill_id}}</strong> </router-link> {{bill.short_title ? bill.short_title : bill.title}}
                </v-flex>
              </v-layout>
              <v-layout v-if="bill.latest_major_action">
                <v-flex>
                  <small><b>Latest Major Action:</b></small> {{bill.latest_major_action}}
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
              Learn more on <a target="_blank" :href="`${bill.govtrack_url}`">Govtrack</a>
            </v-flex>
          </v-layout>
      </v-container>
    </v-card>
    
  </div>
</template>

<script>
import BillListItem from '@/components/ListItems/BillListItem'
import {mapState} from 'vuex';
export default {
  components: {
    appBillListItem: BillListItem,
  },
  computed: {
    ...mapState('members/specificMember', {
      bills: state => state.bills.list,
      billsLoading: state => state.bills.loading,
    }),
  }

}
</script>

<style>

</style>
