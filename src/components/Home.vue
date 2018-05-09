<template>
  <div class="home-page">
    <h1>Hello!</h1>
    <section id="congress-members-wrapper">
      <div id="house-list">
        <button v-on:click="getHouseMembers">Get House Members</button>
        <ul v-if="houseMembers">
          <li v-for="member in houseMembers" :key="member.member_id">
            {{member.first_name}} {{member.last_name}}
          </li>
        </ul>
      </div>
      <div id="senate-list">
        <button v-on:click="getSenateMembers">Get Senate Members</button>
        <ul v-if="senateMembers">
          <li v-for="member in senateMembers" :key="member.member_id">
            {{member.first_name}} {{member.last_name}}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import {FETCH_SENATE_MEMBERS, FETCH_HOUSE_MEMBERS} from '../store/action-types';
import {mapState} from 'vuex';
export default {
  data () {
    return {

    }
  },
  computed: mapState({
    senateMembers: state => state.senateMembers,
    houseMembers: state => state.houseMembers,
  }),
  watch: {

  },
  methods: {
    getSenateMembers(){
      this.$store.dispatch(FETCH_SENATE_MEMBERS, {congress: 115, chamber: 'senate'});
    },
    getHouseMembers(){
      this.$store.dispatch(FETCH_HOUSE_MEMBERS, {congress: 115, chamber: 'house'});
    }
  },
  mounted () {
    
  }
}
</script>

<style scoped>

  #congress-members-wrapper {
    display: flex;
  }

  #house-list {
    display: block;
    width: 300px;
    margin: 20px;
    /* background-color: azure */
  }


  #senate-list {
    display: block;
    width: 300px;
    margin: 20px;
    /* background-color: azure */
  }

  ul {
    list-style: none;
  }

</style>

