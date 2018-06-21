<template>
  <div>
    <v-container fluid grid-list-md>
      <v-layout wrap>
        <h4 v-if="bills[0]"> Results: {{numOfResults}} {{prevSearchType ? prevSearchType : null}} Bills </h4>
        <v-flex v-for="(bill, i) in bills" :key="i" xs12 class="my-2 grey lighten-3"> 
          <v-layout v-if="bill.title || bill.description">
            <v-flex>
              <b> <router-link :to="{name: 'specificBill', params: {billId: bill.bill_id}}"> {{bill.bill_id}} </router-link> {{bill.title ? bill.title : bill.description}}</b>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout v-if="bill.sponsor_id">
            <v-flex class="text-xs-left">
              <small><b>Sponsor:</b></small>
              <router-link :to="`/members/member/${bill.sponsor_id}`"><strong>{{bill.sponsor_name}}</strong></router-link> 
              <small> {{bill.sponsor_party}}, {{bill.sponsor_state}} </small> 
            </v-flex>
          </v-layout>
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
     <v-progress-linear v-if="billsLoading" indeterminate></v-progress-linear>
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
