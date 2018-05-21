<template>
  <v-container>
    <v-layout >
      <h1>The Votes Page</h1>

      <v-container grid-list-sm mt-5>
        <v-layout column>
          <v-flex class="grey lighten-3" xs6 sm6 md6 pa-2 mb-2 v-for="(exp, i) in recentExplanations" :key="i">
            <v-layout>
              <v-flex  class="text-xs-left">
                <strong>{{exp.name}}</strong> <small>{{exp.party}} {{exp.state}}</small> <v-spacer></v-spacer> <span>{{exp.date}} </span>
              </v-flex>
              <v-flex offset-xs1 class="text-xs-right date"> 
                {{exp.category}}
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout mt-1>
              <v-flex>
                  {{exp.text}}
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    

  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters({
      recentExplanations: 'votes/recentExplanations'
    }),

  },
}
</script>

<style>

</style>
