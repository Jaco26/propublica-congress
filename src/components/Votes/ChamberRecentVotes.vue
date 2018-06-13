<template>
  <div>
    <div class="text-xs-center">
      <h1>{{chamber}}</h1>
    </div>
    <v-divider></v-divider>
    <v-container grid-list-md fluid>
      <v-layout wrap>
        <transition-group name="slide">
          <app-vote 
            v-for="(vote, i) in votes" 
            :key="vote.roll_call"
            v-if="vote.description"
            :vote="vote"
            :index="i"
            class="vote-item"
          ></app-vote>
        </transition-group>
        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Vote from './Vote'
export default {
  props: {
    votes: {
      type: Array,
      required: true
    },
    chamber: String
  },
  components: {
    appVote: Vote
  },
}
</script>

<style>

.vote-item {
  transition: all 1s;
  display: block;
  cursor: pointer;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slide-leave-active {
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}



</style>
