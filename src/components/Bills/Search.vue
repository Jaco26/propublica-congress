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
                v-model="searchPhrase" 
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
        <v-flex class="ma-4" v-for="(bill, i) in searchedBills" :key="i">
          <v-flex>
            <router-link :to="`/members/member/${bill.sponsor_id}`"><strong>{{bill.sponsor_name}}</strong></router-link> 
          {{bill.sponsor_party}}
          </v-flex>
          <small>Title:</small> {{bill.title}}
          <br>
          <small>Latest Major Action:</small> {{bill.latest_major_action}} 
          <br>
          <small>Latest Major Action Date:</small> {{bill.latest_major_action_date}}
        </v-flex>
        <v-btn @click="getMore">Get More</v-btn>
      </v-layout>

  </v-container>     
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  data () {
    return {
      searchPhrase: '',
    }
  },
  computed: {
    ...mapGetters({
      searchedBills: 'bills/searchedBills',
    }),

  },
  methods: {
    submit(){      
      this.$store.dispatch('bills/SEARCH_BILLS', {searchPhrase: this.searchPhrase});
    },
    getMore () {
      this.$store.dispatch('bills/SEARCH_BILLS');
    }

  }
}
</script>

<style>

</style>
