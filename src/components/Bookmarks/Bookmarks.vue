<template>
  <div class="bookmark-page">
    <h1>Bookmarks!</h1>
    <p>This is the bookmarks page!</p>
    <v-list>
      <v-list-tile color="purple darken-3" v-for="member in bookmarkedMembers" :key="member.member_id">
        {{member.first_name}} {{member.last_name}} {{member.chamber}} {{member.current_party}} {{member.member_id}}
        <v-btn outline small @click="getProfile(member)">Get Profile</v-btn>
        <v-btn outline small @click="getVotes(member)">Get Votes</v-btn>
        <v-btn outline small @click="getBills(member)">Get Bills</v-btn>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>

import {mapState} from 'vuex';


export default {
  data () {
    return {
    }
  },
  computed: mapState({
    bookmarkedMembers: state => state.bookmarkedMembers,
  }),
  components: {
    
  },
  watch: {

  },
  methods: {
    getProfile(member){
      this.$store.dispatch('FETCH_PROFILE', member);
    },
    getVotes(member){
      this.$store.dispatch('FETCH_VOTES', member);
    },
    getBills(member){
      this.$store.dispatch('FETCH_BILLS', member);
    },
  },
  mounted () {
    
  }
}
</script>

<style>

</style>

