<template>
  <v-flex xs12 :class="{active: open}">
    <v-layout>
      <v-flex xs12>
        <h2>{{role.title}} <small>{{role.state}} {{role.party}} </small> </h2> {{dates}}
      </v-flex>
      <v-layout column align-end>
        <v-btn :color="open ? btnClose: btnOpen" flat icon  @click="toggle"> 
          <v-icon  v-if="!open">add</v-icon> 
          <v-icon v-if="open">remove</v-icon> 
        </v-btn>
      </v-layout>
    </v-layout>
      
    <v-layout row >
        <v-flex v-show="open" >
          <small><b>Bills Sponsored:</b></small> {{role.bills_sponsored}} <br>
          <small><b>Bills Cosponsored:</b></small> {{role.bills_cosponsored}} <br>
          <small><b>Missed Votes Pct:</b></small> {{role.missed_votes_pct}}% <br>
          <small><b>Votes With Party:</b></small> {{role.votes_with_party_pct}}% <br>
          <div v-if="role.district">
            <small><b>District:</b></small> {{role.district}}
          </div>
          <br>
          <v-flex v-if="committees[0]">
            <h2>Committees</h2>
          <ul>
            <committee 
              v-for="(committee, j) in committees" 
              :key="j"
              :committee="committee" 
            />
          </ul>
          </v-flex>
        </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import Committee from './Committee';
export default {
  props: ['role'],
  components: {
    Committee,
  },
  data () {
    return {
      open: false,
      btnOpen: 'info',
      btnClose: 'accent',
    }
  },
  computed: {
    committees () {
      return this.role.committees;
    },
    dates () {
      return `${new Date(this.role.start_date).toDateString()}
       - ${new Date(this.role.end_date).toDateString()} `
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
