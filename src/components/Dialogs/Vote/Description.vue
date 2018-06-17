<template>
  <v-layout class="my-1">
    <v-flex>
      <ul style="list-style: none;">
        <li> <b>Type:</b> {{vote.vote_type}} </li>
        <li> <b>Date:</b> {{vote.date}} </li>
        <li> <b>Question:</b> {{vote.question}} </li>
        <li> <b>Result:</b> {{vote.result}} </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['vote']
}
</script>
