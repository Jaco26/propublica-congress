<template>
  <v-container grid-list-md>
    <h1>Past Roles</h1>
    <v-progress-linear indeterminate v-if="isLoading"></v-progress-linear>
      <v-layout v-if="!isLoading" column>
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
  props: ['person', 'isLoading'],
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
