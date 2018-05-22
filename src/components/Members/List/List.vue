<template>
  <v-container>
    <v-layout>
      <v-flex xs6 class="display-1" v-if="this.$route.name == 'Senate'">
        Senate Members
      </v-flex>
      <v-flex xs6 class="display-1" v-if="this.$route.name == 'House'">
        House Members
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs6 >
        <v-toolbar floating dense>
          <v-text-field
            class="ma-3" 
            append-icon="search" 
            hide-details 
            single-line
            v-model="filterPhrase"
            label="Filter by name" 
          ></v-text-field>
        </v-toolbar>
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
      senateMembers: 'members/senateMembers',
      senateIsLoading: 'members/senateIsLoading',
      houseMembers: 'members/houseMembers',
      houseIsLoading: 'members/houseIsLoading',
    }),
    membersList () {
      if (this.$route.name == 'Senate') {
        return this.senateMembers;
      } else if (this.$route.name == 'House') {
        return this.houseMembers;
      }
    },
    isLoading () {
      if (this.$route.name == 'Senate') {
        return this.senateIsLoading;
      } else if (this.$route.name == 'House') {
        return this.houseIsLoading;
      }
    },
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
