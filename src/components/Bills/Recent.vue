<template>
  <v-container>
    <v-layout row >
    <!-- I need a form for users to select:
      1: congress, 2: chamber, 3: type -->
      <v-flex class="grey lighten-4" >
        <v-form class="pa--">
          <v-layout>
            <v-flex class="px-4">
              <v-radio-group v-model="chamber" class=" ">
                <v-radio label="Senate" value="senate"></v-radio>
                <v-radio label="House" value="house"></v-radio>
                <v-radio label="Both" value="both"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex class="px-2" xs4>
              <v-select 
                :items="billTypes"
                v-model="selectedType"
                :hint="`${selectedType.description}`"
                persistent-hint
                item-text="title"
                label="Bill type"
                single-line 
              ></v-select>
            </v-flex>

            <v-flex class="px-2" xs4>
              <v-select 
                :items="congress"
                v-model="selectedCongress"
                :hint="`${selectedCongress.hint}`"
                persistent-hint
                item-text="n"
                label="Congress"
                single-line 
              ></v-select>
            </v-flex>
            <v-btn @click="submit">Submit</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>

    <v-layout column>
      <v-flex class="ma-4" v-for="(bill, i) in recentBills" :key="i">
        <v-flex>
          <router-link :to="`/members/member/${bill.sponsor_id}`"><strong>{{bill.sponsor_name}}</strong></router-link> 
        {{bill.sponsor_party}}
        </v-flex>

        <small>Title:</small> {{bill.title}}
        <br>
        <small>Latest Major Action:</small> {{bill.latest_major_action}} 
        <br>
        <small>Latest Major Action Date:</small> {{bill.latest_major_action_date}}

      </v-flex>
    </v-layout>

  </v-container>
  
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      message: '',
      chamber: '',
      selectedType: {title: '', description: ''},
      selectedCongress: {n: '', hint: ''},
      billTypes: [
        {title: 'introduced', description: 'Get bills ordered by the date they were introduced'},
        {title: 'updated', description: 'Get bills ordered by the latest date they were updated'},
        {title: 'active', description: 'Get bills that have seen action beyond indtroduction and committee referral. Order them by the latest major action date.'},
        {title: 'passed', description: 'Get bills ordered by the date they were passed'},
        {title: 'enacted', description: 'Get bills ordered by the date they were enacted'},
        {title: 'vetoed', description: 'Get bills ordered by date they were vetoed'},
      ],
      congress: [
        {n: '115', hint: 'In session from 2017-2018'},
        {n: '114', hint: 'In session from 2015-2016'},
        {n: '113', hint: 'In session from 2013-2014'},
        {n: '112', hint: 'In session from 2011-2012'},
        {n: '111', hint: 'In session from 2009-2010'},
        {n: '110', hint: 'In session from 2007-2008'},
        {n: '109', hint: 'In session from 2005-2006'},
        {n: '108', hint: 'In session from 2003-2004'},
        {n: '107', hint: 'In session from 2001-2002'},
        {n: '106', hint: 'In session from 1999-2000'},
        {n: '105', hint: 'In session from 1997-1998'},  
      ]
    }
  },
  computed: {
    searchParams () {
      return {
        congress: this.selectedCongress.n,
        chamber: this.chamber,
        type: this.selectedType.title,
      }      
    },
    ...mapGetters({
      recentBills: 'bills/recentBills',
    }),
    

  },
  methods: {
    submit () {
      let {congress, chamber, type} = this.searchParams;
      if(!congress || !chamber || !type){
        alert('NO!')
      } else {
        this.$store.dispatch('bills/FETCH_RECENT', this.searchParams);
      }
      
    }
  }

}
</script>

<style>

</style>
