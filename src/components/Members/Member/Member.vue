<template>
  <v-container>
    <v-toolbar>
      <v-toolbar-title class="headline"> {{person.first_name}} {{person.last_name}} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn active flat @click="show('inProfile')">Roles</v-btn>
        <v-btn flat @click="show('inVotes')">Votes</v-btn>
        <v-btn flat @click="show('inBills')">Bills</v-btn>
        <v-btn flat @click="show('inStatements')">Statements</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <profile :person="person" :isLoading="isLoading" v-if="inProfile" />
    <votes :votes="votes" v-if="inVotes" />
    <bills :bills="bills" v-if="inBills" />
    <statements :statements="statements" v-if="inStatements" />

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
      inProfile: true,
      inBills: false,
      inVotes: false,
      inStatements: false,
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
      this.inProfile = false;
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
  },
  beforeRouteUpdate (to, from, next) {
    if (to.params.id) {
      store.dispatch('members/specificMember/FETCH_MEMBER', to.params.id);
      next();
    } else {
      next();
    }
  },

}

</script>

<style>

</style>
