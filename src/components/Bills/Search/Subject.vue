<template>
  <div>
    <v-text-field 
        class="ma-3"
        append-icon="search"
        single-line
        v-model="query"
        label="Search all bill subjects"
        hide-details
      ></v-text-field>
      <v-btn >Submit</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { FETCH_RECENT_SUBJECTS, 
  FETCH_SUBJECTS_BY_KEYWORD, 
  FETCH_POPULAR_SUBJECTS,
  FETCH_SUBJECTS_BY_LETTER } from '@/store/modules/Bills/Search/search.bill.types'
export default {
  data () {
    return {
      keyword: '',
      letter: '',
      popularity: ''
    }
  },
}
</script>
