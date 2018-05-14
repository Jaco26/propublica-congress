<template>
  <div>
    <h1>Members of the {{houseCongress}}'th House of Representatives</h1>
    <v-container grid-list-sm>
      <v-layout wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="mem in houseMembers" :key="mem.member_id">
          <v-card>
            <v-card-title class="title">{{mem.first_name}} {{mem.last_name}} <v-spacer></v-spacer>  <span class="body-1"> {{mem.party}} {{mem.state}}</span>  </v-card-title>
            <v-card-actions>
              <v-btn small router :to="`/members/member/${mem.id}`">Details</v-btn>
            </v-card-actions>
          </v-card> 
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import memberService from '../../services/propublica/members.service';

export default {
  computed: {
    ...mapGetters({
      houseMembers: 'houseMemberList',
      houseCongress: 'houseCongress',
    })
  },
  async beforeRouteLeave (to, from, next) {
    if(to.params.id) {
      this.$store.dispatch('FETCH_SPECIFIC_MEMBER', to.params.id);
      next();
    } else {
      next();
    }
  }
  
}
</script>

<style>

</style>