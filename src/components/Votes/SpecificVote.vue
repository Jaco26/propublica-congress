<template>
<div>
  <work-in-progress :WIP="false" />
  
</div>
 

</template>

<script>
import WorkInProgress from '@/components/WIP';
import {mapState, mapActions} from 'vuex'
import {FETCH_SPEC_RC_VOTE} from '@/store/modules/Votes/vote-types';
export default {
  components: {
    WorkInProgress
  },
  computed: {
    ...mapState('votes', {
      vote: 'specificRollcallVote',
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
