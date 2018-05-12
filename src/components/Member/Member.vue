<template>
  <v-container v-if="person.first_name">
    <v-layout row>
      <v-flex xs6 >
         <h1 class="text-xs-left">{{person.first_name}} {{person.last_name}}</h1>
      </v-flex>
      <v-flex align-end>
        <v-btn :to="`/member/${person.id}/votes`">Votes</v-btn>
        <v-btn :to="`/member/${person.id}/bills`">Bills</v-btn>
        <v-btn :href="person.contact_form">Conact</v-btn> 
      </v-flex>
    </v-layout>

    <v-layout row >
      <v-flex xs3 align-content-space-between>
        <p>Party: {{person.party}}</p>
        <p>State: {{person.state}}</p>
        <p>Gender: {{person.gender}}</p>
        <p>Date of Birth: {{person.date_of_birth}}</p>
        <p>Missed Votes: {{person.missed_votes}}</p>
        <p>Missed Votes Percent: {{person.missed_votes_pct}}%</p>
        <p>Next Election: {{person.next_election}}</p>
        <p>Senate Class: {{person.senate_class}}</p>
        <p>Seniority: {{person.seniority}}</p>
        <p>State Rank: {{person.state_rank}}</p>
        <p>Votes With Party: {{person.votes_with_party_pct}}%</p>
        <p>Total Votes: {{person.total_votes}}</p>
      </v-flex>
      <v-flex xs8>
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data () {
    return {
      person: {},
    }
  },
  watch: {
    '$route': 'setPerson',
  },
  computed: mapState({
    senateMembers: state => state.senateMembers,
  }),
  mounted () {
    this.setPerson();
    this.getBills();
  },
  methods: {
    setPerson () {
        let personId = this.$route.params.id;
        this.person = this.senateMembers.filter(member => member.id == personId)[0];
    },
  }
  
}
</script>

<style>

</style>
