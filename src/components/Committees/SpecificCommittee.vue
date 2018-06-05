<template>
  <div>
    <!-- <work-in-progress :WIP="true" /> -->
    <h1>{{cmty.name}}</h1>
    <hr>
     <h2>Current Members</h2>
      <v-flex v-for="member in cmty.current_members" :key="member.name">
        {{member.name}}
      </v-flex>
      <hr>
    <h2 v-if="cmty.subcommittees">Subcommittees</h2>
    <v-flex v-for="subcmty in cmty.subcommittees" :key="subcmty.id">
      {{subcmty.name}}
    </v-flex>
    <hr>
   

   
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
  computed: {
    ...mapGetters({
      cmty: types.SPECIFIC_COMMITTEE,
    })
  },
  beforeRouteEnter (to, from, next) {
    let chamber;
    to.params.id.startsWith('S') ? chamber = 'senate' : chamber = 'house';
    store.dispatch(types.FETCH_SPECIFIC_COMMITTEE, {congress: 115, chamber, committeeId: to.params.id});
    next();
  }
}
</script>

<style>

</style>
