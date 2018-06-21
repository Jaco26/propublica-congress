<template>
  <div>
    <v-toolbar dense flat color="transparent" >
      <v-layout justify-center>
        <v-toolbar-title class="headline mx-3">Search Bills</v-toolbar-title>
        <v-toolbar-items>
          <v-btn
            v-for="type in searchTypes" :key="type"
            class="mx-2"
            depressed
            :class="type == selectedSearchType ? 'active-search-type' : ''"
            @click="selectedSearchType = type"
          > {{type}} </v-btn>
        </v-toolbar-items>
      </v-layout>
    </v-toolbar>
    
    <v-toolbar dense flat color="transparent">
      <v-layout justify-center>
        <bill-recent-search v-show="selectedSearchType == 'recent'" @searchFor="fetchRecent"></bill-recent-search>
        <bill-keyword-search v-show="selectedSearchType == 'keyword'" @searchFor="fetchSearch"></bill-keyword-search>
        <bill-upcoming-search v-show="selectedSearchType == 'upcoming'" @searchFor="fetchUpcoming"></bill-upcoming-search>
      </v-layout>
    </v-toolbar>

    <bill-search-results ></bill-search-results>
    

    
  </div>
</template>

<script>
// Components
import Keyword from './Keyword'
import Recent from './Recent'
import Upcoming from './Upcoming'

import SearchResults from '@/components/Bills/SearchResults'
// Vuex
import {FETCH_RECENT, FETCH_SEARCH, FETCH_UPCOMING, FETCH_BY_SUBJECT} from '@/store/modules/Bills/Search/search.bill.types'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    billKeywordSearch: Keyword,
    billRecentSearch: Recent,
    billUpcomingSearch: Upcoming,
    billSearchResults: SearchResults,
  },
  data () {
    return {
      searchTypes: ['keyword', 'recent', 'upcoming'],
      selectedSearchType: '',
    };
  },
  
  methods: {
    ...mapActions('bills', {
      fetchRecent: FETCH_RECENT,
      fetchSearch: FETCH_SEARCH,
      fetchUpcoming: FETCH_UPCOMING,
      fetchBySubject: FETCH_BY_SUBJECT,
    }),
  } 
}
</script>


<style scoped>

.active-search-type {
  background-color: #cde0da !important;
}

</style>
