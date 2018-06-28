<template>
  <v-container>
    <v-layout >
      <v-flex xs12>
        <v-toolbar>
          <v-toolbar-title v-if="!personLoading" class="headline"> 
            {{member.first_name}} {{member.last_name}} <small>{{member.current_party}} {{memberState}}</small> 
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- If the screen is larger than xs (v-if) -->
          <v-toolbar-items v-if="$vuetify.breakpoint.name != 'xs'">
            <v-tabs color="transparent" v-model="active" slider-color="purple">
              <v-tab 
                v-if="!tab.loading" 
                v-for="tab in tabs" 
                :key="tab.title" 
                :to="tab.path">
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
              <v-list-tile v-for="tab in tabs" :key="tab.title" router :to="tab.path">
                <v-list-tile-title v-if="!tab.loading">
                  {{tab.title}}
                </v-list-tile-title>
              </v-list-tile> 
            </v-list>
          </v-menu>
        </v-toolbar>
      
        <router-view></router-view>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import * as types from '@/store/modules/Members/specificMember.types'
export default {
  data () {
    return {
      tabs: [
        { title: 'Past Roles', path: `/members/member/${this.$route.params.id}`, loading: this.personLoading },
        { title: 'Votes', path: `/members/member/${this.$route.params.id}/votes`, loading: this.votesLoading },
        { title: 'Bills', path: `/members/member/${this.$route.params.id}/bills`, loading: this.billsLoading },
        { title: 'Statements', path: `/members/member/${this.$route.params.id}/statements`, loading: this.statementsLoading },
      ],
      active: null,
      chamber: '',
    }
  },
  computed: {
    ...mapState('members/specificMember', {
      member: state => state.profile.main,
      personLoading: state => state.profile.loading,
      bills: state => state.bills.list,
      billsLoading: state => state.bills.loading,
      votes: state => state.votes.list,
      votesLoading: state => state.votes.loading,
      statements: state => state.statements.list,
      statementsLoading: state => state.statements.loading,
      
    }),
    memberState () {
      return this.member.roles 
        ? this.member.roles[0].state
        : '';
    }
  },
  methods: {
    ...mapActions('members/specificMember', {
      fetchMember: types.FETCH_MEMBER,
    }),
  },
  beforeRouteEnter (to, from, next) {   
      next(vm => {
        vm.fetchMember(to.params.id);
      });
  },
  beforeRouteUpdate (to, from, next) {
    if ( !to.fullPath.includes('votes') && !to.fullPath.includes('bills') && !to.fullPath.includes('statements')) {
      console.log(to.fullPath);
      console.log('MEMBER PATH MATCH');
      this.fetchMember(to.params.id)
    }
    next();
  },

}

</script>

<style>

</style>
