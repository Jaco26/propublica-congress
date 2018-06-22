<template>
  <chamber-recent-votes chamber="House" :votes="houseVotes"></chamber-recent-votes>
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
      houseVotes: state => state.recentVotes.house.list,
    })
  }
  
}
</script>
