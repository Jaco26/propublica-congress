<template>
   <v-container grid-list-md>
    <h1>Votes!</h1>
    <v-layout wrap>
      <v-flex v-for="i in 39" :key="i">
        {{i}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    getVotes(member){
      this.$store.dispatch('FETCH_VOTES', member);
    },
   
  }
}
</script>

<style>

</style>
