<template>
  <div>
    <v-jumbotron height="300"  color="grey lighten-2">
      <v-container>
        <v-layout wrap>
          <v-flex>
            <h1 class="display-2">Welcome</h1>
          </v-flex>
          <v-flex class="my-4 title ">
            <i>KnowThyCongress</i>, powered by from the <a href="https://projects.propublica.org/api-docs/congress-api/" target="_blank">Propublica Congress API</a>, 
            gives you access to current and historical data about the goings on at The Capital. This project is far from finished
            but here a few sections that are useable as of now.
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    

      <v-container fluid grid-list-md>
        <v-layout wrap>
          <v-flex 
            d-flex
            v-for="(card) in cards" 
            :key="card.title"
            xs12
            sm6
          >
            <v-card color="grey lighten-3">
              <v-card-title class="title">
                {{card.title}}
              </v-card-title>
              <v-card-text class="subheading">
                {{card.text}}
              </v-card-text>
              <v-card-actions fill-height>
                <v-btn
                  v-for="action in card.actions" :key="action.path"
                  flat color="purple darken-4"  :to="action.path"
                >
                  {{action.title}}
                </v-btn>
              </v-card-actions>          
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      cards: [
        {
          title: 'Current Legislators',
          text: 'Get a list of current legislators. Each name is a clickable link that will take you to a page with tabs that will show information about recent votes, cosponsored bills and statements associated with a given legislator.',
          actions: [
            {
              title: 'Senate',
              path: '/members/senate'
            },
            {
              title: 'House',
              path: '/members/house'
            }
          ]
        },
        {
          title: 'Bills By Keyword',
          text: 'Search bills by keyword. The search will bring back the 20 most recent bills whose title or body contain a match. Searches cover House and Senate bills from the 113th Congress through 115th.',
          actions: [
            {
              title: 'Search Bills',
              path: '/bills'
            }
          ]
        },
        {
          title: 'Recent Explanations',
          text: 'See a list of recent personal explanations given by legislators about missed or mistaken votes on the congressional record',
          actions: [
            {
              title: 'Explanations',
              path: '/votes/explanations'
            }
          ]
        },
        {
          title: 'Recent Votes',
          text: 'Get a list of recent votes from the House, Senate or both chambers.',
          actions: [
            {
               title: 'See Votes',
               path: '/votes/recent'
            }
           
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

  #features-list {
    margin: 30px
  }

   #features-list li {
    margin: 10px;
  }


</style>
