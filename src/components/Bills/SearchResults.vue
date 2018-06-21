<template>
  <div>
    <v-container fluid grid-list-md>
      <v-layout wrap>
        <h4 v-if="bills[0]"> Results: {{numOfResults}} {{prevSearchType ? prevSearchType : null}} Bills </h4>
        <v-flex v-for="(bill, i) in bills" :key="i" xs12> 
          {{bill.short_title}} {{bill.bill_id}}
        </v-flex>
        <v-btn 
          v-if="bills.length >= 20 && prevSearchType != 'upcoming'" 
          block
          depressed
          @click="getNextPage"
        >
          Next Page
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {FETCH_RECENT, FETCH_SEARCH, FETCH_UPCOMING, FETCH_BY_SUBJECT} from '@/store/modules/Bills/Search/search.bill.types'
import {mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState('bills', {
      bills: state => state.searchBills.results.list,
      numOfResults: state => state.searchBills.results.list.length,
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
    },

  },
}
</script>
