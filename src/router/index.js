import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Members from '@/components/Members/Members'
import SenateMembers from '@/components/Members/Senate';
import HouseMembers from '@/components/Members/House';
import MemberDisplay from '@/components/Members/Member/MemberDisplay';
import MemberVotes from '@/components/Members/Member/MemberVotes';
import MemberBills from '@/components/Members/Member/MemberBills';
import MemberStatements from '@/components/Members/Member/MemberStatements';
import Votes from '@/components/Votes/Votes';
import Bills from '@/components/Bills/Bills';
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
      children: [
        {
          component: SenateMembers,
          name: 'Senate',
          path: 'senate',
        },
        {
          component: HouseMembers,
          name: 'House',
          path: 'house',
        },
        {
          component: MemberDisplay,
          name: 'Member',
          path: 'member/:id',
          children: [
            {
              component: MemberBills,
              name: 'MemberBills',
              path: 'bills',
            },
            {
              component: MemberVotes,
              name: 'MemberVotes',
              path: 'votes'
            },

            {
              component: MemberStatements,
              name: 'MemberStatements',
              path: 'statements'
            },
          ]
        }
      ]
    },
    {
      path: '/votes',
      name: 'Votes',
      component: Votes,
    },
    {
      path: '/bills',
      name: 'Bills',
      component: Bills,
    },
    {
      path: '/statements',
      name: 'Statements',
      component: Statements,
    },
  ],
});



export default router;