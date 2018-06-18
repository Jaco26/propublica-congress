<template>
  <v-layout  class="my-1">
    <!-- <v-layout> -->
      <v-flex v-if="partyPositions.democratic" xs12 md6>
        <h4>Democrats</h4>
        <small><b>Yes</b></small> {{partyPositions.democratic.yes}} <br>
        <small><b>No</b></small> {{partyPositions.democratic.no}} <br>
        <small><b>Not Voting</b></small> {{partyPositions.democratic.not_voting}} <br>
      </v-flex>
      <v-flex v-if="partyPositions.republican" xs12 md6>
        <h4>Republicans</h4>
        <small><b>Yes</b></small> {{partyPositions.republican.yes}} <br>
        <small><b>No</b></small> {{partyPositions.republican.no}} <br>
        <small><b>Not Voting</b></small> {{partyPositions.republican.not_voting}} <br>
      </v-flex>
      <v-flex v-if="partyPositions.independent" xs12 md6>
        <h4>Independents</h4>
        <small><b>Yes</b></small> {{partyPositions.independent.yes}} <br>
        <small><b>No</b></small> {{partyPositions.independent.no}} <br>
        <small><b>Not Voting</b></small> {{partyPositions.independent.not_voting}} <br>
      </v-flex>
      <v-flex v-if="partyPositions.total" xs12 md6>
        <h4>Total</h4>
        <small><b>Yes</b></small> {{partyPositions.total.yes}} <br>
        <small><b>No</b></small> {{partyPositions.total.no}} <br>
        <small><b>Not Voting</b></small> {{partyPositions.total.not_voting}} <br>
      </v-flex>
    <!-- </v-layout>  -->
  </v-layout>
</template>

<script>
export default {
  props: {
    partyPositions: {
      type: Object,
      required: true
    }
  }
}
</script>
