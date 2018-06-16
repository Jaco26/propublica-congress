<template>
  <v-flex d-flex xs12 @click="openThis" class="vote">
    <v-card tile>
      <v-card-title class="subheading">
        <strong>{{vote.description}}</strong>
      </v-card-title>
      <v-divider></v-divider>
      <transition name="fade">
        <v-card-text >
          <v-layout>
            <v-flex xs12 >
              <app-bill-dialog :propBillId="vote.bill.bill_id" ></app-bill-dialog>
              <small><b>Date:</b></small> {{vote.date}} <br>
              <small><b>Question:</b></small> {{vote.question}} <br>
              <small><b>Result:</b></small> {{vote.result}}
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md6>
              <h4>Democrats</h4>
              <small><b>Yes</b></small> {{vote.democratic.yes}} <br>
              <small><b>No</b></small> {{vote.democratic.no}} <br>
              <small><b>Not Voting</b></small> {{vote.democratic.not_voting}} <br>
            </v-flex>
             <v-flex xs12 md6>
              <h4>Republicans</h4>
              <small><b>Yes</b></small> {{vote.republican.yes}} <br>
              <small><b>No</b></small> {{vote.republican.no}} <br>
              <small><b>Not Voting</b></small> {{vote.republican.not_voting}} <br>
            </v-flex>
            <v-flex xs12 md6>
              <h4>Independents</h4>
              <small><b>Yes</b></small> {{vote.independent.yes}} <br>
              <small><b>No</b></small> {{vote.independent.no}} <br>
              <small><b>Not Voting</b></small> {{vote.independent.not_voting}} <br>
            </v-flex>
          </v-layout>
         
        </v-card-text>
      </transition>
    </v-card> 
    
  </v-flex>
</template>

<script>
import {mapActions} from 'vuex'
import {FETCH_SPEC_BILL} from '@/store/modules/Bills/bill-types'
import BillDialog from '@/components/Dialogs/Bill/BillDialog'
export default {
  props: {
    vote: {
      type: Object,
      required: true
    },
    index: Number,
    loadOpen: Boolean
  },
  components: {
    appBillDialog: BillDialog
  },
  data () {
    return {
      open: false,
    }
  },
  methods: {
    openThis () {
      this.open = !this.open;
      // this.$emit('openThis', this.index)
    },
    ...mapActions('bills/specificBill', {
      fetchBill: FETCH_SPEC_BILL,
    })

  }
  
}
</script>

<style scoped>

.fade-enter-active {
  transition: all .3s ease;
}

.fade-leave-active {
  transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.fade-enter, .fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

/* .vote:hover {
  cursor: pointer;
} */


</style>

