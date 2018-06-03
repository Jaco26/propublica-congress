<template>
  <div>
    <!-- <work-in-progress :WIP="true" /> -->
    
  </div>
</template>

<script>
import WorkInProgress from '@/components/WIP';
import * as types from '@/store/modules/Committees/types';
import store from '@/store/store';
import {mapGetters, mapActions} from 'vuex';
export default {
  components: {
    WorkInProgress
  },
  beforeRouteEnter (to, from, next) {
    console.log(to);
    store.dispatch(types.FETCH_SPECIFIC_COMMITTEE, {congress: 115, chamber: 'house', committeeId: to.params.id})
    next()
    
  }
}
</script>

<style>

</style>
