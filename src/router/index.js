import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Members from '@/components/Members/Members'
import SenateMembers from '@/components/Members/Senate';
import HouseMembers from '@/components/Members/House';
import Member from '@/components/Members/Member/Member';
import MemberVotes from '@/components/Members/Member/MemberVotes';
import MemberBills from '@/components/Members/Member/MemberBills';
import MemberStatements from '@/components/Members/Member/MemberStatements';
import Votes from '@/components/Votes/Votes';
import Bills from '@/components/Bills/Bills';
import Statements from '@/components/Statements/Statements';

Vue.use(Router);

export default new Router({
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
          path: 'senate',
        },
        {
          component: HouseMembers,
          path: 'house',
        },
        {
          component: Member,
          path: ':id',
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
      ]
    },
    {
      path: '/votes',
      component: Votes,
    },
    {
      path: '/bills',
      component: Bills,
    },
    {
      path: '/statements',
      component: Statements,
    },
    
  ],
  // mode: 'history'
});
