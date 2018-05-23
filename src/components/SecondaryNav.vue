<template>
   <v-card class="pa-3" prominent>
    <v-navigation-drawer stateless permanent floating value="true">
      <v-list dense class="pt-3">
        <v-list-tile v-for="item in items" :key="item.title" router :to="item.path">
          <v-list-tile-content>
            <v-list-tile-title class="subheading"><b> {{item.title}}</b> </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <div id="test-target">
        Hello
      </div>
      <v-divider></v-divider>
      <v-flex class="subheading" v-if="recentlyViewed">
        Recently Viewed:
      </v-flex>
      <v-layout wrap>
        <v-chip 
          v-for="item in recentlyViewed" 
          :key="item.path" 
          outline 
          label
          color="blue darken-2"
        >
          <router-link :to="item.path">{{item.title}}</router-link>
        </v-chip>
      </v-layout>
    </v-navigation-drawer>
  </v-card>
</template>

<script>

export default {
  props: ['items', 'recentlyViewed'],

}

</script>

<style>

</style>
