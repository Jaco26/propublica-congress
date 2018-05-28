<template>
  <div id="responsive-nav">
    <v-navigation-drawer temporary absolute v-model="sideNav">
      <v-list class="p1-1">
        <v-list-tile 
        v-for="item in menuItems" 
        :key="item.title"
        router
        :to="item.path">
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
        :to="item.path">
          {{item.title}} 
        </v-btn>
        
      </v-toolbar-items>

    </v-toolbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  // props: ['menuItems', 'sideNav'],
  data () {
    return {
      sideNav: false,
      menuItems: [
        {title: 'Home', path: '/'},
        {title: 'Members', path: '/members'},
        {title: 'Votes', path: '/votes'},
        {title: 'Bills', path: '/bills' },
        {title: 'Statements', path: '/statements'},
      ],
        tab: null,
      helperMenu: {
         members: [
          {
            title: 'Senate',
            options: ['Congress']
          },
          {
            title: 'House',
            options: ['Congress']
          },
          {
            title: 'New Members',
            action: () => alert('Hello')
          },
          {
            title: 'Current Members',
            options: ['State', 'District'],
          },
          {
            title: 'Members Leaving Office',
            options: ['Chamber', 'Congress'],
          },
        ],
      },

      
       
    }
  },
  computed: {
    ...mapGetters({
        menu: 'menu'
      }),
      thisMenu: (menu) => {

      }
  }
}
</script>

<style>


</style>

/**  */