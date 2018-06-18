<template>
  <!-- <v-flex d-flex xs12 @click="openThis" class="vote">
    <v-card tile>
      <v-card-title class="subheading">
        <strong>{{vote.description}}</strong>
      </v-card-title>
      <v-card-actions> -->
        <v-layout>
          <app-vote-details :propVote="vote"></app-vote-details>
        </v-layout>
      <!-- </v-card-actions>
    </v-card> 
    
  </v-flex> -->
</template>

<script>
import {mapActions} from 'vuex'
import {FETCH_SPEC_BILL} from '@/store/modules/Bills/bill-types'
import VoteDetails from '@/components/Details/Vote/VoteDetails'
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
    appVoteDetails: VoteDetails,
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

