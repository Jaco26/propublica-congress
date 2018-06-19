<template>
  <div>
    <h1>Search Bills</h1>
    <select v-model="selectedSearchType" value="" style="background-color: beige; color: #112211;">
      <option v-for="type in searchTypes" :key="type" :value="type"> {{type}} </option>
    </select>
    <br>
    <br>
    <hr>

    <div v-if="selectedSearchType == 'keyword'">
      Search By Keyword
      <bill-keyword-search @searchFor="fetchSearch"></bill-keyword-search>
    </div>
    <div v-if="selectedSearchType == 'recent'">
      Search By Recent
    </div>
    <div v-if="selectedSearchType == 'subject'">
      Search By Subject
    </div>
    <div v-if="selectedSearchType == 'upcoming'">
      Search Upcoming
    </div>
    
  </div>
</template>

<script>
// Components
import Keyword from './Keyword'
// Vuex
import {FETCH_RECENT, FETCH_SEARCH} from '@/store/modules/Bills/Search/search.bill.types'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    billKeywordSearch: Keyword,
  },
  data () {
    return {
      searchTypes: ['keyword', 'recent', 'subject', 'upcoming'],
      selectedSearchType: '',
      searchParams: {
        recent: {
          congress: '', // 105-115
          chamber: '', // "house", "senate" or "both"
          type: '', // "introduced", "updated", "active", "passed", "enacted", "vetoed"
        },
        subject: {
          subject: '' // A slug version of a legislative subject, displayed as url_name in subject responses
        },
        upcoming: {
          chamber: '', // "house" or "senate"
        },
      },
      selectOptions: {
       
        recent: {
          congress: this.congressFunc(105),
          chamber: [
            {title: 'House', value: 'house'},
            {title: 'Senate', value: 'senate'},
            {title: 'Both', value: 'both'},
          ],
          type: [
             {title: 'Introduced', value: 'introduced'},
             {title: 'Updated', value: 'updated'},
             {title: 'Active', value: 'active'},
             {title: 'Passed', value: 'passed'},
             {title: 'Enacted', value: 'enacted'},
             {title: 'Vetoed', value: 'vetoed'},
          ]
        },
        upcoming: {
          chamber: [
            {title: 'House', value: 'house'},
            {title: 'Senate', value: 'senate'},
          ]
        }
      }  
    };
  },
  methods: {
    ...mapActions('bills', {
      fetchRecentBills: FETCH_RECENT,
      fetchSearch: FETCH_SEARCH,
    }),
    seeThis (event) {
      console.log(event);
    },
    congressFunc (earliestCongress) {
      let currentCongress = 115
      let year1 = 2017;
      let year2 = 2018;
      let resultArray = [];
      for (let i = currentCongress; i >= earliestCongress; i--) {
        let congressObj = {
          title: i.toString(),
          description: `In session from ${year1}-${year2}`
        };
        resultArray.push(congressObj);
        year1 -= 2;
        year2 -= 2;
      }
      return resultArray;
    },
  },
  
}
</script>
