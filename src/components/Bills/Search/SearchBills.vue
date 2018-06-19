<template>
  <div>
    <h1>Search Bills</h1>
    <select v-model="selectedSearchType" value="" style="background-color: beige; color: #112211;">
      <option v-for="type in searchTypes" :key="type" :value="type"> {{type}} </option>
    </select>
    <br>
    <br>
    <hr>

    <div v-show="selectedSearchType == 'keyword'">
      Search By Keyword       
      <bill-keyword-search @searchFor="fetchSearch"></bill-keyword-search>
    </div>
    <div v-show="selectedSearchType == 'recent'">
      Search By Recent
      <bill-recent-search @searchFor="fetchRecent"></bill-recent-search>
    </div>
    <div v-if="selectedSearchType == 'subject'">
      Search By Subject
      
    </div>
    <div v-if="selectedSearchType == 'upcoming'">
      Search Upcoming
      <bill-upcoming-search @searchFor="fetchUpcoming"></bill-upcoming-search>
    </div>
    
  </div>
</template>

<script>
// Components
import Keyword from './Keyword'
import Recent from './Recent'
import Upcoming from './Upcoming'
// Vuex
import {FETCH_RECENT, FETCH_SEARCH, FETCH_UPCOMING} from '@/store/modules/Bills/Search/search.bill.types'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    billKeywordSearch: Keyword,
    billRecentSearch: Recent,
    billUpcomingSearch: Upcoming,
  },
  data () {
    return {
      searchTypes: ['keyword', 'recent', 'subject', 'upcoming'],
      selectedSearchType: '',
      searchParams: {
        subject: {
          subject: '' // A slug version of a legislative subject, displayed as url_name in subject responses
        },
      
      },
      selectOptions: {
        upcoming: {
          chamber: [
            
          ]
        }
      }  
    };
  },
  methods: {
    ...mapActions('bills', {
      fetchRecent: FETCH_RECENT,
      fetchSearch: FETCH_SEARCH,
      fetchUpcoming: FETCH_UPCOMING
    }),

  } 
}
</script>
