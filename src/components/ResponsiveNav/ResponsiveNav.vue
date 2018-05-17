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

      <!-- <v-tabs
        slot="extension"
        v-model="tab"
        color="primary"
        align-with-title>
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="item in menu" :key="item.title" @click="item.action">
          {{ item.title }}
        </v-tab>
      </v-tabs> -->

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
        {title: 'Home', link: '/'},
        {title: 'Members', link: '/members'},
        {title: 'Votes', link: '/votes'},
        {title: 'Bills', link: '/bills' },
        {title: 'Statements', link: '/statements'},
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
</script

<style>

</style>

/**  */