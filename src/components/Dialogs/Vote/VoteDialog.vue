<template>
  <v-layout justify-start>  
    <v-dialog :full-width="$vuetify.breakpoint.xsOnly" max-width="500" v-model="dialog">
      <v-btn depressed color="accent darken-3" slot="activator" @click="!propVote ? fetchVote(propVotePayload) : null">Vote Details</v-btn>
      <v-card>
        <div v-if="storeVoteLoading">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <div v-else>
          <vote-title v-if="vote.description" :vote="vote"></vote-title>
          <v-card-text>
            <vote-description v-if="vote" :vote="vote"></vote-description>
            <vote-party-positions v-if="partyPositions" :partyPositions="partyPositions"></vote-party-positions>
            <vote-individual-positions v-if="vote.positions" :individualPositions="vote.positions" ></vote-individual-positions>
          </v-card-text>
        </div>
      </v-card>
    </v-dialog>
   
  </v-layout>
</template>

<script>
// Components
import Title from './Title'
import Description from './Description'
import PartyPositions from './PartyPositions'
import IndividualPositions from './IndividualPositions'
// Vuex
import {mapState, mapActions} from 'vuex'
import {FETCH_SPEC_RC_VOTE} from '@/store/modules/Votes/vote-types' 
export default {
  props: {
    propVote: {
      type: Object,
      required: false,
    },
    propVotePayload: {
      type: Object,
      required: false
    },
  },
  components: {
    voteTitle: Title,
    voteDescription: Description,
    votePartyPositions: PartyPositions,
    voteIndividualPositions: IndividualPositions,
  },
  data () {
    return {
      dialog: false,
    }
  },
  computed: {
    vote () {
      return this.propVote
        ? this.propVote
        : this.storeVote;
    },
    partyPositions() {
      return {
        republican: this.vote.republican,
        democratic: this.vote.democratic,
        independent: this.vote.independent,
        total: this.vote.total,
      };
    },
    ...mapState('votes', {
      storeVote: state => state.specificRollcallVote.vote,
      storeVoteLoading: state => state.specificRollcallVote.loading,
    }),
  },
  methods: {
    ...mapActions('votes', {
      fetchVote: FETCH_SPEC_RC_VOTE,
    }),
  }

}
</script>

<style>

</style>
