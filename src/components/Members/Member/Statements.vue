<template>
  <div>
    <v-card>
      <h1>Statements</h1>
      <v-layout v-if="statementsLoading" >
        <v-progress-linear indeterminate color="primary"></v-progress-linear>
      </v-layout>

      <div v-if="!statementsLoading">
        <v-flex v-for="statement in statements" :key="statement.url">
          <a :href="statement.url" target="_blank">{{statement.title}}</a>
        </v-flex> 
      </div>
    </v-card>
  </div> 
</template>

<script>
// Vuex
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState('members/specificMember', {
      statements: state => state.statements.list,
      statementsLoading: state => state.statements.loading,
    })
  } 
}
</script>

<style>

</style>
