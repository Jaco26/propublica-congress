<template>
  <div>
    <v-layout v-if="personLoading" >
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </v-layout>
    <v-container grid-list-md v-if="!personLoading">
    <h1>Past Roles</h1>
      <v-layout  column>
          <role 
            v-for="(role, i) in person.roles"
            :key="i"
            :role="role" 
          /> 
      </v-layout>
    </v-container>
  </div>

  
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
