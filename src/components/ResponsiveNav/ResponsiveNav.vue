<template>
  <div>
    <v-navigation-drawer temporary absolute v-model="sideNav">
      <v-list class="p1-1">
        <v-list-tile 
        v-for="item in menuItems" 
        :key="item.title"
        router
        :to="item.link">
          <v-list-tile-content>
            <v-btn flat >
              {{item.title}}
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar dark class="primary">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">KnowThyCongress</router-link> 
      </v-toolbar-title>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" 
        :key="item.title"
        router
        :to="item.link">
          {{item.title}} 
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  // props: ['menuItems', 'sideNav'],
  data () {
    return {
      sideNav: false,
      menuItems: [
        {title: 'Home', link: '/'},
        {title: 'Members', link: '/members'},
        {title: 'Votes', link: '/votes'},
        {title: 'Bills', link: '/bills' },
        {title: 'Statements', link: '/statements'},
      ],
    }
  }
}
</script

<style>

</style>
