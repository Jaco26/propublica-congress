<template>
  <v-layout justify-center>
    <v-card class="pa-2">
      <v-card-title>
        <div v-if="bill.short_title" class="title text-xs-center"> {{bill.short_title}} </div>
        <div v-else-if="bill.title" class="title text-xs-center"> <b>Title:</b> {{bill.title}}</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout class="my-1">
          <v-flex>
            <ul>
              <li><b>Sponsor:</b> {{bill.sponsor_title}} {{bill.sponsor}} {{bill.sponsor_party}} {{bill.sponsor_state}}</li>
              <li><b>Introduced:</b> {{new Date(bill.introduced_date).toLocaleDateString()}}</li>
              <li><b>Active:</b> {{bill.active}}</li>
              <li><b>Last Vote:</b> {{bill.last_vote ? new Date(bill.last_vote).toLocaleDateString() : 'none'}}</li>
            </ul>
          </v-flex>
          <v-flex>
            <ul>
              <li> 
                <b>Passed the House:</b> 
                {{bill.house_passage ? new Date(bill.house_passage).toLocaleDateString() : 'No'}} 
                </li>
              <li> 
                <b>Passed the Senate:</b> 
                {{bill.senate_passage ? new Date(bill.senate_passage).toLocaleDateString() : 'No'}}
              </li>  
              <li> 
                <b>Enacted</b> 
                {{bill.enacted ? new Date(bill.enacted).toLocaleDateString() : 'No'}}
              </li>
              <li> 
                <b>Vetoed</b> 
                {{bill.vetoed ? new Date(bill.vetoed).toLocaleDateString() : 'No'}}
              </li>
            </ul>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout class="my-1">
          <v-flex>
            <div v-if="bill.cosponsors">
              <b>Cosponsors:</b> 
              <p> 
                <span> <b>Total:</b> {{bill.cosponsors}}  </span> &nbsp;
                <span> <b>Democrat:</b> {{bill.cosponsors_by_party.D ? bill.cosponsors_by_party.D : 0}}  </span> &nbsp;
                <span> <b>Republican:</b> {{bill.cosponsors_by_party.R ? bill.cosponsors_by_party.R : 0}}  </span> &nbsp;
                <span> <b>Independent:</b> {{bill.cosponsors_by_party.I ? bill.cosponsors_by_party.I : 0}}  </span> &nbsp;
              </p>
            </div>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <ul>
              <li v-if="bill.withdrawn_cosponsors > 0"> <b>Withdrawn Cosponsors</b> {{bill.withdrawn_cosponsors}} </li>
              <li v-if="bill.primary_subject"> <b>Primary Subject:</b> {{bill.primary_subject}} </li>
              <li v-if="bill.committees"> <b>Committees:</b> {{bill.committees}} </li>
              <li v-if="bill.latest_major_action"> 
                <b>Latest Major Action:</b> {{bill.latest_major_action}} <br>
                <span v-if="bill.latest_major_action_date"> <b>Date:</b> {{new Date(bill.latest_major_action_date).toLocaleDateString()}} </span>
              </li>
            </ul>
            <v-divider></v-divider>
            <p v-if="bill.summary_short" class="my-1"> 
              <b>Summary:</b> {{showLongSummary ? bill.summary : bill.summary_short}} <br>
              <v-btn flat block v-if="bill.summary.length > bill.summary_short.length" @click="showLongSummary = !showLongSummary">{{showLongSummary ? 'Less' : 'More'}}</v-btn>
            </p>
          </v-flex>
        </v-layout>
      </v-card-text>

      <!-- Actions Data Iterator -->
      <v-container v-if="bill.actions" fluid grid-list-md>
        <v-flex class="text-xs-center">
          <h1>Actions</h1>
        </v-flex>
        <v-data-iterator 
          :items="bill.actions" 
          :rows-per-page-items="actionsPerPage" 
          :pagination.sync="actions.pagination" 
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
                    <b>{{new Date(props.item.datetime).toLocaleDateString()}} </b> 
                  </div>        
                  <v-spacer></v-spacer>         
                  <div>
                    <small><b> {{props.item.chamber}} {{props.item.action_type}}</b></small>
                  </div>
                </v-layout>
                <v-divider></v-divider>
                <v-tooltip v-if=" props.item.description.length > 120" max-width="400" top>
                  <span slot="activator"> {{ props.item.description.slice(0, 120)}}... </span>
                  <span> {{props.item.description}} </span>
                </v-tooltip>
                <v-flex v-else>
                  {{props.item.description}}
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-data-iterator>
      </v-container>
    
      <v-container v-if="bill.votes" fluid grid-list-md>
          <v-flex class="text-xs-center">
            <h1>Votes</h1>
          </v-flex>
          <v-data-iterator 
            :items="bill.votes" 
            :rows-per-page-items="votesPerPage" 
            :pagination.sync="votes.pagination" 
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
                      <b>{{new Date(props.item.date).toLocaleDateString()}} </b> 
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
    </v-card>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { FETCH_SPEC_BILL } from '@/store/modules/Bills/bill-types'
export default {
  data () {
    return {
      showLongSummary: false,
      votes: {
        pagination: {
          rowsPerPage: 6
        },
      },
      actions: {
        pagination: {
          rowsPerPage: 6
        },
      }
    }
  },
  computed: {
    ...mapState('bills/specificBill', {
      bill: state => state.bill.main,
      loading: state => state.bill.main,
    }),
    votesPerPage () {
      return this.bill.votes.length < 6 ? [6] : [6, 9];
    },
    actionsPerPage () {
      return this.bill.actions.length < 6 ? [6] : [6, 9];
    },
    
  },
  methods: {
    ...mapActions('bills/specificBill', {
      fetchBill: FETCH_SPEC_BILL,
    }),
    showMoreOrLess (item, amount) {            
      this[item].displayLimit += amount;
    },
    showTooltip(index){
      console.log(index);
      console.log(this.actionsModels[index]);
      
      this.actionsModels[index].tooltip = !this.actionsModels[index].tooltip;
      console.log(this.actionsModels[index]);
    },
    // used as model for actions tooltip
    actionsModels () {
      return this.bill.actions.map(el => {
        return {tooltip: false};
      });
    }


  },
  beforeRouteEnter (to, from, next) {
    let { billId } = to.params;
    next(vm => {
      vm.fetchBill({billId});
    });
  }
}
</script>

<style scoped>

ul {
  list-style: none;
}


</style>
