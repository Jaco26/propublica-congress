<template>
  <div>
    <v-layout justify-center="">
      <v-flex>
        <v-text-field 
          class="ma-3"
          append-icon="search"
          single-line
          v-model="query"
          label="Search Bills"
          hide-details
        ></v-text-field>
      </v-flex>
      <v-flex>
        <v-btn flat color="info" @click="$emit('searchFor', {query})">
          Search 
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '', // keyword or phrase
    }
  },
}
</script>

