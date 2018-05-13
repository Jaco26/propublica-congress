<template>
 <div>
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
          <router-view></router-view>
        </v-flex>
      </v-layout>
       
     
    </v-container>

    <h1>Specific Member</h1>
    {{chamber}}
    <router-view></router-view>
  </div>
 
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      chamber: '',
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.chamber = from.name;
    });
  },
  computed: {
    ...mapGetters({
      memberIsLoading: 'memberIsLoading',
      senateMember: 'senateMember',
      houseMember: 'houseMember',
    })
  },
}
</script>

<style>

</style>
