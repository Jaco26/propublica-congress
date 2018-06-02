<template>
  <v-container>
    <v-layout >
      <v-flex xs12>
        <v-toolbar>
          <v-toolbar-title id="legislator-name" class="headline"> {{person.first_name}} {{person.last_name}} </v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- If the screen is larger than xs (v-if) -->
          <v-toolbar-items v-if="$vuetify.breakpoint.name != 'xs'">
            <v-tabs color="transparent" v-model="active" slider-color="purple">
              <v-tab v-for="tab in tabs" :key="tab.title" @click="show(tab.action)">
                {{tab.title}}
              </v-tab>
            </v-tabs>
          </v-toolbar-items>
          <!-- If the screen is xs (v-if) -->
          <v-menu v-else>
            <v-btn icon slot="activator">
              <v-icon >more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="tab in tabs" :key="tab.title" @click="show(tab.action)">
                <v-list-tile-title >
                  {{tab.title}}
                </v-list-tile-title>
              </v-list-tile> 
            </v-list>
          </v-menu>
        </v-toolbar>
       
        <past-roles :person="person" :isLoading="isLoading" v-if="inProfile" />
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
import PastRoles from './PastRoles';
export default {
  components: {
    Votes,
    Bills,
    Statements,
    PastRoles,
  },
  data () {
    return {
      tabs: [
        { title: 'Past Roles', action: 'inProfile' },
        { title: 'Votes', action: 'inVotes' },
        { title: 'Bills', action: 'inBills' },
        { title: 'Statements', action: 'inStatements' },
      ],
      active: null,
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
      console.log(to.params.id);
      
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
