<template>
  <v-card-text>
    <v-layout class="my-1">
      <v-flex>
        <ul>
          <li><b>Sponsor:</b> {{bill.sponsor_title}} {{bill.sponsor || bill.sponsor_name}} {{bill.sponsor_party}} {{bill.sponsor_state}}</li>
          <li><b>Introduced:</b> {{bill.introduced_date}}</li>
          <li><b>Active:</b> {{bill.active}}</li>
          <li><b>Last Vote:</b> {{bill.last_vote ? bill.last_vote : 'none'}}</li>
        </ul>
      </v-flex>
      <v-flex>
        <ul>
          <li> 
            <b>Passed the House:</b> 
            {{bill.house_passage ? bill.house_passage : 'No'}} 
            </li>
          <li> 
            <b>Passed the Senate:</b> 
            {{bill.senate_passage ? bill.senate_passage : 'No'}}
          </li>  
          <li> 
            <b>Enacted</b> 
            {{bill.enacted ? bill.enacted : 'No'}}
          </li>
          <li> 
            <b>Vetoed</b> 
            {{bill.vetoed ? bill.vetoed : 'No'}}
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
            <span v-if="bill.latest_major_action_date"> <b>Date:</b> {{bill.latest_major_action_date}} </span>
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
</template>

<script>
export default {
  props: ['bill'],
  data() {
    return {
      showLongSummary: false,
    } 
  },
  methods: {

  }
}
</script>
