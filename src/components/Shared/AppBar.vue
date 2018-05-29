<template>
  <v-toolbar id="responsive-nav" :clipped-left="$vuetify.breakpoint.lgAndUp" fixed app dark class="primary">
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer;">KnowThyCongress</router-link> 
    </v-toolbar-title>
    <v-toolbar-side-icon 
      @click.native.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"
    ></v-toolbar-side-icon>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
    }
  }
}
</script>

<style>

</style>
