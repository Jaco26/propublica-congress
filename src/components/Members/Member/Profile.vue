<template>
  <v-container grid-list-md>
    <h1>Past Roles</h1>
    <v-container>
      <ul>
        <role 
          v-for="(role, i) in person.roles"
          :key="i"
          :role="role" 
        />
      </ul>
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


}

</script>

<style scoped>

</style>
