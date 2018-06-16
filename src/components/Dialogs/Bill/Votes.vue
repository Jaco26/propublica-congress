<template>
  <v-container v-if="votes" fluid grid-list-md>
    <v-flex class="text-xs-center">
      <h1>Votes</h1>
    </v-flex>
    <v-data-iterator 
      :items="votes" 
      :rows-per-page-items="votesPerPage" 
      :pagination.sync="pagination" 
      content-tag="v-layout"
      row wrap
      class="ma-2 pa-1 grey lighten-4"
    >
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm6
        lg3
        d-flex
      >
        <v-card flat>
          <v-card-text>
            <v-layout class="px-1">
              <div> 
                <b>{{props.item.date}} </b> 
              </div>        
                <v-spacer></v-spacer>         
              <div>
                <small><b> {{props.item.chamber}} {{props.item.action_type}}</b></small>
              </div>
            </v-layout>
            <v-divider></v-divider>
            <v-layout>
              <v-flex>
                <small><b>Result:</b></small> {{props.item.result}} 
                <small><b>Total Yes:</b></small> {{props.item.total_yes}} 
                <small><b>Total No:</b></small> {{props.item.total_no}} 
                <small><b>Not Voting:</b></small> {{props.item.total_not_voting}}
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex > 
                <small><b>Question:</b></small> {{props.item.question}} <br>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  props: ['votes'],
  data () {
    return {
      pagination: {
        rowsPerPage: 6
      }
    }
  },
  computed: {
    votesPerPage () {
      return this.votes.length < 6 ? [6] : [6, 9];
    }
  }
}
</script>

<style>

</style>
