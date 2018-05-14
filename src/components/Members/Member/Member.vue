<template>
 
  <v-container v-if="person.first_name">
    <v-layout row>
      <v-flex xs6 >
        <h1 class="text-xs-left">{{person.first_name}} {{person.last_name}}</h1>
      </v-flex>
      <v-flex align-end>
        <v-btn @click="show('inVotes')">Votes</v-btn>
        <v-btn @click="show('inBills')">Bills</v-btn>
        <v-btn @click="show('inStatements')">Statements</v-btn>
        <v-btn :href="person.roles[0].contact_form">Conact</v-btn> 
      </v-flex>
    </v-layout>

    <v-layout row >
      <v-flex xs3 align-content-space-between>
        <p>Party: {{person.current_party}}</p>
        <p>State: {{person.roles[0].state}}</p>
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
        <member-votes v-if="inVotes" />
        <member-bills v-if="inBills" />
        <member-statements v-if="inStatements" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
import MemberVotes from './MemberVotes';
import MemberBills from './MemberBills';
import MemberStatements from './MemberStatements';
export default {
  components: {
    MemberVotes,
    MemberBills,
    MemberStatements,
  },
  data () {
    return {
      chamber: '',
      inBills: false,
      inVotes: false,
      inStatements: false
    }
  },
  computed: {
    ...mapGetters({
      memberIsLoading: 'memberIsLoading',
      person: 'specificMember',
    }),
  },
  methods: {
    show (x) {
      this.inBills = false;
      this.inVotes = false;
      this.inStatements = false;
      this[x] = true;
    }
  }

}

</script>

<style>

</style>
