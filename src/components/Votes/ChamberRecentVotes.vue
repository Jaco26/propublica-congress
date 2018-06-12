<template>
  <div>
    <h1>{{chamber}}</h1>
    <v-container grid-list-md fluid>
      <transition-group name="slide">
        <v-flex class="ma-2" v-for="vote in votes" :key="vote.roll_call">
          <v-card flat tile>
            {{vote.description}}
          </v-card> 
        </v-flex>
      </transition-group>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    votes: {
      type: Array,
      required: true
    },
    chamber: String
  }
}
</script>
