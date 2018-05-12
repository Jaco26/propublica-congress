import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Bookmarks from '@/components/Bookmarks/Bookmarks';
import Member from '@/components/Member/Member';
import MemberVotes from '@/components/Member/MemberVotes';
import MemberBills from '@/components/Member/MemberBills';
import MemberStatements from '@/components/Member/MemberStatements';

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
    },
    {
      path: '/member/:id/',
      component: Member,
      children: [
        {
          component: MemberBills,
          path: 'bills',
        },
        {
          component: MemberVotes,
          path: 'votes'
        },
        
        {
          component: MemberStatements,
          path: 'statements'
        },
      ]
    }
  ],
});
