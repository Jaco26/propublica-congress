<template>
  <v-container>
    <v-layout>
      
      <v-flex m-2 xs5>
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

      <v-flex offset-xs1 xs6 >
        <div mt-3 v-for="(exp, i) in recentExplanations" :key="i">
          {{exp.name}} {{exp.party}} {{exp.state}} {{exp.date}} 
            {{exp.category}} {{exp.text}}
            <v-divider></v-divider>
        </div>  
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      items: [
          { header: 'Today' },
          { avatar: '/static/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { divider: true, inset: true },
          { avatar: '/static/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
          { divider: true, inset: true },
          { avatar: '/static/doc-images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" }
        ]
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



</style>
