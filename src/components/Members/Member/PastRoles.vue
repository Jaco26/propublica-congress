<template>
  <v-container grid-list-md v-if="!personLoading">
    <h1>Past Roles</h1>
    <v-progress-linear indeterminate v-if="personLoading"></v-progress-linear>
      <v-layout  column>
          <role 
            v-for="(role, i) in person.roles"
            :key="i"
            :role="role" 
          /> 
      </v-layout>
  </v-container>
</template>

<script>
import Role from './Role';
export default {
  props: ['person', 'personLoading'],
  components: {
    Role,
  },

}

</script>

<style >
  ul {
    list-style: none;
  }

</style>
