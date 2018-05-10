<template>
  <div id="house-list">
    <v-btn color="orange" v-on:click="getHouseMembers">Get House Members</v-btn>
    <ul v-if="houseMembers">
      <li v-for="member in houseMembers" :key="member.member_id">
        {{member.first_name}} {{member.last_name}}
      </li>
    </ul>
  </div>
</template>

<script>

import {FETCH_HOUSE_MEMBERS} from '../../store/action-types';
import {mapState} from 'vuex';

export default {
  // name: 'HouseList'
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
    }
  },
  mounted () {
    
  }
}
</script>

<style scoped>

</style>
