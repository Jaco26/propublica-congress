<template>
  <v-container  :id="`legislator-block-${letter}`" v-if="members[0]">
    <v-layout column>

      <v-layout>
        <v-flex class="headline">
          {{letter}}
        </v-flex>
      </v-layout>
    
      <v-divider></v-divider>
      
      <v-layout wrap align-content-start justify-content-start>
        <v-flex xs6 sm3 class="my-2" v-for="(member, i) in members" :key="i">
          <router-link :to="`/members/member/${member.id}`"><strong>{{member.first_name}} {{member.last_name}}</strong></router-link>   <br>
          {{member.state}}  {{member.party}}
        </v-flex>
      </v-layout>
      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['letter', 'membersList'],
  computed: {
    members () {
      return this.membersList.filter(member => member.last_name.toUpperCase().startsWith(this.letter));
    }
  }
}
</script>

<style>

</style>
