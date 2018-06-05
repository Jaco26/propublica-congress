<template>
  <div>
    <work-in-progress :WIP="false" />

    <v-layout>
      <v-flex v-if="!committeeLoading">
        <h1>{{committeeName}}</h1>
        <v-divider></v-divider>
        <h2>Current Members</h2>
        <v-flex v-for="member in committee.current_members" :key="member.name">
          {{member.name}}
        </v-flex>
        <v-divider></v-divider>
        <h2 v-if="committee.subcommittees">Subcommittees</h2>
        <v-flex v-for="subcmty in committee.subcommittees" :key="subcmty.id">
          {{subcmty.name}}
        </v-flex>
        <v-divider></v-divider>

      </v-flex>
    </v-layout>
    
   

   
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
  data () {
    return {
      chamber: ''
    }
  },
  methods: {
    setData (chamber) {
      this.chamber = chamber
    }
  },
  computed: {
    ...mapGetters({
      committee: types.SPECIFIC_COMMITTEE,
      committeeLoading: types.SPEC_COM_LOADING,
    }),
    committeeName () {
      return this.chamber == 'Senate' ? `Senate ${this.committee.name}` : `House ${this.committee.name}`
    }
  },
  beforeRouteEnter (to, from, next) {
    let chamber;
    to.params.id.startsWith('S') ? chamber = 'Senate' : chamber = 'House';
    store.dispatch(types.FETCH_SPECIFIC_COMMITTEE, {
      congress: 115,
      chamber: chamber.toLowerCase(),
      committeeId: to.params.id
    });
    next(vm => vm.setData(chamber))
  }
 
}
</script>

<style>

</style>
