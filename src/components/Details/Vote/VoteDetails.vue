<template>
  <v-layout justify-start>
    <v-flex>
      <v-card>
        <div v-if="storeVoteLoading">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <div v-else>
          <app-vote-title :vote="vote"></app-vote-title>
          <v-card-text>
            <app-vote-description :vote="vote" ></app-vote-description>
            <app-vote-party-positions :partyPositions="partyPositions" ></app-vote-party-positions>
          </v-card-text>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// Components
import Description from './Description'
import Title from './Title'
import PartyPositions from './PartyPositions'
import IndividualPositions from './IndividualPositions'
// Vuex
import {mapState, mapActions} from 'vuex'
import{FETCH_SPEC_RC_VOTE} from '@/store/modules/Votes/vote-types'
export default {
  props: {
    propVote: {
      type: Object,
      required: false,
    }
  },
  components: {
    appVoteDescription: Description,
    appVoteTitle: Title,
    appVotePartyPositions: PartyPositions,
    appVoteIndividualPositions: IndividualPositions,
  },
  computed: {
    ...mapState('votes', {
      storeVote: state => state.specificRollcallVote.vote,
      storeVoteLoading: state => state.specificRollcallVote.loading,
    }),
    vote(){
      return this.propVote ? this.propVote : this.storeVote;
    },
    partyPositions(){
      return {
        republican: this.vote.republican,
        democratic: this.vote.democratic,
        independent: this.vote.independent,
        total: this.vote.total,
      }
    }
  },
  methods: {
    ...mapActions('votes', {
      fetchVote: FETCH_SPEC_RC_VOTE,
    }),
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.propVote ? null : vm.fetchVote(to.params);
    });
  }

}
</script>

