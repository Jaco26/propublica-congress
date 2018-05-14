<template>
  <v-container v-if="person.first_name">
    <v-layout row>
      <v-flex align-end>
        <v-btn @click="show('inVotes')">Votes</v-btn>
        <v-btn @click="show('inBills')">Bills</v-btn>
        <v-btn @click="show('inStatements')">Statements</v-btn>
        <v-btn :href="person.roles[0].contact_form">Conact</v-btn> 
      </v-flex>
    </v-layout>

    <v-layout row >
      <member-profile xs3 align-content-space-between />
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
import MemberProfile from './MemberProfile';
export default {
  components: {
    MemberVotes,
    MemberBills,
    MemberStatements,
    MemberProfile,
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
