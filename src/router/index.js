import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';

import membersRoutes from '@/router/propublica/members.routes';
import billsRoutes from '@/router/propublica/bills.routes';

// Votes componenets
import Votes from '@/components/Votes/Votes';
import Explanations from '@/components/Votes/Explanations';
import SpecificVote from '@/components/Votes/SpecificVote';

// // Bills components
// import Bills from '@/components/Bills/Bills';
// import Search from '@/components/Bills/Search';
// import Recent from '@/components/Bills/Recent';
// import Upcoming from '@/components/Bills/Upcoming';
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
    membersRoutes,
    billsRoutes,
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
          name: 'specificCommittee',
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
          name: 'explanations',
          component: Explanations,
        },
        {
          path: 'vote/:rollCall/:sessionNumber/:chamber/:congress',
          name: 'specificVote',
          component: SpecificVote
        },
      ]
    }
  ],
});



export default router;