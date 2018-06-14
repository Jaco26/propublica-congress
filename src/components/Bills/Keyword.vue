<template>
  <div>
    <!-- TODO: This search bar could be a candidate for being
    a reusable component... -->
    <v-layout justify-center>
      <v-flex xs12 sm8 lg6 class="text-xs-center">
        <form @submit.prevent="submit">
          <v-toolbar dense prominent>
            <v-text-field 
              class="ma-3"
              append-icon="search"
              single-line
              v-model="newSearchPhrase"
              label="Search Bills"
              hide-details
            ></v-text-field>
            <v-btn flat color="info" type="submit">
              Search 
            </v-btn> 
          </v-toolbar>
        </form>
      </v-flex>
    </v-layout>

    <v-container grid-list-sm mt-5>
      <v-layout column>
        <v-flex class="grey lighten-3" xs6 sm6 md6 pa-2 mb-2 v-for="(bill, i) in results" :key="i">
          <v-layout>
            <v-flex  class="text-xs-left">
              <router-link :to="`/members/member/${bill.sponsor_id}`"><strong>{{bill.sponsor_name}}</strong></router-link> 
                <small> {{bill.sponsor_party}}, {{bill.sponsor_state}} </small> 
            </v-flex>
            <v-flex offset-xs1 class="text-xs-right date"> 
              Last Major Action Date: {{bill.latest_major_action_date}}
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
            <v-layout v-if="bill.title">
              <v-flex v-if="bill.title">
                <small><b>Bill Title:</b></small> {{bill.title}}
            </v-flex>
          </v-layout>
          <v-layout v-if="bill.latest_major_action">
              <v-flex>
                <small><b>Latest Major Action:</b></small> {{bill.latest_major_action}}
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <small>Learn more on</small> <a target="_blank" :href="`${bill.govtrack_url}`">Govtrack</a>
        </v-flex>
      </v-layout>
    </v-container>
    <v-progress-linear v-if="isLoading" indeterminate></v-progress-linear>
    <v-btn block v-if="results[0]" @click="getMore">Get More</v-btn>
  </div>     
</template>

<script>

import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState('bills/keyword', {
      results: state => state.bills.list,
      resultsSearchPhrase: state => state.bills.searchPhrase,
      isLoading: state => state.bills.isLoading
      // results: 'bills/search/results',
      // resultsSearchPhrase: 'bills/search/resultsSearchPhrase',
      // isLoading: 'bills/search/isLoading',
    }),
    newSearchPhrase: {
      get () {            
        return this.$store.getters['bills/keyword/newSearchPhrase'];
      },
      set (value) {
        this.$store.commit('bills/keyword/SET_NEW_SEARCH_PHRASE', value);        
      },
    }

  },
  methods: {
    submit(){     
      if (!this.newSearchPhrase) {
        alert('You have to search for something');
      } else {
        this.$store.dispatch('bills/keyword/FETCH_FIRST_PAGE');
      }
    },
    getMore () {
      this.$store.dispatch('bills/keyword/FETCH_NEXT_PAGE');
    }

  },
}
</script>

<style>

</style>
