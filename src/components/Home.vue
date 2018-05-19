<template>
  <v-container>
    <v-layout>
      <v-flex m-2 xs12>
        <article> 
          <h1 class="headline">Welcome</h1>
          <v-flex mt-2> 
            <p> 
              <i>KnowThyCongress</i> is a way for you to interact with up to date historical data about the United States Congress.
              The data comes from Prorpublica's Congress API. Only a few pieces of functionality have been built out so far. Here is a summary
              of what is currently available: 
              <ul id="features-list">
                <li>
                  You can get a list of legislators organized by congress and 
                  chamber <router-link to="/members/list">here</router-link>.
                  <ul>
                    <li>
                      Each legislator's name is a clickable link to a "details" page <br>
                      about that legislator. For example, check out <router-link to="/members/member/E000288">Keith Ellison</router-link>
                    </li>
                    <li>
                      Each legislator's "details" page includes: a collapsible menu <br> 
                      summarizing all roles they have occupied during their time in <br>
                      congress, a button to toggle a list of recent bills they have <br>
                      cosponsored and a button to toggle a list of recent votes they <br>
                      have taken.
                    </li>
                  </ul>
                </li>
            
                <li>  
                  You can get a list of recent personal explanations by legislators about missed or <br>
                  mistaken votes in the Congressional Record <router-link to="/votes">here</router-link>.
                </li>

                <li>
                  You can search bills by keyword <router-link to="/bills/search">here</router-link>.  
                </li>

                <li>
                  You can get a list of recent bills by bill-type and chamber <router-link to="/bills/recent">here</router-link>.  
                </li>
                
              </ul>
              
            </p>
          </v-flex>
        </article>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>

import {mapGetters} from 'vuex';
export default {

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
