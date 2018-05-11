<template>
  <div id="senate-list">
    <v-btn color="grey" v-on:click="getSenateMembers">Get Senate Members</v-btn>
    <v-list v-if="senateMembers">
      <v-list-tile v-for="member in senateMembers" :key="member.member_id">
        {{member.first_name}} {{member.last_name}}
        <v-spacer></v-spacer>
        <v-btn outline color="purple lighten-2" small :ripple="false" v-on:click="bookmark(member)">Bookmark</v-btn>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>

import {FETCH_SENATE_MEMBERS, BOOKMARK_MEMBER} from '../../store/action-types';
import {mapState} from 'vuex';

export default {
   data () {
    return {
    }
  },
  computed: mapState({
    senateMembers: state => state.senateMembers,
  }),
  methods: {
    getSenateMembers(){
      this.$store.dispatch(FETCH_SENATE_MEMBERS, {congress: 115, chamber: 'senate'}); 
    },
    bookmark(member){
      this.$store.dispatch(BOOKMARK_MEMBER, {...member, chamber: 'senate'});
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

  #senate-list {
    width: 400px;
  }

</style>
