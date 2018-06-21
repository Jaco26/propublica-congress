<template>
  <v-toolbar-items style="min-width: 600px;">
    <v-text-field 
      class="mx-3"
      append-icon="search"
      single-line
      v-model="query"
      label="Search Bills"
      hide-details
    ></v-text-field>
    <v-btn  color="info" @click="$emit('searchFor', {query})">
      Search 
    </v-btn>    
  </v-toolbar-items>
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

