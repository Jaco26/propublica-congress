<template>
  <v-container>
    <v-layout>
      <v-flex>
        <work-in-progress :WIP="true"  />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WorkInProgress from '@/components/WIP';
export default {
  components: {
    WorkInProgress,
  },
}
</script>

<style>

</style>