<template>
  <div>
    <v-toolbar 
      id="responsive-nav" 
      :clipped-left="$vuetify.breakpoint.smAndUp" 
      app
      fixed
      dark 
      class="primary"
    >
      <v-toolbar-side-icon 
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">KnowThyCongress</router-link> 
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer 
      clipped 
      app 
      v-model="drawer" 
      fixed 
      :mobile-break-point="960"
      class="elevation-3"
      id="navigation-drawer"
    >

      <v-list dense>
        <v-list-tile router :to="home.path">
          <v-list-tile-content>
            <v-list-tile-title class="title">
              {{home.title}}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

       
        <v-list-group 
          sub-group
          no-action
          v-for="item in proPubItems"
          :key="item.title"
          v-model="item.active"
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title class="title">
                {{item.title}}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile 
            v-for="child in item.children" 
            :key="child.title"
            router
            :to="child.path"
          >
            <v-list-tile-content>
              <v-list-tile-title class="subheading">{{child.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>


  
</template>

<script>

export default {
  data: () => ({
      drawer: null,
      home: { title: 'Home', path: '/' },
      proPubItems: [
        { 
          active: false,
          title: 'Members', 
          children: [
            { title: 'Senate', path: '/members/senate' },
            { title: 'House', path: '/members/house' },
            { title: 'New Members', path: '/members/new' },
            { title: 'Members Leaving Office', path: '/members/leaving' },
          ]
        },
        {
          active: false,
          title: 'Votes',
          children: [
            { title: 'Recent Explanations', path: '/votes/explanations' },
          ]
        },
        {
          active: false,
          title: 'Bills',
          children: [
            { title: 'Search Bills', path: '/bills/search' },
            { title: 'Recent Bills', path: '/bills/recent' },
            { title: 'Upcoming Bills', path: '/bills/upcoming' },
          ]
        },
        {
          active: false,
          title: 'Statements', 
          children: [

          ]
        },
        {
          active: false,
          title: 'Committees',
          children: [

          ]
        }
      ]
    }),
}
</script>

<style>

#navigation-drawer {
  background-color: #f8f8f8;
}

</style>
