import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';

import membersRoutes from '@/router/propublica/members.routes';
import billsRoutes from '@/router/propublica/bills.routes';
import votesRoutes from '@/router/propublica/votes.routes'
import committeesRoutes from '@/router/propublica/committees.routes'
import statementsRoutes from '@/router/propublica/statements.routes'

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
    statementsRoutes,
    committeesRoutes,
    votesRoutes,
  ],
});



export default router;