<template>
  <div>
    <h1>Recent Votes</h1>
   
      <chamber-recnet-votes chamber="House" :votes="houseVotes"></chamber-recnet-votes>
      <chamber-recnet-votes chamber="Senate" :votes="senateVotes"></chamber-recnet-votes>
      <chamber-recnet-votes chamber="Both" :votes="bothVotes"></chamber-recnet-votes>

    
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {FETCH_RECENT_VOTES} from '@/store/modules/Votes/vote-types'
import ChamberRecnetVotes from './ChamberRecentVotes'
export default {
  components: {
    ChamberRecnetVotes
  },
  computed: {
    ...mapState('votes', {
      houseVotes: state => state.recentVotes.house.list,
      senateVotes: state => state.recentVotes.senate.list,
      bothVotes: state => state.recentVotes.both.list,
    }),
  },
  methods: {
    ...mapActions('votes', {
      fetchRecent: FETCH_RECENT_VOTES
    }),
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.fetchRecent({chamber: 'house'});
      vm.fetchRecent({chamber: 'senate'});
      vm.fetchRecent({chamber: 'both'});
    })
  }
}
</script>

<style>

</style>
