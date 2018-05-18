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


      <v-layout column>
        <v-flex class="headline" v-if="results[0]" >
          Results for <strong><i>{{resultsSearchPhrase}}</i></strong> 
        </v-flex>
        <v-flex class="ma-4" v-for="(bill, i) in results" :key="i">
          <v-flex>
            <router-link :to="`/members/member/${bill.sponsor_id}`"><strong>{{bill.sponsor_name}}</strong></router-link> 
          {{bill.sponsor_party}}
          </v-flex>
          <small>Title:</small> {{bill.title}}
          <br>
         <small>Bill Summary:</small> {{bill.summary}}
          <br>
          <small>Latest Major Action:</small> {{bill.latest_major_action}} 
          <br>
          <small>Latest Major Action Date:</small> {{bill.latest_major_action_date}}
          <br>
          <small>Learn more on</small> <a target="_blank" :href="`${bill.govtrack_url}`">Govtrack</a>
        </v-flex>
        <v-progress-linear v-if="isLoading" :indeterminate="true"></v-progress-linear>
        <v-btn v-if="results[0]" @click="getMore">Get More</v-btn>
      </v-layout>

  </v-container>     
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  // data () {
  //   return {
  //   }
  // },
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
