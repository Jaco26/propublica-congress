<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10>
         <v-layout justify-center>
              <v-toolbar-title class="headline">Search Recent Bills</v-toolbar-title>
            </v-layout>
        <form @submit.prevent="submit" class="mt-3">
          <v-toolbar prominent id="tool-tool">
            <v-select
              class="ma-2"
              :items="chambers"
              v-model="selectedChamber"
              item-text="title"
              label="Chamber"
              single-line
              hide-details
            ></v-select>
            <v-select
              class="ma-2"
              :items="billTypes"
              v-model="selectedType"
              item-text="title"
              label="Bill type"
              single-line
              hide-details
            ></v-select>
            <v-select 
              class="ma-2"
              :items="congress"
              v-model="selectedCongress"
              item-text="title"
              label="Congress"
              single-line
              hide-details=""
            ></v-select>
            <v-btn @click="submit">Submit</v-btn>
            
          </v-toolbar>
        </form>
      </v-flex>
    </v-layout>


    <v-container grid-list-sm mt-4>
        <v-layout column>
          <v-flex class="grey lighten-3" xs6 sm6 md6 pa-2 mb-2 v-for="(bill, i) in recentBills" :key="i">
            <v-layout>
              <v-flex  class="text-xs-left">
                <router-link :to="`/members/member/${bill.sponsor_id}`"><strong>{{bill.sponsor_name}}</strong></router-link> 
                 <small> {{bill.sponsor_party}}, {{bill.sponsor_state}} </small> 
              </v-flex>
              <v-flex offset-xs1 class="text-xs-right date"> 
                Last Major Action Date: {{bill.latest_major_action_date}}
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
             <v-layout v-if="bill.title">
               <v-flex v-if="bill.title">
                 <small><b>Bill Title:</b></small> {{bill.title}}
              </v-flex>
            </v-layout>
            <v-layout v-if="bill.latest_major_action">
               <v-flex>
                 <small><b>Latest Major Action:</b></small> {{bill.latest_major_action}}
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
           <small>Learn more on</small> <a target="_blank" :href="`${bill.govtrack_url}`">Govtrack</a>
          </v-flex>
        </v-layout>
      </v-container>
      
      <v-progress-linear v-if="isLoading" indeterminate></v-progress-linear>
      <v-btn block v-if="recentBills[0]" @click="getNextPage">Get More</v-btn>

  </v-container>
  
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      fab: false,
      message: '',
      selectedChamber: {title: '', description: ''},
      selectedType: {title: '', description: ''},
      selectedCongress: {title: '', description: ''},
    }
  },
  computed: {
    searchParams () {
      return {
        congress: this.selectedCongress.title,
        chamber: this.selectedChamber.title.toLowerCase(),
        type: this.selectedType.title,
      }      
    },
    ...mapGetters('bills/recent', {
      recentBills: 'bills',
      isLoading: 'isLoading'
    }),
    ...mapGetters('fillers', {
      congressFunc: 'congressFunc',
      billTypes: 'billTypes',
      chambers: 'chambers'
    }),
    congress () {
      return this.congressFunc(105);
    } 
    

  },
  methods: {
    submit () {
      let {congress, chamber, type} = this.searchParams;
      if(!congress || !chamber || !type){
        alert('NO!')
      } else {
        this.$store.dispatch('bills/recent/FETCH_BILLS', this.searchParams);
      }
    },
    getNextPage () {
      this.$store.dispatch('bills/recent/FETCH_BILLS');
    }
  }

}
</script>

<style scoped>

.chamber-not-selected {
  background-color: rgb(190, 111, 111) !important;
  color: white;
}

.chamber-selected {
  background-color: rgb(106, 196, 106) !important;
  color: black;
}

</style>
