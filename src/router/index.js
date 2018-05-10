import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Bookmarks from '@/components/Bookmarks/Bookmarks';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/bookmarks',
      name: 'Bookmarks',
      component: Bookmarks,
    }
  ],
});
