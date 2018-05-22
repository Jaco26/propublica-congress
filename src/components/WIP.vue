<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex v-if="WIP" class="display-3">
        Work In Progress
      </v-flex>
      <v-flex v-if="MTC" class="display-3">
        More To Come Soon
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['WIP', 'MTC']
}
</script>

<style>

</style>
