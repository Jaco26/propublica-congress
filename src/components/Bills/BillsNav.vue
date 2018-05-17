<template>
   <v-card class="pa-3">
    <v-navigation-drawer stateless permanent floating value="true">
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
        { title: 'Search Bills', route: '/bills/search' },
        { title: 'Get Recent Bills', route: '/bills/recent' },
        { title: 'Get Upcoming Bills', route: '/bills/upcoming' },
          
      ],
      

    }
  },
  methods: {
    
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
