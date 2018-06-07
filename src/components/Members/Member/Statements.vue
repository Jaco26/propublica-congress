<template>
  <div>
    <work-in-progress :WIP="false" />
  <v-flex v-for="statement in statements" :key="statement.url">
    <a :href="statement.url" target="_blank">{{statement.title}}</a>
  </v-flex> 
  </div>
    
</template>

<script>
import WorkInProgress from '@/components/WIP';
export default {
  props: {
    statements: {
      type: Array,
      required: true
    }
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
