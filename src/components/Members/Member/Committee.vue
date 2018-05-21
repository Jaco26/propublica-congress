<template>
  <v-container >
    <!-- <v-divider></v-divider> -->
    <v-flex offset-xs1>
    <v-layout >
      <v-flex xs10 sm6 lg4>
        <router-link :to="`/committees/${committee.code}`"><strong>{{committee.name}} </strong> </router-link> <br>

         {{dates}} 
      </v-flex>
      <v-layout column align-start>
        <v-btn :color="open ? btnClose: btnOpen" flat icon @click="toggle"> 
          <v-icon v-if="!open">expand_more</v-icon> 
          <v-icon v-if="open">expand_less</v-icon>
        </v-btn>
      </v-layout>
    </v-layout>
   
    
    <v-layout>
      <v-flex v-show="open">
        <!-- <router-link :to="`/committees/${committee.code}`">Learn More</router-link> -->
        <small><b>Title:</b></small> {{committee.title}} <br>
        <small><b>Side:</b></small> {{committee.side}} <br>
        <small><b>Rank in Party:</b></small> {{committee.rank_in_party}} <br>
      </v-flex>
    </v-layout>
    </v-flex>
    
   
  </v-container>
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
