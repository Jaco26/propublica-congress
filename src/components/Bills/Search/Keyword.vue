<template>
  <div>
    <v-text-field 
      class="ma-3"
      append-icon="search"
      single-line
      v-model="query"
      label="Search Bills"
      hide-details
    ></v-text-field>
    <v-radio-group v-model="dir">
      <v-radio 
        v-for="option in options.dir" 
        :key="option.value" 
        :label="option.description"
        :value="option.value"
      ></v-radio>
    </v-radio-group>
    <v-btn flat color="info" @click="$emit('searchFor', {query, dir})">
      Search 
    </v-btn> 
  </div>
</template>

<script>
// import {FETCH_SEARCH} from '@/store/modules/Bills/Search/search.bill.types'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      query: '', // keyword or phrase
      dir: '', // "asc" or "desc" (default is "desc")
      options: {
        dir: [
          {description: 'Order by most recent to older', value: 'desc'},
          {description: 'Order by oldest to more recent', value: 'asc'},
        ]
      }
    }
  },
}
</script>

