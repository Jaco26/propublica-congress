<template>
  <div>
    <work-in-progress :WIP="false" />

    <div v-if="!committeeLoading">
      <v-layout>
        <h1>{{committeeName}}</h1>
      </v-layout>
      <v-divider></v-divider>
      <v-layout>
        <v-flex xs6>
          <h2>Current Members</h2>
          <v-container 
            v-for="party in membersByParty" 
            v-if="party.members[0]" 
            :key="party.title" 
            fluid 
            grid-list-md
          >
            <v-layout>
              {{party.title}} {{party.members.length}}
            </v-layout>
            <committee-member 
              v-for="member in party.members"
              :key="member.url"  
              :member="member"
            />
          </v-container>
         
          <v-divider></v-divider>
          <h2 v-if="committee.subcommittees[0]">Subcommittees</h2>
          <h3 v-else class="title">No Subcommittees</h3>
          <v-flex v-for="subcmty in committee.subcommittees" :key="subcmty.id">
            {{subcmty.name}}
          </v-flex>
        </v-flex>
        <v-flex xs6>
          <div v-if="!hearingsLoading">
            <h2>Hearings</h2>
            <v-flex v-for="(hearing, i) in hearings" :key="i">
              {{hearing.date}} {{hearing.time}}
              {{hearing.description}}
              <v-divider></v-divider>
            </v-flex>
          </div>
        </v-flex>
      </v-layout>
       
        
    </div>
  </div>
</template>

<script>
import WorkInProgress from '@/components/WIP';
import CommitteeMember from '@/components/Committees/CommitteeMember'
import * as types from '@/store/modules/Committees/committee-types';
import store from '@/store/store';
import {mapGetters, mapActions, mapState} from 'vuex';
export default {
  components: {
    WorkInProgress,
    CommitteeMember,
  },
  data () {
    return {
      chamber: '',
    }
  },
  methods: {
    setData (chamber) {
      this.chamber = chamber
    },
  },
  computed: {
    ...mapState('committees', {
      committee: state => state.specificCommittee.main,
      committeeLoading: state => state.specificCommittee.loading,
      hearings: state => state.specificCommittee.hearings.list,
      hearingsLoading: state => state.specificCommittee.hearings.loading,
    }),
    ...mapGetters('committees', {
      membersByParty: types.SORTED_SPEC_COM_MEMBERS,
    }),
    committeeName () {
      if (this.chamber == 'Senate') {
        return `Senate ${this.committee.name}`;
      } else if (this.chamber == 'House') {
        return `House ${this.committee.name}`;
      } else {
        return this.committee.name;
      }
    },
   
  },
  beforeRouteEnter (to, from, next) {
    let chamber;
    if (to.params.id.startsWith('S')) {
      chamber = 'Senate';
    } else if (to.params.id.startsWith('H')) {
      chamber = 'House';
    } else {
      chamber = 'Joint'
    }
    let payload = {
      congress: 115,
      chamber: chamber.toLowerCase(),
      committeeId: to.params.id
    }
    store.dispatch(`committees/${types.FETCH_SPECIFIC_COMMITTEE}`, payload );
    store.dispatch(`committees/${types.FETCH_SPECIFIC_COMMITTEE_HEARINGS}`, payload );
    next(vm => vm.setData(chamber));
  }
 
}
</script>

<style>

</style>
