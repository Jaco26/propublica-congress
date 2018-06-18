<template>
  <div>
    <h1>Search Bills</h1>
    <select v-model="selectedSearchType" style="background-color: blue; color: white;">
      <option v-for="type in searchTypes" :key="type" :value="type"> {{type}} </option>
    </select>
    <div v-if="selectedSearchType == 'keyword'">
      Search By Keyword
      <select name="" id=""></select>
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
import {FETCH_RECENT} from '@/store/modules/Bills/Search/search.bill.types'
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      searchTypes: ['keyword', 'recent', 'subject', 'upcoming'],
      selectedSearchType: '',
      searchParams: {
        keyword: {
          query: '', // keyword or phrase
          sort: '', // "_score" or "date" (default is "date")
          dir: '', // "asc" or "desc" (default is "desc")
        },
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
        keyword: {
          sort: [
            {title: 'Score', value: '_score'},
            {title: 'Date', value: 'date'}
          ],
          dir: [
            {title: 'Descending', value: 'desc'},
            {title: 'Ascending', value: 'asc'},
          ]
        },
        recent: {
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
  computed: {
    ...mapState('bills', {
      searchTypes: state => state.searchBills.searchTypes,
    }),
  },
  mounted () {
    console.log(this.searchTypes);
    
  }
}
</script>
