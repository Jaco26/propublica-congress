<template>
  <div>
    <v-card>
      <v-layout v-if="personLoading" >
        <v-progress-linear indeterminate color="primary"></v-progress-linear>
      </v-layout>
      <v-container grid-list-md v-if="!personLoading">
      <h1>Past Roles</h1>
        <v-layout column>
            <role 
              v-for="(role, i) in person.roles"
              :key="i"
              :role="role" 
            /> 
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
// Components
import Role from './Role'
// Vuex
import {mapState, mapActions} from 'vuex'
import {FETCH_MEMBER} from '@/store/modules/Members/specificMember.types'
export default {
  components: {
    Role,
  },
  computed: {
    ...mapState('members/specificMember', {
      person: state => state.profile.main,
      personLoading: state => state.profile.loading,
    })
  },
  methods: {
    ...mapActions('members/specificMember', {
      fetchMember: FETCH_MEMBER,
    })
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     if (vm.person.member_id != to.params.id && to.params.id) {
  //       vm.fetchMember(to.params.id)
  //     }
  //   })
  // }

}

</script>

<style >
  ul {
    list-style: none;
  }

</style>
