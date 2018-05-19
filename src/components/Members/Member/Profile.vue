<template>
  <v-container>
    <v-layout>
      <v-flex>
         <v-progress-linear v-if="isLoading" :size="50" indeterminate color="primary"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-expansion-panel v-if="person.first_name && !isLoading" popout expand>
          <div class="display-1">{{person.first_name}} {{person.last_name}}</div>
          <v-expansion-panel-content v-for="(role, i) in person.roles" :key="i">
            <div slot="header">Congress: {{role.congress}}, Chamber: {{role.chamber}}, Party: {{person.current_party}}, State: {{role.state}}, District: {{role.district}}.</div>
            <v-card>
              <v-card-text>Bills Sponsored {{role.bills_sponsored}}</v-card-text>
              <v-card-text>Bills Co-sponsored {{role.bills_cosponsored}}</v-card-text>
              
              <v-expansion-panel inset focusable>
                <h3 class="headline">Committees</h3>
                <v-expansion-panel-content v-for="(committee, i) in role.committees" :key="i">
                  <div slot="header"> {{committee.name}} </div>
                  <v-card>
                    <v-card-text>From {{committee.begin_date}} to {{committee.end_date}}</v-card-text>
                    <v-card-text v-if="committee.rank_in_party">Rank in party: {{committee.rank_in_party}}</v-card-text>
                    <v-card-text>Side: {{committee.side}}</v-card-text>
                    <v-card-text>Title: {{committee.title}}</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
      
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
// import MemberVotes from './MemberVotes';
// import MemberBills from './MemberBills';
// import MemberStatements from './MemberStatements';
export default {
  props: ['person', 'isLoading'],
  data () {
    return {
      
    }
  },
  // computed: {
  //   ...mapGetters({
  //     person: 'members/specificMember/member',
  //     bills: 'members/specificMember/bills',
  //     votes: 'members/specificMember/votes',
  //     statements: 'members/specificMember/statements',
  //     memberIsLoading: 'members/specificMember/isLoading',

  //   }),
  // },


}

</script>

<style scoped>

  v-card-text {
    color: blue;
  }

</style>
