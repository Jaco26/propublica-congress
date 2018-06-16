<template>
  <v-layout row justify-center>
   
    <v-dialog v-model="dialog" width="600px">
      <v-btn slot="activator">Bill Details</v-btn>
      <v-card>
        <bill-title v-if="bill.short_title || bill.title" :bill="bill"></bill-title>
        <bill-people :bill="bill"></bill-people>
        <bill-actions :bill="bill"></bill-actions>
        <bill-votes :bill="bill"></bill-votes>
      </v-card>
    </v-dialog>
  </v-layout>
 
</template>

<script>
// Components
import Title from './Title'
import People from './People'
import Votes from './Votes'
import Actions from './Actions'
// Vuex
import {mapState} from 'vuex'

export default {
   props: {
    propBill: {
      type: Object,
      required: false,
    }
  },
  components: {
    billTitle: Title,
    billPeople: People,
    billVotes: Votes,
    billActions: Actions,
  },
  data () {
    return {
      dialog: false,
    }
  },
  computed: {
    bill () {
      return this.propBill ? this.propBill : this.storeBill;
    },
    ...mapState('bills/specificBill', {
      storeBill: state => state.bill.main,
      storeBillLoading: state => state.bill.loading,
    }),
  }
  
}
</script>
