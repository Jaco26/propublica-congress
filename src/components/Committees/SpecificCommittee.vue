<template>
  <work-in-progress :WIP="true" />
</template>

<script>
import WorkInProgress from '@/components/WIP';
export default {
  components: {
    WorkInProgress
  },
  beforeRouteEnter (to, from, next) {
    console.log(to);
    next()
    
  }
}
</script>

<style>

</style>
