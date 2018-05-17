<template>
  
        <v-container  fluid grid-list-md>
          <v-flex xs6 >
            <v-layout column>
              <v-flex mt-4 v-for="bill in searchedBills" :key="bill.bill_id">
                {{bill.title}}
                {{bill.introduced_date}}
              </v-flex> 
            </v-layout>
          </v-flex>
        </v-container>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      searchedBills: 'bills/searchedBills',
    }),

  },
}
</script>

<style>

</style>
