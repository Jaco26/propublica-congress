<template>

  
   <v-card class="pa-3">
    <v-navigation-drawer stateless permanent floating value="true">
    
        <!-- <v-layout class="pt-3">
          <v-flex xs8>
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
        </v-layout> -->
      <v-list dense class="pt-3">
        <v-list-tile v-for="item in items" :key="item.title" router :to="item.route">
          <v-list-tile-content>
            <v-list-tile-title class="subheading"> {{item.title}} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>

export default {
  data () {
    return {
      items: [
          { title: 'Get Recent Bills', route: '/bills/recent' },
          { title: 'Get Upcoming Bills', route: '/bills/upcoming' }
        ],
      searchPhrase: '',

    }
  },
  methods: {
    submit(){      
      this.$store.dispatch('bills/SEARCH_BILLS', this.searchPhrase);
    },
    getRecent () {
      this.$store.dispatch('bills/FETCH_RECENT');
    },
    getUpcoming () {
      this.$store.dispatch('bills/FETCH_UPCOMING');
    },
  },
 
}
</script>

<style>

</style>
