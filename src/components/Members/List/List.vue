<template> 
  <div
    id="scroll-target"
    class="scroll-y"  
  >
    <v-layout 
      column 
      v-scroll="onScroll"
      align-center
      justify-center
    >
      <v-layout class="mb-2">
        <v-flex xs12 class="display-1" v-if="this.$route.name == 'Senate'">
          Senate Members
        </v-flex>
        <v-flex xs12 class="display-1" v-if="this.$route.name == 'House'">
          House Members
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 id="filter-names">
          <v-toolbar  floating dense>
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

      <v-spacer></v-spacer>

      <v-layout>
        <v-flex>
          <div 
            v-for="letter in letters"
            :key="letter" 
            style="display: inline;"
            class="subheading"
          >
            <a @click="$vuetify.goTo(`#legislator-block-${letter}`, scrollOptions)">
              {{letter}}
            </a> 
            &nbsp;
          </div>
        </v-flex>
      </v-layout>

      <v-progress-linear v-if="isLoading" indeterminate></v-progress-linear>

    <transition name="return-to-top">
      <v-btn 
        v-if="offsetTop > 300" 
        id="back-to-top" 
        @click="$vuetify.goTo('#responsive-nav', scrollOptions)"
        color="accent"
      >
        Back to Top
      </v-btn>
    </transition>

      <block 
        v-for="letter in letters" 
        :key="letter" 
        :letter="letter"
        :membersList="members"
      />
       
    </v-layout>
  </div>  
</template>

<script>
import {mapGetters} from 'vuex';
import Block from './Block'
export default {
  name: 'List',
  components: {
    Block,
  },
  data () {
    return {
      chamber: '',
      selectedCongress: {title: '', description: ''},
      filterPhrase: '',
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      scrollOptions: {
        duration: 300,
        offset: -70,
        easing: 'easeInOutCubic',
      },
      offsetTop: 0,
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
    alphabeticalMembers (letter) {      
      return this.membersList.filter(member => member.last_name.toUpperCase().startsWith(letter));
    },
    onScroll (event) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;      
    }

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

#filter-names {
  position: sticky;
  top: 10px;
}

#back-to-top {
  position: fixed;
  bottom: 15px;
  right: 15px;
}

.return-to-top-enter-active, .return-to-top-leave-active {
  transition: opacity .5s;
}

.return-to-top-enter, .return-to-top-leave-to {
  opacity: 0;
}


</style>
