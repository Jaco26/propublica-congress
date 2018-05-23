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
import Explanations from '@/components/Votes/Explanations';
import SpecificVote from '@/components/Votes/SpecificVote';

// Bills components
import Bills from '@/components/Bills/Bills';
import Search from '@/components/Bills/Search';
import Recent from '@/components/Bills/Recent';
import Upcoming from '@/components/Bills/Upcoming';
// Statements components
import Statements from '@/components/Statements/Statements';

// Committees components
import Committees from '@/components/Committees/Committees';
import SpecificCommittee from '@/components/Committees/SpecificCommittee';

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
      ]
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
    {
      path: '/committees',
      name: 'Committees',
      component: Committees,
      children: [
        {
          path: ':id',
          name: 'SpecificCommittee',
          component: SpecificCommittee,
        },
      ]
    },
    {
      path: '/votes',
      name: 'Votes',
      component: Votes,
      redirect: '/votes/explanations',
      children: [
        {
          path: 'explanations',
          name: 'Explanations',
          component: Explanations,
        },
        {
          path: 'vote/:rollCall/:session',
          name: 'SpecificVote',
          component: SpecificVote
        },
      ]
    }
  ],
});



export default router;