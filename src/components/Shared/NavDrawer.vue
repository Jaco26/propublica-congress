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
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">KnowThyCongress</router-link> 
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn depressed fab color="transparent" v-for="link in links" :key="link.title" :to="link.path">
          <div class="text-xs-center">
            <v-icon>{{link.icon}}</v-icon>
          </div>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      clipped 
      app 
      v-model="drawer" 
      fixed 
      width="280"
      :mobile-break-point="960"
      id="navigation-drawer"
    >
      <v-list dense>  
        <template v-for="item in navDrawerItems">
          <!-- If item does NOT have children (v-if) -->
          <v-list-tile 
          v-if="!item.children" 
          :key="item.title"
          router
          :to="item.path"
          >
            <v-list-tile-content>
              <v-list-tile-title class="title">
                {{item.title}}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <!-- If item DOES have children (v-else) -->
          <v-list-group v-else v-model="item.active" :key="item.title">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title class="title">
                  {{item.title}}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- if child does NOT have children of its own (v-if)
            render list-tile FOR EACH of item's children (v-for) -->
            <v-list-tile v-if="!child.children" v-for="child in item.children" :key="child.title">
              <v-list-tile-content>
                <v-list-tile-title class="subheading">
                  {{child.title}}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- if child DOES have children of its own (v-else)
            render a list group for those children -->
            <v-list-group v-else v-model="child.active" :key="child.title" sub-group>
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title class=" app-nav-header">
                    {{child.title}}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <!-- render a list-tile FOR EACH grandChild of child's children -->
              <v-list-tile 
              v-for="grandChild in child.children" 
              :key="grandChild.title"
              router
              :to="grandChild.path"
              >
               <v-list-tile-action>
                    <v-icon></v-icon>
                  </v-list-tile-action>
                <v-list-tile-content >
                  <v-list-tile-title class="app-nav-link">
                    {{grandChild.title}}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  data: () => ({
      drawer: null,
      home: { title: 'Home', path: '/' },
      links: [
        { title: 'Leave A Comment', path: '/comment', icon: 'help' }
      ],
      navDrawerItems: [
        {
          title: 'Home', 
          path: '/'
        },
        {
          title: 'Explore',
          active: true,
          children: [
            { 
              active: true,
              title: 'Members', 
              children: [
                { title: 'Senate', path: '/members/senate' },
                { title: 'House', path: '/members/house' },
                { title: 'New Members', path: '/members/new' },
                { title: 'Members Leaving Office', path: '/members/leaving' },
              ]
            },
            {
              active: true,
              title: 'Votes',
              children: [
                { title: 'Recent Votes', path: '/votes/recent' },
                { title: 'Recent Explanations', path: '/votes/explanations' },
              ]
            },
            {
              active: true,
              title: 'Bills',
              children: [
                { title: 'Search Bills', path: '/bills' },
              ]
            },
            {
              active: true,
              title: 'Statements', 
              children: [

              ]
            },
            {
              active: true,
              title: 'Committees',
              children: [

              ]
            }
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

.app-nav-header {
  font-size: 18px;
  font-weight: 100;
}

.app-nav-link {
  font-size: 16px;
  font-weight: 600;
  color: #6e6e6e
}

.app-nav-link:hover {
  font-size: 16px;
  font-weight: 600;
  color: #1f1f1f;
}



</style>
