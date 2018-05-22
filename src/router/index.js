import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
// Members components
import Members from '@/components/Members/Members';
import List from '@/components/Members/List/List';
import Member from '@/components/Members/Member/Member';
import NewMembers from '@/components/Members/NewMembers';
import MembersLeaving from '@/components/Members/MembersLeaving';

// Votes componenets
import Votes from '@/components/Votes/Votes';
// Bills components
import Bills from '@/components/Bills/Bills';
import Search from '@/components/Bills/Search';
import Recent from '@/components/Bills/Recent';
import Upcoming from '@/components/Bills/Upcoming';
// Statements components
import Statements from '@/components/Statements/Statements';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/members',
      name: 'Members',
      component: Members,
      redirect: '/members/senate',
      children: [
        {
          path: 'senate',
          name: 'Senate',
          component: List,
        },
        {
          path: 'house',
          name: 'House',
          component: List,
        },
        {
          path: 'member/:id',
          name: 'Member',
          component: Member,
        },
        {
          path: 'new',
          name: 'NewMembers',
          component: NewMembers,
        },
        {
          path: 'leaving',
          name: 'MembersLeaving',
          component: MembersLeaving,
        },
      
        
        // {
        //   component: SenateMembers,
        //   name: 'Senate',
        //   path: 'senate',
        // },
        // {
        //   component: HouseMembers,
        //   name: 'House',
        //   path: 'house',
        // },
        // {
        //   component: MemberDisplay,
        //   name: 'Member',
        //   path: 'member/:id',
        //   children: [
            // {
        //       component: MemberBills,
        //       name: 'MemberBills',
        //       path: 'bills',
        //     },
        //     {
        //       component: MemberVotes,
        //       name: 'MemberVotes',
        //       path: 'votes'
        //     },

        //     {
        //       component: MemberStatements,
        //       name: 'MemberStatements',
        //       path: 'statements'
        //     },
        //   ]
        // }
      ]
    },
    {
      path: '/votes',
      name: 'Votes',
      component: Votes,
    },
    {
      path: '/bills',
      redirect: '/bills/search',
      name: 'Bills',
      component: Bills,
      children: [
        {
          component: Recent,
          name: 'Recent',
          path: 'recent',
        }, 
        {
          component: Upcoming,
          name: 'Upcomeing',
          path: 'upcoming',
        },
        {
          component: Search,
          name: 'Search',
          path: 'search',
        }
      ]
    },
    {
      path: '/statements',
      name: 'Statements',
      component: Statements,
    },
  ],
});



export default router;