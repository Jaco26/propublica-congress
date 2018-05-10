<template>
  <div id="senate-list">
    <v-btn color="grey" v-on:click="getSenateMembers">Get Senate Members</v-btn>
    <ul v-if="senateMembers">
      <li v-for="member in senateMembers" :key="member.member_id">
        {{member.first_name}} {{member.last_name}}
        <v-btn depressed small>Bookmark</v-btn>
      </li>
    </ul>
  </div>
</template>

<script>

import {FETCH_SENATE_MEMBERS} from '../../store/action-types';
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
  },
  mounted () {
    
  }
}
</script>

<style scoped>

</style>
