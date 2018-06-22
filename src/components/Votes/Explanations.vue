<template>
  <v-container>
    <error-alert v-if="errorMessage && !loading" :errorMessage="errorMessage" ></error-alert>
    <v-layout v-if="!errorMessage && !loading">
      <v-container grid-list-sm >
        <v-layout>
          <v-flex class="subheading">
            This is a list of recent personal explanations by legislators about missed or 
            mistaken votes in the Congressional Record
          </v-flex>
        </v-layout>
        <v-layout class="mt-4" column>
          <v-flex class="grey lighten-3" xs6 sm6 md6 pa-2 mb-2 v-for="(exp, i) in recentExplanations" :key="i">
            <v-layout>
              <v-flex  class="text-xs-left">
                <strong>{{exp.name}}</strong> <small>{{exp.party}} {{exp.state}}</small> <v-spacer></v-spacer> <span>{{exp.date}} </span>
              </v-flex>
              <v-flex offset-xs1 class="text-xs-right date"> 
                {{exp.category}}
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout mt-1>
              <v-flex>
                  {{exp.text}}
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    

  </v-container>
</template>

<script>
import WorkInProgress from '@/components/WIP';
import ErrorAlert from '@/components/Shared/ErrorAlert'
import {mapState, mapActions} from 'vuex';
import {FETCH_REC_EXPLAN} from '@/store/modules/Votes/vote-types'
export default {
  components: {
    WorkInProgress,
    ErrorAlert,
  },
  computed:{
    ...mapState('votes', {
      recentExplanations: state => state.recentExplanations.list,
      errorMessage: state => state.recentExplanations.errorMessage,
      loading: state => state.recentExplanations.loading,
    }),
  },
  methods: {
    ...mapActions('votes', {
      fetchRecentExplanations: FETCH_REC_EXPLAN,
    }),
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm);
      
      vm.fetchRecentExplanations({congress: '115'});
    });
  }
}
</script>

<style>

</style>
