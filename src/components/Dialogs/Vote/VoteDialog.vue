<template>
  <v-layout justify-center>  
    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="dialog">
      <v-btn slot="activator" @click="!propVote ? fetchVote(propVotePayload) : null">Vote Details</v-btn>
    </v-dialog>
    <v-card>
      <div v-if="storeVoteLoading">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>
      <div v-else>
        <vote-title :vote="vote"></vote-title>
        <vote-description :vote="vote"></vote-description>
        <vote-party-positions :partyPositions="{republican, democrat, independent, total} = vote"></vote-party-positions>
        <vote-individual-positions :individualPositions="vote.positions" ></vote-individual-positions>
      </div>
    </v-card>
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
