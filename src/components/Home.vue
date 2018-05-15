<template>
  <v-container>
    <v-layout>
      <v-flex m-2 xs12>
        <article> 
          <h1 class="headline">Welcome</h1>
          <v-flex mt-2> 
            <p> 
            <i>KnowThyCongress</i> is a way for you to interact with data Propublica's Congress API. 
            In other words, it is a way for you to interact with a ton of detailed current and historical information 
            about the United States Congress that escapes most media coverage. Most of the data is pretty mundane but 
            it includes some true gems.
          </p>
          <p> 
            For instance, the Propublica Congress database holds an up to date history of personal explanations lawmakers have
            made for missed or mistaken votes in the Congressional Record. <i>KnowThyCongress</i> gives you an easy way to see a list of those
            explanations, who made them, when, and even the category under which they are classified. Check it out below...
          </p>
          </v-flex>
        </article>
      </v-flex>
    </v-layout>

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

  </v-container>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
  data () {
    return {
    }
  },
  computed:{
    ...mapGetters({
      recentExplanations: 'votes/recentExplanations'
    }),

  },
  methods: {

  },
 
}
</script>

<style>

.date {
  color: #135458
}


</style>
