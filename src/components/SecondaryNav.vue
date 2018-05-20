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
    </v-navigation-drawer>
  </v-card>
</template>

<script>

export default {
  props: ['items'],
  // data () {
  //   return {
  //     sideNav: false,
  //   }
  // }
}

</script>

<style>

</style>
