<template>

    <v-flex>
      <v-layout >
        <v-flex xs10 sm6 lg6>
          <router-link :to="`/committees/${committee.code}`"><strong>{{committee.name}} </strong> </router-link> <br>
          {{dates}} 
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex  v-if="committee.title">
          <small><b>Title:</b></small> {{committee.title}} 
            &nbsp;
          <small><b>Side:</b></small> {{committee.side}} 
            &nbsp;
          <small><b>Rank in Party:</b></small> {{committee.rank_in_party}} 
        </v-flex> 
        <v-spacer></v-spacer>
      </v-layout>
    </v-flex>
</template>

<script>
export default {
  props: ['committee'],
  data () {
    return {
      open: false,
      btnOpen: 'info',
      btnClose: 'accent',
    }
  },
  computed: {
    dates () {
      if (this.committee.begin_date && this.committee.end_date) {
        return `${new Date(this.committee.begin_date).toDateString()}
       - ${new Date(this.committee.end_date).toDateString()}`;
      }
    },
  },
  methods: {
    toggle () {
      this.open = !this.open;
    },
  }
}
</script>

<style>

</style>
