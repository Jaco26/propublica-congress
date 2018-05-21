<template>
  <v-container>
    <v-layout row >
    <!-- I need a form for users to select:
      1: congress, 2: chamber, 3: type -->
      <v-flex class="grey lighten-4" >
        <v-form class="">
          <v-layout align-center justify-center>
            <v-flex class="pl-4" xs4>
              <v-radio-group row v-model="chamber">
                <v-radio label="Senate" value="senate"></v-radio>
                <v-radio label="House" value="house"></v-radio>
                <!-- <v-radio label="Both" value="both"></v-radio> -->
              </v-radio-group>
            </v-flex>
            <v-flex xs2 class="mr-3">
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
            <v-flex xs2>
              <v-btn @click="submit">Submit</v-btn>
            </v-flex>

            <v-spacer></v-spacer>
         
            <v-flex v-if="membersList[0]">
              <v-layout class="pa-1" align-center justify-center>
                <v-toolbar flat xs8>
                  <v-text-field v-model="filterPhrase" label="filter results"></v-text-field>
                </v-toolbar>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>

    <v-progress-linear v-if="isLoading" indeterminate></v-progress-linear>

    <v-container grid-list-sm>
      <v-layout wrap>
        <v-flex xs6 sm3 class="ma-4" v-for="(member, i) in members" :key="i">
          <router-link :to="`/members/member/${member.id}`"><strong>{{member.first_name}} {{member.last_name}}</strong></router-link>   <br>
          {{member.state}}  {{member.party}}
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
      chamber: '',
      selectedCongress: {title: '', description: ''},
      filterPhrase: '',
    }
  },
  methods: {
    submit () {
      let {congress, chamber} = this.searchParams;
      if(!congress || !chamber){
        alert('NO!')
      } else {
        this.$store.dispatch('members/list/FETCH_CONGRESS_MEMBERS', this.searchParams);
      }
    },

  },
  computed: {
    ...mapGetters({
      congressFunc: 'fillers/congressFunc',
      membersList: 'members/list/list',
      isLoading: 'members/list/isLoading',
    }),
    congress () {
      if (this.chamber == 'house') {
        return this.congressFunc(102);
      } else if (this.chamber == 'senate') {
        return this.congressFunc(80);
      } else {
        return [{title: 'Select a chamber'}];
      }
    },
    searchParams () {
      return {
        chamber: this.chamber,
        congress: this.selectedCongress.title,
      };
    },
    members () {
      if (this.filterPhrase == '') {
        return this.membersList;
      } else {
        return this.membersList.filter(member => {
          let re = new RegExp(this.filterPhrase, 'gi');
          return member.first_name.match(re) || member.last_name.match(re); 
        });
      }
    },


  },
  
}
</script>

<style>

</style>
