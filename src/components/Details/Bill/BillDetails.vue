<template>
  <v-layout row justify-start>
    <v-flex>
      <v-card>
        <div v-if="storeBillLoading">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <div v-else>
          <bill-title v-if="bill.short_title || bill.title" :bill="bill"></bill-title>
          <bill-people :bill="bill"></bill-people>
          <bill-actions :actions="bill.actions"></bill-actions>
          <bill-votes :votes="bill.votes"></bill-votes>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
 
</template>

<script>
// Components
import Title from './Title'
import People from './People'
import Votes from './Votes'
import Actions from './Actions'
// Vuex
import {mapState, mapActions} from 'vuex'
import {FETCH_SPEC_BILL} from '@/store/modules/Bills/bill-types'
export default {
  components: {
    billTitle: Title,
    billPeople: People,
    billVotes: Votes,
    billActions: Actions,
  },
  computed: {
    bill () {
      return this.propBill 
        ? this.propBill
        : this.storeBill;
    },
    ...mapState('bills/specificBill', {
      storeBill: state => state.bill.main,
      storeBillLoading: state => state.bill.loading,
    }),
  },
  methods: {
    ...mapActions('bills/specificBill', {
      fetchBill: FETCH_SPEC_BILL,
    }),
  },
  beforeRouteEnter (to, from, next) {    
    next(vm => {            
      vm.fetchBill(to.params)
    })
  },

  
}
</script>
