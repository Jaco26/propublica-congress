<template>
  <div>
    <v-layout v-if="statementsLoading" >
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </v-layout>
    <div v-if="!statementsLoading">
      <work-in-progress :WIP="false" />
      <v-flex v-for="statement in statements" :key="statement.url">
        <a :href="statement.url" target="_blank">{{statement.title}}</a>
      </v-flex> 
    </div>
  </div>
  
    
</template>

<script>
import WorkInProgress from '@/components/WIP';
export default {
  props: {
    statements: {
      type: Array,
      required: true
    },
    statementsLoading: Boolean,
  },
  components: {
    WorkInProgress
  },
  computed: {
    statementTitle () {
      return 
    }
  }
}
</script>

<style>

</style>
