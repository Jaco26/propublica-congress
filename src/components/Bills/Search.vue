<template>
  <v-container>
    <v-layout row >
    <!-- I need a form for users to select:
      1: congress, 2: chamber, 3: type -->
      <v-flex class="grey lighten-4" >
        <v-form @submit.prevent="submit" class="pa-2">
          <v-layout class="pt-3">
            <v-flex xs12>
              <v-text-field
                id="search-bills"
                name="search-bills"
                label="Search Bills"
                v-model="newSearchPhrase" 
                append-icon="search"
              />
            </v-flex>
            <v-flex xs4 align-content-end>
              <v-btn light @click="submit">Submit</v-btn>
            </v-flex>
          </v-layout>
          </v-form>
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
            <!-- <v-layout v-if="bill.summary" mt-1>
              <v-flex>
                 <small><b>Bill Summary:</b></small> {{bill.summary}}
              </v-flex>
            </v-layout> -->
            <v-divider></v-divider>
           <small>Learn more on</small> <a target="_blank" :href="`${bill.govtrack_url}`">Govtrack</a>
          </v-flex>
        </v-layout>
      </v-container>
      <v-progress-linear v-if="isLoading" indeterminate></v-progress-linear>
      <v-btn block v-if="results[0]" @click="getMore">Get More</v-btn>
  </v-container>     
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      results: 'bills/search/results',
      resultsSearchPhrase: 'bills/search/resultsSearchPhrase',
      isLoading: 'bills/search/isLoading',
    }),
    newSearchPhrase: {
      get () {            
        return this.$store.getters['bills/search/newSearchPhrase'];
      },
      set (value) {
        this.$store.commit('bills/search/SET_NEW_SEARCH_PHRASE', value);        
      },
    }

  },
  methods: {
    submit(){     
      if (!this.newSearchPhrase) {
        alert('You have to search for something');
      } else {
        this.$store.dispatch('bills/search/FETCH_FIRST_PAGE');
      }
    },
    getMore () {
      this.$store.dispatch('bills/search/FETCH_NEXT_PAGE');
    }

  },
}
</script>

<style>

</style>
