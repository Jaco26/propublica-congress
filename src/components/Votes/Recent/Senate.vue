<template>
  <chamber-recent-votes chamber="Senate" :votes="senateVotes"></chamber-recent-votes>
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
      senateVotes: state => state.recentVotes.senate.list,
    })
  }
  
}
</script>
