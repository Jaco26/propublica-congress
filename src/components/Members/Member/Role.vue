<template>
  <v-container>
    <v-layout align-center column :class="{active: open}">
      <v-layout>
        <v-flex>
          <h2>{{role.title}} <small>{{role.state}} {{role.party}} </small> </h2>
          {{dates}}
        </v-flex>
        <v-flex >
          <div>
            <v-btn class="text-sm-center" :color="open ? btnClose: btnOpen" outline fab small @click="toggle"> 
              <v-icon  v-if="!open">add</v-icon> 
              <v-icon v-if="open">remove</v-icon> 
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    
      
      <!-- <transition name="fade"> -->
        <v-flex v-show="open">
          <small><b>Bills Sponsored:</b></small> {{role.bills_sponsored}} <br>
          <small><b>Bills Cosponsored:</b></small> {{role.bills_cosponsored}} <br>
          <small><b>Missed Votes Pct:</b></small> {{role.missed_votes_pct}}% <br>
          <small><b>Votes With Party:</b></small> {{role.votes_with_party_pct}}% <br>
          <div v-if="role.district">
            <small><b>District:</b></small> {{role.district}}
          </div>

          <ul v-if="committees">
            <committee 
              v-for="(committee, i) in committees" 
              :key="i"
              :committee="committee" 
            />
          </ul>
        </v-flex>
      <!-- </transition> -->
    </v-layout>
  </v-container>
  
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
      btnClose: 'accent'
    }
  },
  computed: {
    committees () {
      return this.role.committees;
    },
    dates () {
      return `${new Date(this.role.start_date).toDateString()}
       - ${new Date(this.role.end_date).toDateString()} `
    }

  },
  methods: {
    toggle () {
      this.open = !this.open;
    }
  }

}
</script>

<style>

  .active {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.1s ease-out;
  } 

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
