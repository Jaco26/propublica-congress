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
                :hint="`${selectedCongress.description}`"
                persistent-hint
                item-text="title"
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
      selectedCongress: {title: '', description: ''},
    }
  },
  computed: {
    searchParams () {
      return {
        congress: this.selectedCongress.title,
        chamber: this.chamber,
        type: this.selectedType.title,
      }      
    },
    ...mapGetters({
      recentBills: 'bills/recentBills',
      congressFunc: 'fillers/congressFunc',
      billTypes: 'fillers/billTypes',
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
        this.$store.dispatch('bills/FETCH_RECENT', this.searchParams);
      }
      
    }
  }

}
</script>

<style>

</style>
