<template>
  <v-container v-if="actions" fluid grid-list-md>
    <v-flex class="text-xs-center">
      <h1>Actions</h1>
    </v-flex>
    <v-data-iterator 
      :items="actions" 
      :rows-per-page-items="actionsPerPage" 
      :pagination.sync="pagination" 
      content-tag="v-layout"
      row wrap
      class="ma-2 pa-1 grey lighten-4"
    >
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm4
        lg3
        d-flex
      >
        <v-card flat height="150">
          <v-card-text>
            <v-layout class="px-1">
              <div> 
                <b>{{props.item.datetime}} </b> 
              </div>        
              <v-spacer></v-spacer>         
              <div>
                <small><b> {{props.item.chamber}} {{props.item.action_type}}</b></small>
              </div>
            </v-layout>
            <v-divider></v-divider>
            <v-tooltip v-if="props.item.description.length > 120" max-width="400" top>
              <span slot="activator">{{descriptionSlices[props.index]}}</span>
              <span>{{props.item.description}}</span>
            </v-tooltip>
            <v-flex v-else>
              {{props.item.description}}
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import {ACTION_DESCRIPTION_SLICES} from '@/store/modules/Bills/bill-types'
export default {
  props: ['actions'],
  data () {
    return {
      pagination: {
        rowsPerPage: 6,
      }
    }
  },
  computed: {
    actionsPerPage () {
      return this.actions.length < 6 ? [6] : [6, 9];
    },
    ...mapGetters('bills/specificBill', {
      descriptionSlices: ACTION_DESCRIPTION_SLICES,
    }),
  }
}



</script>

