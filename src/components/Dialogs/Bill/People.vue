<template>
  <v-card-text>
    <v-layout class="my-1">
      <v-flex>
        <ul>
          <li><b>Sponsor:</b> {{bill.sponsor_title}} {{bill.sponsor || bill.sponsor_name}} {{bill.sponsor_party}} {{bill.sponsor_state}}</li>
          <li><b>Introduced:</b> {{new Date(bill.introduced_date).toLocaleDateString()}}</li>
          <li><b>Active:</b> {{bill.active}}</li>
          <li><b>Last Vote:</b> {{bill.last_vote ? new Date(bill.last_vote).toLocaleDateString() : 'none'}}</li>
        </ul>
      </v-flex>
    </v-layout>
  </v-card-text>
</template>

<script>
export default {
  props: ['bill']
}
</script>

<style>

</style>
