<template>
  <div v-if="vote.congress">
    <work-in-progress :WIP="false" />
    {{vote.congress}} {{vote.chamber}}
  </div>
</template>

<script>
import WorkInProgress from '@/components/WIP';
import {mapState, mapActions} from 'vuex'
import {FETCH_SPEC_RC_VOTE} from '@/store/modules/Votes/vote-types';
import store from '@/store/store'
export default {
  components: {
    WorkInProgress
  },
  computed: {
    ...mapState('votes', {
      vote: state => state.specificRollcallVote.vote,
      vacantSeats: state => state.specificRollcallVote.vacant_seats
    }),
  },
  methods: {
    ...mapActions('votes', {
      fetchVote: FETCH_SPEC_RC_VOTE,
    }),
  },
  beforeRouteEnter (to, from, next) {
    const {rollCall, sessionNumber, chamber, congress} = to.params;
    next(vm => {
      vm.fetchVote({rollCall, sessionNumber, chamber, congress})
    })    
  }
}
</script>

<style>

</style>
