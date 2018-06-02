<template>
  <router-view></router-view>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  components: {
  },
  computed: {
    ...mapGetters({
      items: 'members/navItems',
      recentlyViewed: 'members/recentlyViewed',
    }),
  
  },
}
</script>

<style>

</style>