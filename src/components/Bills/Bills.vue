<template>
  <v-container>
    <h1>The Bills Page</h1>
    <v-flex xs8 sm4>
      <v-text-field 
      id="search-bills"
      name="search-bills"
      label="Search Bills"
      v-model="searchPhrase" />
      <v-btn @click="submit">Submit</v-btn>
    </v-flex>   

    <v-container fluid grid-list-md>
      <v-flex offset-xs3 xs6>
        <v-layout column>
          <v-flex mt-4 v-for="bill in searchedBills" :key="bill.bill_id">
            {{bill.title}}
            {{bill.introduced_date}}
          </v-flex> 
        </v-layout>
      </v-flex>
      
    </v-container>
    
     
    

  </v-container>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      searchPhrase: ''
    }
  },
  methods: {
    submit(){      
      this.$store.dispatch('bills/SEARCH_BILLS', this.searchPhrase);
    }
  },
  computed: {
    ...mapGetters({
      searchedBills: 'bills/searchedBills',
    }),

  }
}
</script>

<style>

</style>