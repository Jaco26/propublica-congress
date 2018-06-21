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
      <bill-subject-search @searchFor="fetchBySubject"></bill-subject-search>
    </div>
    <div v-if="selectedSearchType == 'upcoming'">
      Search Upcoming
      <bill-upcoming-search @searchFor="fetchUpcoming"></bill-upcoming-search>
    </div>

    <ul>
      <li v-for="bill in bills" :key="bill.bill_id">{{bill.bill_id}}</li>
    </ul>
    <v-btn @click="getNextPage">Next Page</v-btn>
    <h2> {{prevSearchType ? prevSearchType : null}} </h2>
    
  </div>
</template>

<script>
// Components
import Keyword from './Keyword'
import Recent from './Recent'
import Upcoming from './Upcoming'
import Subject from './Subject'
// Vuex
import {FETCH_RECENT, FETCH_SEARCH, FETCH_UPCOMING, FETCH_BY_SUBJECT} from '@/store/modules/Bills/Search/search.bill.types'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    billKeywordSearch: Keyword,
    billRecentSearch: Recent,
    billUpcomingSearch: Upcoming,
    billSubjectSearch: Subject,
  },
  data () {
    return {
      searchTypes: ['keyword', 'recent', 'subject', 'upcoming'],
      selectedSearchType: '',
    };
  },
  computed: {
    ...mapState('bills', {
      bills: state => state.searchBills.results.list,
      billsLoading: state => state.searchBills.results.loading,
      prevSearchType: state => state.searchBills.search.type,
    })
  },
  methods: {
    ...mapActions('bills', {
      fetchRecent: FETCH_RECENT,
      fetchSearch: FETCH_SEARCH,
      fetchUpcoming: FETCH_UPCOMING,
      fetchBySubject: FETCH_BY_SUBJECT,
    }),
    getNextPage () {
      switch (this.prevSearchType) {
        case 'keyword':
          this.fetchSearch();
          return;
        case 'recent':
          this.fetchRecent();
          return;
        case 'subject':
          this.fetchBySubject();
          return;
        case 'upcoming':
          this.fetchUpcoming();
          return;  
      }
    }
  } 
}
</script>
