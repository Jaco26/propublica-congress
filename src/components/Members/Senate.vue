<template>
  <div>
    <h1>Members of the {{senateCongress}}'th Senate</h1>
    <v-container grid-list-sm>
      <v-layout wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="mem in senateMembers" :key="mem.member_id">
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
import memberService from '../../services/propublica/members.service';
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      senateMembers: 'senateMemberList',
      senateCongress: 'senateCongress',
      loading: 'memberIsLoading',
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