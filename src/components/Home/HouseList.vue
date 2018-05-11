<template>
  <div id="house-list">
    <v-btn color="orange" v-on:click="getHouseMembers">Get House Members</v-btn>
    <v-list v-if="houseMembers">
      <div v-for="member in houseMembers" :key="member.member_id">
        <v-list-tile color="blue" >
          {{member.first_name}} {{member.last_name}}
          <v-spacer></v-spacer>
          <v-btn outline color="purple lighten-2" small :ripple="false" v-on:click="bookmark(member)">Bookmark</v-btn>
        </v-list-tile>
      </div>
    </v-list>
  </div>
</template>

<script>

import {FETCH_HOUSE_MEMBERS, BOOKMARK_MEMBER} from '../../store/action-types';
import {mapState} from 'vuex';

export default {

  data () {
    return {

    }
  },
  computed: mapState({
    houseMembers: state => state.houseMembers,

  }),
  methods: {
    getHouseMembers(){
      this.$store.dispatch(FETCH_HOUSE_MEMBERS, {congress: 115, chamber: 'house'});
    },
    bookmark(member){
       let payload = {...member, chamber: 'house'};       
      this.$store.dispatch(BOOKMARK_MEMBER, payload);
    },
  },
}
</script>

<style scoped>

  #house-list {
    width: 400px;
  }

</style>
