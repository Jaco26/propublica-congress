<template>
  <v-container>
    <v-layout>
      <v-flex sm4>
          <bills-nav />
      </v-flex>
      <v-flex xs12 sm8 class="primary lighten-4" >

        <router-view ></router-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import {mapGetters} from 'vuex';


import BillsNav from './BillsNav'
export default {
  components: {
    BillsNav,
  },
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

  },


}
</script>

<style>

</style>