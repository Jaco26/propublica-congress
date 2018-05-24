<template>
  <v-container grid-list-md>
    <h1>Past Roles</h1>
    <v-progress-linear indeterminate v-if="isLoading"></v-progress-linear>
    <v-container v-if="!isLoading">
      <v-layout column>
        <role 
          v-for="(role, i) in person.roles"
          :key="i"
          :role="role" 
          xs6
        /> 
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
import Role from './Role';

export default {
  props: ['person', 'isLoading'],
  components: {
    Role,
  },
  // computed: {
  //   ...mapGetters({
  //     person: 'members/specificMember/member',
  //     isLoading: 'members/specificMember/isLoading'
  //   }),
  // }
}

</script>

<style >
  ul {
    list-style: none;
  }

</style>
