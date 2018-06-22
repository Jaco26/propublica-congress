<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="headline"> 
        Recent Votes
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- If the screen is larger than xs (v-if) -->
      <v-toolbar-items v-if="$vuetify.breakpoint.name != 'xs'">
        <v-tabs color="transparent" v-model="active" slider-color="purple">
          <v-tab 
            v-if="!tab.loading" 
            v-for="tab in tabs" 
            :key="tab.title" 
            :to="tab.path">
            {{tab.title}}
          </v-tab>
        </v-tabs>
      </v-toolbar-items>
      <!-- If the screen is xs (v-if) -->
      <v-menu v-else>
        <v-btn icon slot="activator">
          <v-icon >more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="tab in tabs" :key="tab.title" router :to="tab.path">
            <v-list-tile-title v-if="!tab.loading">
              {{tab.title}}
            </v-list-tile-title>
          </v-list-tile> 
        </v-list>
      </v-menu>
    </v-toolbar>
  
    <router-view></router-view>    
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {FETCH_RECENT_VOTES} from '@/store/modules/Votes/vote-types'
import ChamberRecnetVotes from './ChamberRecentVotes'
export default {
  components: {
    ChamberRecnetVotes
  },
  data () {
    return {
      active: null,
      tabs: [
        { title: 'House', path: `/votes/recent/house` },
        { title: 'Senate', path: `/votes/recent/senate` },
        { title: 'Both Chambers', path: `/votes/recent/both-chambers` },
      ],
    }
  },
  computed: {
    ...mapState('votes', {
      houseVotes: state => state.recentVotes.house.list,
      senateVotes: state => state.recentVotes.senate.list,
      bothVotes: state => state.recentVotes.both.list,
    }),
  },
  methods: {
    ...mapActions('votes', {
      fetchRecent: FETCH_RECENT_VOTES
    }),
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.fetchRecent({chamber: 'house'});
      vm.fetchRecent({chamber: 'senate'});
      vm.fetchRecent({chamber: 'both'});
    })
  }
}
</script>

<style>

</style>
