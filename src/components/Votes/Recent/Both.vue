<template>
  <chamber-recent-votes chamber="Both Chambers" :votes="bothVotes"></chamber-recent-votes>
</template>

<script>
import {mapState} from 'vuex'
import ChamberRecentVotes from './ChamberRecentVotes'
export default {
  components: {
    ChamberRecentVotes,
  },
  computed: {
    ...mapState('votes', {
      bothVotes: state => state.recentVotes.both.list,
    })
  }
  
}
</script>
