<template>
  <v-container grid-list-md>
    <h1>Bills!</h1>
    <v-layout wrap>
      <v-flex v-for="bill in bills" :key="bill.bill_id">
        <v-card>
          <v-card-title class="body-2">
            {{bill.title}}
          </v-card-title>
          <v-card-text>
            Track on <a :href="bill.govtrack_url">Govtrack</a>
            <br>
            Latest Major Action: {{bill.latest_major_action}} {{bill.latest_major_action_date}}
          </v-card-text>
        </v-card>
        

      </v-flex>
    </v-layout>
  </v-container>
 
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters({
      bills: 'specificMemberBills',
    }),

  },
  
}
</script>

<style>

</style>
