<template>
  <v-layout justify-center>
    <v-card>
      <p v-if="bill.short_title"> <b>Short Title:</b> {{bill.short_title}} </p>
      <p v-else-if="bill.title"> <b>Title:</b> {{bill.title}} </p>
      <p> <b>Sponsor:</b> {{bill.sponsor_title}} {{bill.sponsor}} {{bill.sponsor_party}} {{bill.sponsor_state}} </p>
      <p> <b>Introduced on:</b> {{bill.introduced_date}} </p>
      <p> <b>Active:</b> {{bill.active}}  </p>
      <p> <b>Last Vote:</b> {{bill.last_vote ? bill.last_vote : 'none'}} </p> 
      
      <p v-if="bill.house_passage"> <b>Passed the House:</b> {{bill.house_passage}} </p>
      <p v-if="bill.senate_passage"> <b>Passed the Senate:</b> {{bill.senate_passage}} </p>  
      <p v-if="bill.enacted"> <b>Enacted</b> {{bill.enacted}}</p>
      <p v-if="bill.vetoed"> <b>Vetoed</b> {{bill.vetoed}}</p>
    
      <p v-if="bill.cosponsors"> <b>Cosponsors:</b> 
        <span> <b>Total:</b> {{bill.cosponsors}}  </span>
        <span> <b>Democrat:</b> {{bill.cosponsors_by_party.D ? bill.cosponsors_by_party.D : 0}}  </span>
        <span> <b>Republican:</b> {{bill.cosponsors_by_party.R ? bill.cosponsors_by_party.R : 0}}  </span>
        <span> <b>Independent:</b> {{bill.cosponsors_by_party.I ? bill.cosponsors_by_party.I : 0}}  </span>
      </p>
      <p v-if="bill.withdrawn_cosponsors > 0"> <b>Withdrawn Cosponsors</b> {{bill.withdrawn_cosponsors}} </p>
      <p v-if="bill.primary_subject"> <b>Primary Subject:</b> {{bill.primary_subject}} </p>
      <p v-if="bill.committees"> <b>Committees:</b> {{bill.committees}} </p>
      <p v-if="bill.latest_major_action"> 
        <b>Latest Major Action:</b> {{bill.latest_major_action}} <br>
        <span v-if="bill.latest_major_action_date"> <small><b>Date:</b></small> {{bill.latest_major_action_date}} </span>
      </p>
      <p v-if="bill.summary_short"> 
        <b>Summary:</b> {{showLongSummary ? bill.summary : bill.summary_short}} <br>
        <v-btn v-if="bill.summary" @click="showLongSummary = !showLongSummary">{{showLongSummary ? 'Less' : 'More'}}</v-btn>
      </p>

      <!-- Actions Data Iterator -->
      <v-container v-if="bill.actions" fluid grid-list-md>
        <h1>Actions</h1>
        <v-data-iterator 
          :items="bill.actions" 
          :rows-per-page-items="actionsPerPage" 
          :pagination.sync="actions.pagination" 
          content-tag="v-layout"
          row wrap
        >
          <v-flex
            slot="item"
            slot-scope="props"
            xs12
            sm4
            lg3
            d-flex
          >
            <v-card flat color="grey lighten-4">
              <v-card-text>
                 <v-layout>
                  <v-flex> 
                    {{new Date(props.item.datetime).toLocaleDateString()}}
                  </v-flex>
                  <v-flex class="text-xs-end"> {{props.item.chamber}} {{props.item.action_type}}</v-flex>
                  <v-flex>  </v-flex>
                </v-layout>
                 <v-divider></v-divider>
                {{props.item.description}}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-data-iterator>
      </v-container>

      <!-- Votes Pagination -->
      <div v-if="bill.votes">
        <h1>Votes</h1>
        <ol>
          <li v-for="(vote, i) in bill.votes" v-if="i < votes.displayLimit" :key="vote.roll_call" class="mt-2">
            <small><b>Chamber:</b></small> {{vote.chamber}} <br>
            <small><b>Date:</b></small> {{vote.date}} <br>
            <small><b>Question:</b></small> {{vote.question}} <br>
            <small><b>Result:</b></small> {{vote.result}} <br>
            <small><b>Total Yes:</b></small> {{vote.total_yes}} <br>
            <small><b>Total No:</b></small> {{vote.total_no}} <br>
            <small><b>Not Voting:</b></small> {{vote.total_not_voting}} <br>
          </li>
        </ol>
        <v-btn v-if="votes.displayLimit < bill.votes.length" @click="showMoreOrLess('votes', 5)">Show More</v-btn>
        <v-btn v-if="votes.displayLimit > 5" @click="showMoreOrLess('votes', -5)">Show Less</v-btn>
        <span>Showing {{votesShowing}} of {{bill.votes.length}} past votes. </span>
      </div>

    </v-card>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { FETCH_SPEC_BILL } from '@/store/modules/bills/bill-types'
export default {
  data () {
    return {
      showLongSummary: false,
      votes: {
        displayLimit: 5,
        pagination: 5,
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
    votesShowing () {
      return this.bill.votes.length < this.votes.displayLimit
        ? this.bill.votes.length
        : this.votes.displayLimit
    },
    votesPerPage () {
      return this.bill.votes.length < 6 ? [6] : [6, 12];
    },
    actionsPerPage () {
      return this.bill.actions.length < 6 ? [6] : [6, 12];
    }
  },
  methods: {
    ...mapActions('bills/specificBill', {
      fetchBill: FETCH_SPEC_BILL,
    }),
    showMoreOrLess (item, amount) {            
      this[item].displayLimit += amount;
    },

  },
  beforeRouteEnter (to, from, next) {
    let { billId } = to.params;
    next(vm => {
      vm.fetchBill({billId});
    });
  }
}
</script>
