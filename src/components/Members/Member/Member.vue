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
      <profile :person="person" :isLoading="isLoading" xs3 align-content-space-between />
      <v-flex xs8>
        <votes :votes="votes" v-if="inVotes" />
        <bills :bills="bills" v-if="inBills" />
        <statements :statements="statements" v-if="inStatements" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
import store from '@/store/store';
import Votes from './Votes';
import Bills from './Bills';
import Statements from './Statements';
import Profile from './Profile';
export default {
  components: {
    Votes,
    Bills,
    Statements,
    Profile,
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
      person: 'members/specificMember/member',
      bills: 'members/specificMember/bills',
      votes: 'members/specificMember/votes',
      statements: 'members/specificMember/statements',
      isLoading: 'members/specificMember/isLoading',
    }),
  },
  methods: {
    show (x) {
      this.inBills = false;
      this.inVotes = false;
      this.inStatements = false;
      this[x] = true;
    }
  },
  beforeRouteEnter (to, from, next) {
    if(to.params.id) {
      store.dispatch('members/specificMember/FETCH_MEMBER', to.params.id);
      next();
    } else {
      next();
    }
  }

}

</script>

<style>

</style>
