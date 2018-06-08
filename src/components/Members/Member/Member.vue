<template>
  <v-container>
    <v-layout >
      <v-flex xs12>
        <v-toolbar>
          <v-toolbar-title v-if="!personLoading" class="headline"> 
            {{person.first_name}} {{person.last_name}}  
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- If the screen is larger than xs (v-if) -->
          <v-toolbar-items v-if="$vuetify.breakpoint.name != 'xs'">
            <v-tabs color="transparent" v-model="active" slider-color="purple">
              <v-tab v-if="!tab.loading" v-for="tab in tabs" :key="tab.title" @click="show(tab.action)">
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
              <v-list-tile  v-for="tab in tabs" :key="tab.title" @click="show(tab.action)">
                <v-list-tile-title  v-if="!tab.loading">
                  {{tab.title}}
                </v-list-tile-title>
              </v-list-tile> 
            </v-list>
          </v-menu>
        </v-toolbar>
       
        <past-roles v-if="inProfile" :personLoading="personLoading" :person="person" />
        <votes v-if="inVotes" :votes="votes" :votesLoading="votesLoading" />
        <bills v-if="inBills" :bills="bills" :billsLoading="billsLoading" />
        <statements v-if="inStatements" :statements="statements" :statementsLoading="statementsLoading" />
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import * as types from '@/store/modules/Members/specificMember.types';
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
        { title: 'Past Roles', action: 'inProfile', loading: this.personLoading },
        { title: 'Votes', action: 'inVotes', loading: this.votesLoading },
        { title: 'Bills', action: 'inBills', loading: this.billsLoading },
        { title: 'Statements', action: 'inStatements', loading: this.statementsLoading },
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
    ...mapState('members/specificMember', {
      person: state => state.profile.main,
      personLoading: state => state.profile.loading,
      bills: state => state.bills.list,
      billsLoading: state => state.bills.loading,
      votes: state => state.votes.list,
      votesLoading: state => state.votes.loading,
      statements: state => state.statements.list,
      statementsLoading: state => state.statements.loading,
      
    }),
    party () {
      if (this.person.party == 'D') {
        return 'Democrat'
      } else if (this.person.party == 'R') {
        return 'Republican';
      } else if (this.person.party == 'I') {
        return 'Independent';
      }
    }
    
  },
  methods: {
    ...mapActions('members/specificMember', {
      fetchMember: types.FETCH_MEMBER,
    }),
    show (x) {      
      this.inBills = false;
      this.inVotes = false;
      this.inStatements = false;
      this.inProfile = false;
      this[x] = true;
    }
  },
  beforeRouteEnter (to, from, next) {
    // if(to.params.id) {     
      next(vm => {
        vm.fetchMember(to.params.id);
      });
    // } else {
    //   next();
    // }
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchMember(to.params.id)
    next();
  },

}

</script>

<style>

</style>
