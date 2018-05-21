<template>
  <v-layout align-center column :class="{active: open}">
    <!-- <div class="text-xs-center"> -->
      <v-btn  class="text-xs-center" fab small @click="toggle"> 
        <v-icon v-if="!open">add</v-icon> 
        <v-icon v-if="open">remove</v-icon> 
      </v-btn>
    <!-- </div> -->
    
    <h2>{{role.title}} <small>{{role.state}} {{role.party}} </small> </h2>
    {{dates}}

    <v-flex v-show="open">
      <small><b>Bills Sponsored:</b></small> {{role.bills_sponsored}} <br>
      <small><b>Bills Cosponsored:</b></small> {{role.bills_cosponsored}} <br>
      <v-flex v-if="role.district">
         <small><b>District:</b></small> {{role.district}}
      </v-flex>

     
      <ul v-if="committees">
        <committee 
          v-for="(committee, i) in committees" 
          :key="i"
          :committee="committee" 
        />
      </ul>
    </v-flex>
  </v-layout>

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
    /* background-color: aq*/
  }

</style>
